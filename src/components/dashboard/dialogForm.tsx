import * as React from 'react'
import { Button, Box, Typography, MenuItem } from '@mui/material';
import {Dialog, DialogActions, DialogContent, InputBase, Input, FormControl, OutlinedInput} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Header} from './types.table'
import { Filter } from '../../assets/icons';

export function DialogForm({name}:Header){
    const [orgName, setOrgName] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setOrgName(event.target.value as string);
    };
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return(
        <Box>
            <span>{name}</span>
            <Button sx = {{minWidth: 0}} onClick={handleClickOpen}>
                <Filter/>
            </Button>
            <Dialog open={open} onClose={handleClose} sx = {{width: '300px', height: 'fit-content'}}>
                <DialogContent>
                    <FormControl fullWidth className = 'dialogSelect' >
                        <Typography variant = 'subtitle1'>
                            Organization
                        </Typography>
                        <Select
                            id="orgName"
                            input={<InputBase/>}
                            value={orgName}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth className = 'dialogInput'>
                        <Typography variant = 'subtitle1'>
                            User name
                        </Typography>
                        <InputBase defaultValue="user" id="username" />
                    </FormControl>
                    <FormControl fullWidth className = 'dialogInput'>
                        <Typography variant = 'subtitle1'>
                            Email
                        </Typography>
                        <InputBase defaultValue="user" id="username" />
                    </FormControl>
                    <FormControl fullWidth className = 'dialogInput'>
                        <Typography variant = 'subtitle1'>
                            Date
                        </Typography>
                        <InputBase defaultValue="user" id="username" />
                    </FormControl>
                    <FormControl fullWidth className = 'dialogInput'>
                        <Typography variant = 'subtitle1'>
                            Phone Number
                        </Typography>
                        <InputBase defaultValue="user" id="username" />
                    </FormControl>
                    <FormControl fullWidth className = 'dialogSelect' >
                        <Typography variant = 'subtitle1'>
                            Status
                        </Typography>
                        <Select
                            id="status"
                            input={<InputBase />}
                            value={orgName}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions sx = {{justifyContent:'center'}}>
                    <Button variant = 'outlined' onClick={handleClose} color = 'inherit'>RESET</Button>
                    <Button variant = 'contained' onClick={handleClose} sx = {{bgcolor:'#39CDCC'}}>FILTER</Button>
                </DialogActions>
            </Dialog>
        </Box>
        
    )
}