// Home.jsx
import React from 'react';
import './Home.css';
import home from '../assets/logos/home.svg';
import Navbar from './Navbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="home__container">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          <div className="home__containerText">
            <Typography variant="h4">
              Hi, I am Shahzaib Saleem
            </Typography>
            <Typography variant="body1">
              "Passionate Frontend React Developer dedicated to creating exceptional user experiences. With a keen eye for design and a commitment to clean, efficient code, I specialize in turning ideas into responsive and engaging web applications. Let's bring your vision to life through the power of React and modern web technologies."
            </Typography>
          </div>
          <img src={home} alt='Home Background' className="home__image" />
        </Box>
      </div>
    </div>
  );
}

export default Home;
