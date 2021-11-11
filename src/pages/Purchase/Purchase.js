import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Shared/Navigation/Navbar/Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [service, setService] = useState({});
    const [order, setOrder] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = { ...order };
        newOrder[field] = value;
        console.log(newOrder);
        setOrder(newOrder);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const orders = {
            ...order,
            serviceName: service.name,
            price: service.price,

        }
        console.log(orders)
    }

    return (
        <div>
            <Navbar></Navbar>
            <Container sx={{ flexGrow: 1, my: 3 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: 2 }}>
                            <CardContent>
                                <img style={{ width: "430px" }} src={service.img} alt="" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}
                        sx={{
                            display: 'flex',
                            textAlign: 'left',
                        }}
                    >
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontFamily: 'Monospace' }} variant="h3">
                                {service.name}
                            </Typography>

                            <Typography sx={{ py: 3, color: 'text.secondary' }}>
                                {service.description}
                            </Typography>

                            <Typography sx={{ fontFamily: 'fantasy', fontSize: '30px' }}>
                                ${service.price}
                            </Typography>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <TextField
                                    sx={{ width: '50%', mb: 2 }}
                                    disabled
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    defaultValue={user.displayName}
                                    variant="filled"
                                    size="small"
                                />
                                <br />
                                <TextField
                                    sx={{ width: '50%', mb: 2 }}
                                    disabled
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    defaultValue={user.email}
                                    variant="filled"
                                    size="small"
                                />
                                <br />
                                <TextField
                                    onBlur={handleOnBlur}
                                    required
                                    sx={{ width: '50%', mb: 2 }}
                                    hiddenLabel
                                    name="phone"
                                    placeholder="Enter Phone Number"
                                    variant="filled"
                                    size="small"
                                />
                                <br />
                                <TextField
                                    onBlur={handleOnBlur}
                                    required
                                    sx={{ width: '50%', mb: 2 }}
                                    hiddenLabel
                                    name="address"
                                    placeholder="Enter Address"
                                    variant="filled"
                                    size="small"
                                />
                                <br />
                                <Button type="submit" style={{ backgroundColor: '#01b1ec', padding: "5px 100px" }} variant="contained">Order Now</Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Purchase;