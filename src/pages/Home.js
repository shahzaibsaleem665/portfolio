// Home.jsx
import React from 'react';
import './Home.css';
import background from '../assets/logos/background.svg';
import shahzaib from '../assets/pictures/shahzaib.png'
import Navbar from './Navbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Box sx={{backgroundImage:`url(${background})`,
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover",
     height: "385px",
     zIndex:'-1',
     display:'flex',
     alignItems:'center',
     justifyContent:'center',
     width:'100vw' }}>
      <Box sx={{backgroundColor:'transparent', width:'100%', padding:'20px', marginRight:'20px', marginLeft:'20px' }}>
      <Typography variant="h4" color='inherit' sx={{padding:'10px', fontSize:{xs:'40px', sm:'50px', md:'70px'}, fontFamily:'Segoe UI', paddingLeft:{xs:'20px', sm:'50px', md:'70px'}}} >
              Hi, I'm <strong style={{fontFamily:'Gloria Hallelujah' , }}>Shahzaib Saleem</strong>
        </Typography>
        <Typography variant="body1" color='inherit' sx={{padding:'10px', fontSize:{xs:'16px', sm:'18px', md:'20px'},fontFamily:'Syne Mono', fontWeight:'bold', paddingLeft:{xs:'20px', sm:'50px', md:'70px'}}}>
              Passionate Frontend React Developer dedicated to creating exceptional user experiences.
        </Typography>
        </Box>
        <img src={shahzaib} className='home__profile' />
      </Box>
    
    </div>
  );
}

export default Home;
