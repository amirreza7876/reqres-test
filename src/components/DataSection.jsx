import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../DataContext";
function createData(id, name, year, color) {
    return { id, name, year, color };
}

function DataSection() {
    let rows;
    let filteredItem;
    const { data, errorMessage } = useContext(DataContext);
    if (data) {
        if (data.data.data.length) {
            rows = data.data.data.map((item) =>
                createData(item.id, item.name, item.year, item.color)
            );
        } else {
            filteredItem = data.data.data;
        }
    }
    if (!data && !rows) {
        return <p>loading...</p>;
    } else {
        return errorMessage ? (
            <p>Nothing found on recorded Data</p>
        ) : (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>Year</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {filteredItem ? (
                            // show filtered Item
                            <TableRow
                                key={filteredItem.name}
                                style={{
                                    backgroundColor: filteredItem.color,
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {filteredItem.name}
                                </TableCell>
                                <TableCell>{filteredItem.id}</TableCell>
                                <TableCell>{filteredItem.year}</TableCell>
                            </TableRow>
                        ) : (
                            // map over all data
                            rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    style={{ backgroundColor: row.color }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.year}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default DataSection;
