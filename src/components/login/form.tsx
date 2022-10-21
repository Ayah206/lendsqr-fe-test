import React from 'react';
import Box from '@mui/material/Box';
import './login.scss';
import { styled } from '@mui/material/styles';
import { Stack, Typography, TextField, Button, InputAdornment } from '@mui/material';

function Form() {
    //set up breakpoints fpr media query
    
    //set show/hide password state
    const [showPass, setShowPass] = React.useState(false)
    //customize typography component
    const StyledType = styled(Typography)`
        font-family: Avenir Next;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0.1em;
        color: rgba(57, 205, 204, 1)
    `;
    return (
        <Box sx = {{width : '60%', ml: '15%', mt: {xs:1, md:25}, mb:10 }}>
            <Stack spacing = {8}>
                <Stack spacing = {2}>
                    <Typography align = 'left' sx = {{
                        fontFamily: 'Avenir Next',
                        fontSize: '40px',
                        fontWeight: '700',
                        lineHeight: '55px',
                        letterSpacing: '-0.04em',
                        color : 'rgba(33, 63, 125, 1)'
                    }}>
                        Welcome!
                    </Typography>
                    <Typography align = 'left' sx = {{
                        fontFamily: 'Avenir Next',
                        fontSize: '20px',
                        fontWeight: '400',
                        lineHeight: '27px',
                        letterSpacing: '0em',
                        color : 'rgba(84, 95, 125, 1)'    
                    }}>
                        Enter details to login
                    </Typography>
                </Stack> 
                <Stack spacing = {3} className = 'inputText'>
                    <TextField fullWidth label="Email" size = 'small' value = 'adedeji@admin.com'/>
                    <TextField 
                        size = 'small'
                        fullWidth
                        label="Password"
                        value = 'password'
                        type = {showPass ? 'text' : 'password'}
                        InputProps={{
                            endAdornment:
                            <InputAdornment position="end" sx = {{background: 'transparent'}}>
                                <StyledType
                                    variant = 'button'
                                    onClick={()=>setShowPass(!showPass)}
                                >
                                {showPass ? 'HIDE' : 'SHOW'}
                                </StyledType>
                            </InputAdornment>
                        }}
                    />
                    <StyledType align = 'left'>
                        FORGOT PASSWORD?
                    </StyledType>
                    <Button variant="contained" fullWidth
                        href = '/users' 
                        size = 'large'
                        sx = {{
                        p:1.5,
                        background: 'rgba(57, 205, 204, 1)',
                        borderRadius: '5px',
                        boxShadow: "none",
                        "&:hover": {
                            background: 'rgba(57, 205, 204, 1)'
                        },
                        fontFamily: 'Avenir Next',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '19px',
                        textAlign: 'center',
                        letterSpacing: '0.1em',
                    }}>
                        LOG IN
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Form;