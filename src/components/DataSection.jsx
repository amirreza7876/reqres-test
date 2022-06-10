import {
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
    const { data, filteredItem } = useContext(DataContext);
    if (data) {
        rows = data.data.data.map((item) =>
            createData(item.id, item.name, item.year, item.color)
        );
    }
    if (!data && !rows) {
        return <p>loading...</p>;
    } else {
        return (
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
                            <TableRow
                                key={filteredItem.name}
                                style={{ backgroundColor: filteredItem.color }}
                            >
                                <TableCell component="th" scope="row">
                                    {filteredItem.name}
                                </TableCell>
                                <TableCell>{filteredItem.id}</TableCell>
                                <TableCell>{filteredItem.year}</TableCell>
                            </TableRow>
                        ) : (
                            rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    style={{ backgroundColor: row.color }}
                                >
                                    {console.log(row)}
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
