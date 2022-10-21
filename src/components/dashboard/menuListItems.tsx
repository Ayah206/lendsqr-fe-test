import React from 'react';
import {List, ListItemButton, ListItem, ListItemText, ListItemIcon, Link } from '@mui/material';
import {Props} from './types.menuListItem'

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
                (item, index) => {
                    let str = item.text.split(' ')
                        .map(item => item)
                        .join('-')
                    return (
                    <ListItem key = {index} disablePadding>
                        <ListItemButton id = {str} href = {`/${str}`} >
                            <ListItemIcon  sx = {{minWidth:'25px', ml:2, opacity: '60%'}}>
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
                    </ListItem>)   
                }
            )}
        </List>
    );
}

export default MenuListItems;