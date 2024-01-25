import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Menu, MenuItem } from '@mui/material';
import profile from '../assets/pictures/profile.jpg'
import logo from '../assets/logos/logo.png'
import CloseIcon from '@mui/icons-material/Close';
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
            <IconButton size='medium' edge='start' color='inherit' aria-label='menu'  onClick={MenuHandle} sx={{ display:{xs:'flex', sm: 'none', md:'none'}, marginLeft: {xs:'30px'}}} >

            {openMenu ? <CloseIcon sx={{fontSize: '30px', ':hover': { // conditinally rendering the ICons based on state of the Menu. 
                    cursor: 'pointer'}}} onClick={handleMenuClose} />
             : <MenuIcon sx={{fontSize: '30px', ':hover':{ cursor: 'pointer'}}} />}
            </IconButton>
            <Box sx={{paddingLeft: { xs:'0px', sm:'50px', md:'70px' }, display:{ xs: 'flex', sm: 'flex', md:'flex'}, margin: '0px'}}>
              <img src={logo} alt='my logo' height='60px'  
           />
           </Box>
           
           <Typography  sx={{fontFamily:'Syne Mono, monospace', fontSize:'25px', fontWeight:'bold', display:{xs:'none', sm:'none', md:'flex'}}}>
            Shahzaib Saleem
           </Typography>
           <Box sx={{flexGrow: 1}} />
           <Box sx={{ marginLeft: 'auto', paddingRight: '20px', display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
            <Button  className='nav__button'>
              Work
            </Button>
            <Button className='nav__button'>
              About
            </Button>
            <Button  className='nav__button'>
              Contact
            </Button>
            <Button  className='nav__button'>
              Skills
            </Button>
           </Box>
           <Avatar src={profile} sx={{marginRight:{xs:'40px', sm:'50px', md:'80px'}}} />

           <Box sx={{ display: { xs: 'flex', md: 'none' }}} onClick={handleMenuClose}>


         <Menu open={openMenu && window.innerWidth <= 600}>
            <MenuItem color='inherit'>
              Work
            </MenuItem>
            <MenuItem color='inherit'>
              About
            </MenuItem>
            <MenuItem color='inherit'>
              Contact
            </MenuItem>
            <MenuItem color='inherit'>
              Skills
            </MenuItem>
            </Menu>
       
           </Box>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar