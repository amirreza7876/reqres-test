import { Grid, Pagination } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function PaginationSection() {
    const { data, getData } = useContext(DataContext);

    const handleChangePage = (pageNumber) => {
        getData({ pageNumber });
    };

    if (data) {
        return (
            <Grid mt={3}>
                <Pagination
                    count={data.data.total_pages}
                    color="primary"
                    onChange={(e) => {
                        handleChangePage(e.target.textContent);
                    }}
                />
            </Grid>
        );
    }
}

export default PaginationSection;
