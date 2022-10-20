import * as React from 'react';
import Navbar from './navbar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Briefcase, DropDownEmpty, Home } from '../../assets/icons';
import MenuListItems from './menuListItems';
import MenuData from '../../constants/menuData';
import './dashboard.scss'
import {Props} from './types.drawer'
import { useLocation } from 'react-router-dom';

const drawerWidth = 283;


export default function ClippedDrawer({children}: Props) {
    const location = useLocation()

    React.useEffect(()=>{
        const el = document.getElementById(location.pathname)
        el && el.classList.add('menuActive')
    }, [])

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar />
            <Box sx={{ overflow: 'auto'}}>
                <List>
                    <ListItem disablePadding >
                        <ListItemButton id = '/organisation' >
                            <ListItemIcon  sx = {{minWidth:'25px', ml:2}}>
                              <Briefcase/>  
                            </ListItemIcon>
                            <ListItemText primary= 'Switch Organisation' sx = {{fontWeight:'400'}} />
                            <ListItemIcon  sx = {{minWidth:'25px'}}>
                              <DropDownEmpty/>  
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>    
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton id = '/dashboard' >
                            <ListItemIcon  sx = {{minWidth:'25px', ml:2}}>
                              <Home/>  
                            </ListItemIcon>
                            <ListItemText  primary= 'Dashboard' sx = {{opacity: '60%'}} />
                        </ListItemButton>
                    </ListItem>    
                </List>
                {
                    MenuData.map((data, index)=>(
                        <MenuListItems key = {index} listDetails = {data} />
                        )
                    )
                }                
            </Box>
        </div>
    )
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
        <Navbar mobileOpen = {mobileOpen} setMobileOpen = {setMobileOpen}/>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'flex', md: 'none' },
            boxShadow: '3px 0px 20px 0px rgba(0, 0, 0, 0.04)' ,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', border: 'none', py:6, pl:2 },
          }}

        >
          {drawer}
        </Drawer>
        <Drawer
            variant="permanent"
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            display: { xs: 'none', md: 'flex' },
            boxShadow: '3px 0px 20px 0px rgba(0, 0, 0, 0.04)' ,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', border: 'none', pt:7, pb:5 },
            }}
        >
            {drawer}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: '#fbfbfb'}}>
            <Toolbar/>
            {children}
        </Box>
        </Box>
    );
}
