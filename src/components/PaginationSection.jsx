import { Grid, Pagination } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function PaginationSection() {
    let showPagination = true;
    const { data, getData, errorMessage } = useContext(DataContext);

    const handleChangePage = (page) => {
        getData({ page });
    };
    if (!data.data.data.length) {
        showPagination = false;
    }
    if (data) {
        return (
            !errorMessage &&
            showPagination && (
                <Grid mt={3}>
                    <Pagination
                        count={data.data.total_pages}
                        color="primary"
                        onChange={(event, page) => handleChangePage(page)}
                    />
                </Grid>
            )
        );
    }
}

export default PaginationSection;
