import React from 'react';
import {AppBar, Toolbar, Grid, Typography, IconButton} from '@mui/material';
import { Stack, TextField, Button, InputBase, Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import {Images} from '../../assets/images'
import { styled } from '@mui/material/styles';
import './dashboard.css'
import { Search, Notification, DropDown } from '../../assets/icons';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '16px',
    color: '#545F7D',
    opacity: 0.7,
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 0, 0),
      // vertical padding + font size from searchIcon
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

function Navbar() {
    return (
        <AppBar position="fixed" sx={{ 
            zIndex: (theme) => theme.zIndex.drawer + 1, 
            padding: '10px 0px',
            bgcolor : 'rgba(255, 255, 255, 1)',
            boxShadow: '3px 0px 20px 0px rgba(0, 0, 0, 0.04)' }}
        >
            <Grid container sx = {{py:2.5, px:3.5}}>
                <Grid item xs = {2.5} sx = {{display:'flex', alignItems:'center'}}>
                    <img src = {Images.logo} width = '144.8px' />
                </Grid>
                <Grid item xs = {9.5} sx = {{display:'flex', justifyContent:'space-between', px:3.5}}>
                    <div className = 'searchDiv' >
                        <div className = 'searchInput'>
                            <StyledInputBase fullWidth placeholder = 'Search for anything'/>
                        </div>
                        <div className = 'searchIconDiv'>
                            <Search/>
                        </div>
                    </div>
                    <Stack direction = 'row' alignItems = 'center' spacing = {3} className = 'menuItems'>
                        <div>
                            <Link href="#" color="inherit">Doc</Link>
                        </div>
                        <div>
                            <Notification/>
                        </div>
                        <Stack direction="row" alignItems = 'center' spacing={1}>
                            <Avatar alt="Cindy Baker" src={Images.avatar} />
                            <Typography sx = {{fontStyle: 'medium', fontSize: '16px' }}> Adedeji </Typography>
                            <IconButton sx = {{p:0}}>
                                <DropDown/>
                            </IconButton>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
      </AppBar>
    );
}

export default Navbar;