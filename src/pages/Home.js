import React, { useEffect, useState } from 'react';
import './Home.css';
import background from '../assets/logos/background.svg';
import shahzaib from '../assets/pictures/shahzaib.png';
import Navbar from '../Components/Navbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import Card from '../Components/Card';

function Home() {
  const [textItems, setTextItems] = useState([
    'Shahzaib Saleem',
    'Frontend Developer',
    'React Developer',
  ]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [textItems]);

  return (
    <div className='home'>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'relative',
          height: '420px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'transparent',
            width: '100%',
            padding: '20px',
            margin: '0 auto', // Center the content
            textAlign: 'left', // Center the text
          }}
        >
          <Typography
            variant='h4'
            color='inherit'
            sx={{
              fontSize: { xs: '35px', sm: '45px', md: '50px', lg: '70px', xl: '90px' },
              fontFamily: 'Segoe UI',
              lineHeight: { xs: '1', sm: '0.9', md: '0.9', lg: '1' },
              marginLeft: { xs: '30px', sm: '40px', md:'90px' },
            }}
          >
            Hi, I'm{' '}
            <strong style={{ fontFamily: 'League Spartan', mixBlendMode: 'overlay' }}>
              {textItems[currentTextIndex]}
            </strong>
          </Typography>
          <Typography
            variant='body1'
            color='inherit'
            sx={{
              fontSize: { xs: '16px', sm: '18px', md: '20px' },
              fontFamily: 'Syne Mono',
              fontWeight: 'bold',
              marginTop: '10px',
              marginLeft: { xs: '30px', sm: '40px', md:'90px' }, // Add some space between lines
            }}
          >
            Passionate Frontend React Developer dedicated to creating exceptional user experiences.
          </Typography>
          <Button
            variant='outlined'
            sx={{
              padding: '10px',
              fontSize: { xs: '16px', sm: '18px', md: '20px' },
              fontFamily: 'Syne Mono',
              fontWeight: 'bold',
              marginTop: '10px',
              marginLeft: { xs: '30px', sm: '40px', md:'90px' },
              backgroundColor: 'black',
              color: '#51DFDC'
              ,
              ':hover': {
                cursor:'pointer', backgroundColor:'#58B4E2', color:'black'} // Add some space between button and text
            }}
          >
            Learn More
          </Button>
        </Box>
        <img src={shahzaib} className='home__profile' alt='Shahzaib' />
      </Box>
      <div className='home__content'>
        <Card />
      </div>
    </div>
  );
}

export default Home;
