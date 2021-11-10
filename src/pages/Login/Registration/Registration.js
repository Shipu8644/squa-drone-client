import React from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import register from '../../../images/register.png'
import logoBlack from '../../../images/logo-black.png'
const Registration = () => {
    return (
        <Container>
            <img src={logoBlack} alt="" />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 5 }} variant="h5" gutterBottom>Please <span style={{ color: '#01b1ec' }}>Register</span></Typography>
                    <form>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"

                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"

                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"

                            variant="standard" />
                        <br />
                        <br />
                        <Button style={{ backgroundColor: '#01b1ec' }} sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <br />
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: 15 }}>
                    <img style={{ width: '100%' }} src={register} alt="" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default Registration;