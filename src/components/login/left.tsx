import React from 'react';
import {Images} from '../../assets/images'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import './login.scss'

const Left = () => {
    return (
        <Box sx={{ mx:5, mt: {xs : 0, md : 10}, p:5}}>
            <Stack spacing = {{xs:6, md:6}}>
                <div className = 'logoDiv'>
                    <img src = {Images.logo} />
                </div>
                <div className = 'artDiv'>
                    <img src = {Images.digArt} width="100%"/>
                </div>
            </Stack>
        </Box>
    );
};

export default Left;