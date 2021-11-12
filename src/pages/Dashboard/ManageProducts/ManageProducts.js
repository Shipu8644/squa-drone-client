import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container>
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold' }} variant="h4">All Products {products.length}</Typography>
            <Grid sx={{ my: 3 }} container spacing={2}>
                {products.map(product => <ManageProduct
                    key={product._id}
                    product={product}
                ></ManageProduct>)}
            </Grid>
        </Container>
    );
};

export default ManageProducts;