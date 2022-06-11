import axios from "axios";

const fetchData = async (data) => {
    return await axios.get("https://reqres.in/api/products/", {
        params: {
            per_page: 5,
            page: data?.page,
            id: data?.id,
        },
    });
};

export { fetchData };
