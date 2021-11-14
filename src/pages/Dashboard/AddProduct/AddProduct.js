import { Container, TextField, Typography } from '@mui/material';
import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
const AddProduct = () => {
    return (
        <Container>
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold', mb: 2 }} variant="h4" >Add a Single Product</Typography>
            <form action="">
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    placeholder="Enter the product Name"
                />
                <br />
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    placeholder="Enter the Price"
                />
                <br />
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    placeholder="img url"
                />
                <br />
                <TextareaAutosize

                    aria-label="minimum height"
                    minRows={6}
                    placeholder="Description"
                    style={{ width: 450, margin: 2 }}
                />
            </form>

        </Container>
    );
};

export default AddProduct;