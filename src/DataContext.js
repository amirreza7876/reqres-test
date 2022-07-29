import { createContext, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { fetchData } from "./services/fetchData";

export const DataContext = createContext();

const DataContextProvider = ({ children, page }) => {
    const [data, setData] = useState();
    const [id, setId] = useState();
    const [filteredItem, setFilteredItem] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const { mutateAsync: getData } = useMutation((data) => fetchData(data), {
        onSuccess: (result) => {
            if (result.status === 200) {
                setData(result);
                setErrorMessage();
            }
        },
        onError: (error) => {
            setErrorMessage("Product with this id does not exist.");
        },
    });

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (id) {
            getData({ id });
        } else if (id === "") {
            getData();
            setFilteredItem();
        }
    }, [id]);

    if (data) {
        return (
            <DataContext.Provider
                value={{
                    data,
                    getData,
                    setId,
                    filteredItem,
                    setFilteredItem,
                    errorMessage,
                }}
            >
                {children}
            </DataContext.Provider>
        );
    }
};

export default DataContextProvider;
