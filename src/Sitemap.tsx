import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { useEffect, useState } from "react";

type Data = {
    id: number,
    url: string,
    title: string
}

interface Rows {
    
}

export default function Sitemap() {
    const [rows, setRows] = useState<Data[]>([]);

    async function handleData() {
        const response = await fetch('http://localhost:8080/', {
            method: 'POST'
        });
        const data = await response.json();
        console.log(data);
        setRows(data);
        // fetch data and update state
    }

    useEffect(() => {
        handleData();
    }, []);

    return (
        <>
            <div>Sitemap</div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.url}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}