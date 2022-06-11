import { Grid, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { DataContext } from "../DataContext";

function Search() {
    const [id, setId] = useState();
    const { setId: filterById } = useContext(DataContext);

    const handleChange = (e) => {
        const onlyNums = e.target.value.replace(/[^0-9]/g, "");
        setId(onlyNums);
        filterById(onlyNums);
    };

    return (
        <div>
            <Grid mb={4}>
                <TextField
                    onChange={(e) => handleChange(e)}
                    value={id}
                    id="outlined-basic"
                    label="Search by id"
                    variant="outlined"
                />
            </Grid>
        </div>
    );
}

export default Search;
