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
     width:'100vw'}}>
      <Box sx={{backgroundColor:'transparent', width:'100%', padding:'20px', fontFamily:'poppins'}}>
      <Typography variant="h4" color='inherit' sx={{padding:'15px', fontSize:{xs:'40px', sm:'45px', md:'50px'} }} >
              Hi, I am Shahzaib Saleem
        </Typography>
        <Typography variant="body1" color='inherit' sx={{padding:'15px', fontSize:'20px'}}>
              "Passionate Frontend React Developer dedicated to creating exceptional user experiences.
        </Typography>
        </Box>
        <img src={shahzaib} className='home__profile' />
      </Box>
    </div>
  );
}

export default Home;
