import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container sx={{ flexGrow: 1, my: 3 }}>
            <Typography sx={{ my: 3, fontWeight: 'bold' }} variant='h4'> Products</Typography>
            <Grid container spacing={3}>
                {services.slice(0, 6).map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)}
            </Grid>
        </Container>
    );
};

export default Services;