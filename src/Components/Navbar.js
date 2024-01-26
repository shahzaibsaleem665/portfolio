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
import menuBg from '../assets/logos/menuBg.svg'

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const MenuHandle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
              <img src={logo} alt='my logo' height='60px' style={{cursor: 'pointer'}}
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
           <Avatar src={profile} sx={{marginRight:{xs:'40px', sm:'50px', md:'80px'}, ':hover' :{cursor: 'pointer'}}} />

           <Box sx={{ display: { xs: 'flex', md: 'none' }}} onClick={handleMenuClose}>

           <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
               
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                
              }}
              PaperProps={{
                sx: {
                  width: '80%',
                  paddingTop: '10px',
                  marginTop: '11px',
                  backgroundImage:`url(${menuBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition:'center',
                  marginLeft: '40px'

                  },
              }}
              
            >
            <MenuItem sx={{fontFamily:'poppins',
            justifyContent:'center',
          fontWeight:'bold', ':hover':{color:'#51DFDC'}}}
            >Work
            </MenuItem>
            <MenuItem sx={{fontFamily:'poppins',
            justifyContent:'center',  fontWeight:'bold', ':hover':{color:'#51DFDC'}}}>
            About
            </MenuItem>
            <MenuItem sx={{fontFamily:'poppins',
            justifyContent:'center',  fontWeight:'bold', ':hover':{color:'#51DFDC'}}}>
            Contact
            </MenuItem>
            <MenuItem sx={{fontFamily:'poppins',
            justifyContent:'center',  fontWeight:'bold', ':hover':{color:'#51DFDC'}}}>
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