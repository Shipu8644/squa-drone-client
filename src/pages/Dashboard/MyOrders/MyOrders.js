import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    return (
        <Container>
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold' }} variant="h4">Orders List {orders.length}</Typography>
            <Grid container sx={{ my: 3 }} spacing={2}>
                {orders.map(orders => <MyOrder
                    key={orders._id}
                    orders={orders}
                ></MyOrder>)}
            </Grid>
        </Container>
    );
};

export default MyOrders;