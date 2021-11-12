import { Container, FormControl, Grid, InputLabel, MenuItem, NativeSelect, Select, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { Box } from '@mui/system';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = React.useState('pending');
    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    const handleChange = e => {
        setStatus(e.target.value);
    }
    const manageStatus = (id) => {
        console.log(id, status);
    }

    return (
        <Container>
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold' }} variant="h4">All Orders List</Typography>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Service Name</StyledTableCell>
                            <StyledTableCell align="left">Phone</StyledTableCell>
                            <StyledTableCell align="left">Address</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                            <StyledTableCell align="left">Action </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.email}</StyledTableCell>
                                <StyledTableCell align="left">{row.serviceName}</StyledTableCell>
                                <StyledTableCell align="left">{row.phone}</StyledTableCell>
                                <StyledTableCell align="left">{row.address}</StyledTableCell>
                                <StyledTableCell align="left">
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <NativeSelect
                                                onClick={() => manageStatus(row._id)}
                                                defaultValue={status}
                                                onChange={handleChange}
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="Rejected">rejected</option>
                                                <option value="Shipped">shipped</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </Box>
                                </StyledTableCell>

                                <StyledTableCell align="left">
                                    <Tooltip title="Delete">
                                        <BackspaceIcon sx={{
                                            cursor: 'pointer',
                                            mt: 1,
                                            color: "red",

                                        }}></BackspaceIcon>
                                    </Tooltip>
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageAllOrders;