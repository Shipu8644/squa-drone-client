import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import './Navbar.css';
import { Link } from "react-router-dom";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { makeStyles } from '@mui/styles';
import logoBlack from '../../../../images/logo-black.png'


const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginRight: "20px",
        display: "flex",
        paddingBottom: "15px"
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "black",
        fontSize: "18px",
        marginLeft: "80px",
        fontFamily: ""
    },
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="static" style={{ backgroundColor: 'white' }}>
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    <img style={{ width: '180px' }} src={logoBlack} alt="" />

                </Typography>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navlinks}>
                        <Link to="/home" className={classes.link}>
                            Home
                        </Link>
                        <Link to="/about" className={classes.link}>
                            Explore Services
                        </Link>
                        <Link to="/about" className={classes.link}>
                            Our Team
                        </Link>
                        <Link to="/login" style={{ backgroundColor: '#01b1ec', color: 'white', padding: "2px 40px", borderRadius: "5px" }} className={classes.link}>
                            Login
                        </Link>

                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;