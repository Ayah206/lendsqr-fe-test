import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Header} from './types.table'
import { Filter, DateIcon } from '../../assets/icons';
import {Dialog, DialogActions, DialogContent, InputBase, FormControl, Typography} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';




export default function FilterMenu({name}:Header) {
  const [anchorDiv, setAnchorDiv] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorDiv);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorDiv(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorDiv(null);
  };
  const [orgName, setOrgName] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setOrgName(event.target.value as string);
    };

  return (
    <div>
        <span>{name}</span>
      <Button
        id="filter-button"
        aria-controls={open ? 'filter-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx = {{minWidth: 0}}
      >
        <Filter/>
      </Button>
      <Menu
        id="filter-menu"
        anchorEl={anchorDiv}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'filter-button',
        }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          sx={{maxWidth:'850px'}}
      >
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
                <InputBase defaultValue="email" id="email" />
            </FormControl>
            <FormControl fullWidth className = 'dialogInput'>
                <Typography variant = 'subtitle1'>
                    Date
                </Typography>
                <InputBase inputProps = {{OpenPickerIcon:<DateIcon/>}} type = 'date' id="date" />
            </FormControl>
            <FormControl fullWidth className = 'dialogInput'>
                <Typography variant = 'subtitle1'>
                    Phone Number
                </Typography>
                <InputBase defaultValue="phone" id="phone" />
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
            <Button variant = 'outlined' onClick={handleClose} color = 'inherit'>Reset</Button>
            <Button variant = 'contained' onClick={handleClose} sx = {{bgcolor:'#39CDCC'}}>Filter</Button>
        </DialogActions>
        </Menu>
    </div>
  );
}
