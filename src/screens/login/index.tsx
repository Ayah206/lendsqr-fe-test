import React from 'react';
import Left from '../../components/login/left'
import Form from '../../components/login/form'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const Login = () => {
    return (
        <Grid container sx = {{height: '100vh'}}>
            <Grid item md = {6} xs = {12}>
                <Left/>
            </Grid>
            <Grid item md = {6} xs = {12}  
                sx={{boxShadow: '0px 15px 90px 0px rgba(0, 0, 0, 0.03)' }}
            >
                <Form />
            </Grid>
        </Grid>
    );
};

export default Login;