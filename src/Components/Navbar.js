import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Drawer, Divider } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import background from '../assets/logos/background.svg'
import logo from '../assets/logos/logo.png'
import profile from '../assets/pictures/profile.jpg'
const buttonValues = ['Home', 'Work', 'About', 'Contact', 'Skills'];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState('Home');

  const handleButtonClick = (value) => {
    setSelectedButton(value);
    setDrawerOpen(false);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className='navbar'>
      <AppBar
        color='inherit'
        sx={{
          borderBottom: '1px solid lightgray',
          boxShadow: 'none',
          height: '70px',
          justifyContent: 'center',
          backgroundColor:'whitesmoke',  
        }}
        
      >
        <Toolbar >
          
          <IconButton
            size='medium'
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={handleDrawerOpen}
            sx={{
              display: { xs: 'flex', sm: 'none', md: 'none' },
              marginLeft: { xs: '30px', },
            }}
          >
            <MenuIcon sx={{ fontSize: '30px', ':hover': { cursor: 'pointer' } }} />
          </IconButton>
          
          <Box sx={{marginLeft: { xs:'0px', sm:'50px', md:'90PX' }, display:{ xs: 'flex', sm: 'flex', md:'flex'}, margin: '0px'}}>
              <Link to='/'>
              <img src={logo} alt='my logo' height='60px' style={{cursor: 'pointer'}}
           />
           </Link>
           </Box>
           
           <Typography  sx={{fontFamily:'Syne Mono, monospace', fontSize:'25px', fontWeight:'bold', display:{xs:'none', sm:'none', md:'flex',  marginRight:'20px', whiteSpace: 'nowrap',}}}>
            Shahzaib Saleem
           </Typography>
          
           <Box sx={{flexGrow: 1}} />
           <Box sx={{ marginLeft: 'auto',  overflow: 'hidden',  paddingRight: '20px', display: { xs: 'none', sm: 'flex', md: 'flex',  } }}>
      {buttonValues.map((value, index) => (
        
        <Link key={value} to={index === 0 ? '/' : `/${value.toLowerCase()}`} >  {/* condintionally rendering the Button components to that the path to Homepage stays '/*/}
          <Button
          value={value}
          className={`nav__button ${selectedButton === value ? 'selected' : ''}`}
          onClick={() => handleButtonClick(value)}
          sx={{
            marginRight: '10px',
            fontFamily: 'Syne Mono',
            
            fontSize: '16px',
            textTransform: 'capitalize',
            backgroundColor: selectedButton === value ? '#58B4E2' : 'inherit',
            color: selectedButton === value ? 'black' : 'black',
            fontWeight: selectedButton === value ? 'bold' : '',
            '&:hover': {
              backgroundColor: selectedButton === value ? '#58B4E2' : 'transparent',
              fontWeight: 'bold'
            },
          }}
        >
          {value}
        </Button>
        </Link>
      ))}
    </Box>
           <Avatar src={profile} sx={{marginRight:{xs:'40px', sm:'50px', md:'80px'}, ':hover' :{cursor: 'pointer'}}} />

          {/* ... other code remains the same ... */}
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}  >
              <IconButton
                size='medium'
                edge='start'
                color='inherit'
                aria-label='close'
                onClick={handleDrawerClose}
                sx={{marginTop:'10px', marginLeft: 'auto', marginRight: '10px' }}
              >
                <ChevronLeftIcon sx={{ fontSize: '30px', ':hover': { cursor: 'pointer' } }} />
              </IconButton>
              
              <Box sx={{display:'flex',flexDirection:'column', top:'0px', width:'200px', alignItems:'center', backgroundImage: `url(${background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'relative',}}>
                    <Divider sx={{ width: '100%', color:"black", borderTop:'1px solid black', }} /> 
              {buttonValues.map((value) => (
                <Link
                  key={value}
                  to={`/${value.toLowerCase()}`}
                  onClick={() => handleButtonClick(value)}
                >
                  <Button
                    value={value}
                    className='nav__button'
                    sx={{
                      marginY: '10px',
                      fontFamily: 'Syne Mono',
                      fontSize: '16px',
                      textTransform: 'capitalize',
                      color:  'black',
                      '&:hover': {
                        backgroundColor:'transparent',
                        fontWeight: 'bold',
                        color:'black'
                      },
                    }}
                  >
                    {value}
                  </Button>
                </Link>
              ))}
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
