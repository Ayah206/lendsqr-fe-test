import React from 'react';
import {AppBar, Toolbar, Grid, Typography, IconButton, Box, Paper} from '@mui/material';
import { Stack, TextField, Button, InputBase, Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import {Images} from '../../assets/images'
import { styled } from '@mui/material/styles';
import './dashboard.css'
import { Search, Notification, DropDown } from '../../assets/icons';
import MenuIcon from '@mui/icons-material/Menu';
import {Menu, MenuItem, MenuList, ListItemIcon, ListItemText} from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';


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

interface Props {
    mobileOpen: boolean;
    setMobileOpen: Function;
}  
function Navbar({mobileOpen, setMobileOpen} : Props) {
    //handle app bar menu
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <AppBar position="fixed" sx={{ 
            zIndex: (theme) => theme.zIndex.drawer + 1, 
            padding: '10px 0px',
            bgcolor : 'rgba(255, 255, 255, 1)',
            boxShadow: '3px 0px 20px 0px rgba(0, 0, 0, 0.04)' }}
        >
            <Grid container sx = {{py:2.5, px:3.5}}>
                <Grid item xs = {4} md = {2.5} spacing = {1} sx = {{display:'flex', alignItems:'center', color: '#213F7D'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={()=>setMobileOpen(!mobileOpen)}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src = {Images.logo} width = '144.8px' />
                </Grid>
                <Grid item xs = {8} md = {9.5} 
                    sx = {{
                        display:'flex', 
                        justifyContent: {xs: 'end', sm : 'space-between'}, 
                        px:{lg: 3.5}, 
                        alignItems: 'center'
                    }}    
                >
                    <Box className = 'searchDiv'
                        sx={{ 
                            width: {xs : '70%', md: '400px'},
                            display: { xs: 'none', sm: 'flex' }  
                        }} 
                    >
                        <div className = 'searchInput'>
                            <StyledInputBase fullWidth placeholder = 'Search for anything'/>
                        </div>
                        <div className = 'searchIconDiv'>
                            <Search/>
                        </div>
                    </Box>
                    <Stack direction='row' alignItems='center' spacing={3}  className='menuItems' 
                        sx={{ 
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Roboto' 
                        }}
                    >
                        <div>
                            <Link href="#" color="inherit">Docs</Link>
                        </div>
                        <div>
                            <Notification/>
                        </div>
                        <Stack direction="row" alignItems = 'center' spacing={1}>
                            <Avatar alt="Cindy Baker" src={Images.avatar} />
                            <IconButton sx = {{'&:hover': {background: 'none'} }}>
                                <Typography className = 'menuItems' 
                                    sx = {{
                                        fontStyle: 'Medium', fontSize: '16px', mr:1, fontFamily: 'Work Sans', LineHeight: '18.77px'

                                    }}
                                > Adedeji </Typography>
                                <DropDown/>
                            </IconButton>
                        </Stack>
                    </Stack>
                    <Box sx={{ display: { xs: 'flex', md: 'none', color: '#213F7D' } }}>
                        <IconButton
                            size="large"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            sx = {{color: '#213F7D'}}
                            >
                            <MenuItem>
                                <ListItemText inset><Link href="#" color="inherit">Doc</Link></ListItemText>
                            </MenuItem>
                            <MenuItem sx = {{color: '#213F7D'}}>
                                <ListItemIcon >
                                    <Notification width = '20'/> 
                                </ListItemIcon>
                                Notifications
                            </MenuItem>
                            <MenuItem sx = {{color: '#213F7D'}}>
                                <ListItemIcon >
                                    <Avatar alt="Cindy Baker" src={Images.avatar}  sx={{ width: 20, height : 20 }}/> 
                                </ListItemIcon>
                                Adedeji
                            </MenuItem>
                        </Menu>
                    </Box>
                </Grid>
            </Grid>
      </AppBar>
    );
}

export default Navbar;