import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <AppBar style={{ backgroundColor: '#01b1ec' }} position="static" color="primary">
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>

                        </Grid>
                        <Grid item xs={6} md={4}>

                        </Grid>
                        <Grid item xs={6} md={4}>

                        </Grid>
                        <Grid item xs={6} md={8}>

                        </Grid>
                    </Grid>

                    <Typography sx={{ textAlign: 'center' }} variant="body1" color="inherit">
                        © 2021 Shipu
                    </Typography>

                </Container>
            </AppBar>

        </div>
    );
};

export default Footer;