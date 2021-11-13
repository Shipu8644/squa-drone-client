import { Alert, AlertTitle, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold' }} variant="h4">Total Orders: {orders.length}</Typography>
            {orders.length ? <Grid container sx={{ my: 3 }} spacing={2}>
                {orders.map(orders => <MyOrder
                    key={orders._id}
                    orders={orders}
                ></MyOrder>)
                }
            </Grid>

                :
                <Alert severity="info" sx={{ mt: 5 }}>
                    <AlertTitle>info</AlertTitle>
                    You haven't order anything — <strong>check out Explore Products for making order please!</strong>
                    <Link to='/explore-services' style={{ textDecoration: 'none' }}> <Button variant="contained">Explore Products</Button></Link>
                </Alert>
            }
        </Container>
    );
};

export default MyOrders;