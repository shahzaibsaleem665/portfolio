import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Menu, MenuItem } from '@mui/material';
import profile from '../assets/pictures/profile.jpg'
import logo from '../assets/logos/logo.png'
import './Navbar.css'

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const MenuHandle = () => {
    setOpenMenu(!openMenu);
  }

 

  return (
    <div className='navbar'>
          <AppBar color='inherit' >
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu'  onClick={MenuHandle} >
              <MenuIcon />
            </IconButton>
           <img src={logo} alt='my logo' height='50' 
           />
        <Box sx={{flexGrow: 1}} />
           <Box sx={{ marginLeft: 'auto', display: { xs: 'none', md: 'flex' } }}>
            <Button color='inherit'>
              Home
            </Button>
            <Button color='inherit'>
              About
            </Button>
            <Button color='inherit'>
              Contact
            </Button>
            <Button color='inherit'>
              Projects
            </Button>
           </Box>
           <Avatar className='avatar' src={profile} />

           <Box sx={{ marginLeft: 'auto', display: { xs: 'flex', md: 'none' }}}>
           
         <Menu open={openMenu}>
            <MenuItem color='inherit'>
              Home
            </MenuItem>
            <MenuItem color='inherit'>
              About
            </MenuItem>
            <MenuItem color='inherit'>
              Contact
            </MenuItem>
            <MenuItem color='inherit'>
              Projects
            </MenuItem>
            </Menu>
       
           </Box>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar