import React from 'react';
import {List, ListItemButton, ListItem, ListItemText, ListItemIcon } from '@mui/material';

type listItemObject = {
    icon : React.ReactNode,
    text : string
}
type menuObject = {
    title : String,
    details : Array<listItemObject>
}

interface Props {
    listDetails: menuObject;
}  
function MenuListItems({listDetails} : Props) {
    return (
        <List>
            <ListItem disablePadding>
                <ListItemText disableTypography primary={listDetails.title} 
                    sx = {{
                        color: 'rgba(84, 95, 125, 1)',
                        fontSize: '12px',
                        lineHeight: '14px',
                        textTransform: 'uppercase',
                        fontWeight: 'medium',
                        ml:2,
                        px: 2,
                        py: 1
                    }}
                />
            </ListItem>
            {listDetails.details.map(
                (item, index) => (
                    <ListItem key = {index} disablePadding>
                        <ListItemButton >
                            <ListItemIcon  sx = {{minWidth:'25px', ml:2}}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary= {item.text} 
                                sx = {{
                                    fontWeight:'400',
                                    textTransform: 'capitalize',
                                    opacity: '60%'
                                }} 
                            />
                        </ListItemButton>
                    </ListItem>    
                )
            )}
        </List>
    );
}

export default MenuListItems;