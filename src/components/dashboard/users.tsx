import { Box, Grid, Paper, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import CardData from '../../constants/cardData';
import Table from './table'

interface Props {
    icon : React.ReactNode,
    title : String,
    number : String
}

function DataCard({icon, title, number} : Props){
    return(
        <Paper sx = {{
            height: '160px',
            width: {xs: '400px', sm:'300px', md:'240px'},
            borderRadius: '4px',
            border: '1px solid rgba(33, 63, 125, 0.06)',
            boxShadow: '3px 5px 20px 0px rgba(0, 0, 0, 0.04)',
            p: 2,
            pl: 4
        }}>
            <Stack spacing = {2}>
                {icon}
                <Typography align = 'left' sx = {{
                    color: 'rgba(84, 95, 125, 1)',
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '16.42px',
                    textTransform: 'uppercase'
                }} >{title}</Typography>
                <Typography variant = 'caption' align = 'left' component = 'div'>{number}</Typography>
            </Stack>
        </Paper>
    )
}

function Users() {
    return (
        <Box sx = {{p : 4}}>
            <Typography variant = 'caption' align = 'left' component = 'div' sx = {{py: 5}} >
                Users
            </Typography>
            <Grid container spacing={3} sx = {{pb:5}} >
                {
                    CardData.map((item, index)=>(
                        <Grid item>
                            <DataCard key = {index} icon ={item.icon} title = {item.title} number = {item.number}/>
                        </Grid>
                    ))
                }
            </Grid>
            <Table/>
        </Box>
    );
}

export default Users;