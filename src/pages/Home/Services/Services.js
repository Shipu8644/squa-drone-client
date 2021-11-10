import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container sx={{ flexGrow: 1, my: 3 }}>
            <Typography sx={{ my: 3, fontWeight: 'bold' }} variant='h4'> Services</Typography>
            <Grid container spacing={3}>
                {services.slice(0, 6).map(service => <Service
                    service={service}
                ></Service>)}
            </Grid>
        </Container>
    );
};

export default Services;