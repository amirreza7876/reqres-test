import axios from "axios";

const allData = async () => {
    const initialGet = await axios.get("https://reqres.in/api/products/");
    const all = await axios.get("https://reqres.in/api/products/", {
        params: {
            per_page: initialGet.data.total,
        },
    });
    return all;
};

const fetchData = async (data) => {
    return await axios.get("https://reqres.in/api/products/", {
        params: {
            per_page: 5,
            page: data?.pageNumber,
        },
    });
};

export { fetchData, allData };
