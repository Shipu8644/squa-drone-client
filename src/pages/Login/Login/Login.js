import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../Shared/Navigation/Navbar/Navbar';

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Typography sx={{ mt: 5 }} variant="h5" gutterBottom>Login Here</Typography>
            <form >
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    variant="standard" />
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    name="password"
                    variant="standard" />
                <br />
                <br />
                <Button style={{ backgroundColor: '#01b1ec' }} sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Login</Button>
                <br />
                <br />
                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/register">
                    <Button variant="text">New User? Please Register</Button>
                </NavLink>
            </form>
            <p>------------------------</p>
            <Button style={{ backgroundColor: '#01b1ec' }} variant="contained">Google Sign In</Button>

        </div>
    );
};

export default Login;