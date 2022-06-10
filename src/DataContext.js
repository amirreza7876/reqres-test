import { createContext, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { allData, fetchData } from "./services/fetchData";
export const DataContext = createContext();

const DataContextProvider = ({ children, page }) => {
    const [data, setData] = useState();
    const [allDataState, setAllDataState] = useState();
    const [id, setId] = useState();
    const [filteredItem, setFilteredItem] = useState();

    const { mutateAsync: getData } = useMutation((page) => fetchData(page), {
        onSuccess: (result) => {
            if (result.status === 200) {
                setData(result);
            }
        },
    });

    const { mutateAsync: allDataService } = useMutation(() => allData(), {
        onSuccess: (result) => {
            if (result.status === 200) {
                console.log(result);
                setAllDataState(result);
            }
        },
    });

    useEffect(() => {
        getData();
        allDataService();
    }, []);

    useEffect(() => {
        if (id) {
            setFilteredItem(
                allDataState.data.data.find((item) => item.id == id)
            );
        } else if (id === "") {
            setFilteredItem();
        }
    }, [id]);

    if (data) {
        return (
            <DataContext.Provider
                value={{ data, getData, setId, filteredItem }}
            >
                {children}
            </DataContext.Provider>
        );
    }
};

export default DataContextProvider;
