import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExploreService from '../ExploreService/ExploreService';
import Navbar from '../Shared/Navigation/Navbar/Navbar';

const ExploreServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <Container sx={{ flexGrow: 1, my: 3 }}>
                <Typography sx={{ my: 3, fontWeight: 'bold' }} variant='h4'> Services</Typography>
                <Grid container spacing={3}>
                    {services.map(service => <ExploreService
                        service={service}
                    ></ExploreService>)}
                </Grid>
            </Container>
        </div>
    );
};

export default ExploreServices;