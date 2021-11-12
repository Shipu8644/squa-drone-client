import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Rating from 'react-rating'
const SingleReview = ({ review }) => {

    const { name, email, designation, message, rating } = review;
    return (
        <Grid item xs={12} md={4}>

            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography sx={{ fontFamily: 'serif' }} variant="h5">
                    {name}
                </Typography>
                <Typography variant="subtitle2">
                    {designation}
                </Typography>
                <Typography sx={{ fontSize: '13px' }} variant="caption">
                    {email}
                </Typography>

                <Typography
                    sx={{
                        my: 1
                    }}
                >
                    <Rating
                        style={{
                            color: '#01b1ec',

                        }}
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating>
                </Typography>
                <Typography sx={{ color: 'text.secondary' }} variant="body1">
                    {message}
                </Typography>

            </Paper>
        </Grid>
    );
};

export default SingleReview;