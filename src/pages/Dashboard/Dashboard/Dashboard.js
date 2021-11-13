import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AdminDashboard from '../AdminDashboard/AdminDashboard';

const drawerWidth = 240;

function Dashboard(props) {
    const { logout, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <Toolbar />
            <Typography>Will insert logo</Typography>
            <Divider />
            <Box sx={{
                textAlign: 'left',
                pl: 4,
                pt: 4

            }}>
                {/* Common for Admin and users */}
                <Link style={{ textDecoration: 'none' }} to="/explore-services" >
                    <Button sx={{}} variant="text"> Explore Products</Button>
                </Link>

                <Link style={{ textDecoration: 'none' }} to={`${url}`} >
                    <Button sx={{}} variant="text"> Dashboard</Button>
                </Link>
                <br />

                {/* only for users */}
                {!admin && <Box>

                    <Link style={{ textDecoration: 'none' }} to={`${url}/myOrders`} >
                        <Button sx={{}} variant="text">My Orders</Button>
                    </Link>
                    <br />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/addReview`} >
                        <Button sx={{}} variant="text">Add Review</Button>
                    </Link>
                    <br />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/payOrder`} >
                        <Button sx={{}} variant="text"> Pay Order</Button>
                    </Link>
                    <br />
                </Box>}

                {/* Only For Admin */}
                {admin && <Box>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/manageOrders`} >
                        <Button sx={{}} variant="text"> Manage Orders</Button>
                    </Link>
                    <br />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/addProduct`} >
                        <Button sx={{}} variant="text">Add Product</Button>
                    </Link>
                    <br />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/manageProducts`} >
                        <Button sx={{}} variant="text">Manage Products</Button>
                    </Link>
                    <br />
                    <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`} >
                        <Button sx={{}} variant="text">Make Admin</Button>
                    </Link>
                    <br />
                </Box>}

                <Link onClick={logout} style={{ textDecoration: 'none' }} to="/login" >
                    <Button sx={{}} variant="text"> Logout</Button>
                </Link>
            </Box>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                style={{ backgroundColor: '#01b1ec' }}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        {!admin ? <DashboardHome></DashboardHome>
                            :
                            <AdminDashboard></AdminDashboard>
                        }
                    </Route>
                    <Route exact path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/addReview`}>
                        <Review></Review>
                    </Route>
                    <Route exact path={`${path}/payOrder`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute exact path={`${path}/manageOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
