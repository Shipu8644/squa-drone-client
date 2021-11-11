import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExploreService from '../ExploreService/ExploreService';
import Navbar from '../Shared/Navigation/Navbar/Navbar';
import CircularProgress from '@mui/material/CircularProgress';
const ExploreServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            {services.length ? <Container sx={{ flexGrow: 1, my: 3 }}>
                <Typography sx={{ my: 3, fontWeight: 'bold' }} variant='h4'> Services</Typography>
                <Grid container spacing={3}>
                    {services.map(service => <ExploreService
                        service={service}
                    ></ExploreService>)}
                </Grid>
            </Container>
                :
                <CircularProgress />
            }
        </div>
    );
};

export default ExploreServices;