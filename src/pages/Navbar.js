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

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <div className='navbar'>
          <AppBar color='inherit' sx={{borderBottom: '1px solid lightgray', boxShadow: 'none',
        position:'sticky', height:'70px', justifyContent: 'center'}} >
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu'  onClick={MenuHandle} >
              <MenuIcon sx={{fontSize: '30px'}} />
            </IconButton>
           <img src={logo} alt='my logo' height='60px' 
           />
        <Box sx={{flexGrow: 1}} />
           <Box sx={{ marginLeft: 'auto', paddingRight: '20px', display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
            <Button  className='nav__button'>
              Home
            </Button>
            <Button className='nav__button'>
              About
            </Button>
            <Button  className='nav__button'>
              Contact
            </Button>
            <Button  className='nav__button'>
              Projects
            </Button>
           </Box>
           <Avatar className='avatar' src={profile} />

           <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
         <Menu open={openMenu && window.innerWidth <= 600}onClick={handleMenuClose}>
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