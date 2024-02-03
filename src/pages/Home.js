import React, { useEffect, useState } from 'react';
import './Home.css';
import background from '../assets/logos/background.svg';
import shahzaib from '../assets/pictures/shahzaib.png';
import Navbar from '../Components/Navbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import Cards from '../Components/Cards';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import gmail from '../assets/pictures/gmail.png'

function Home() {
  const history = useHistory();

  const handleNav = (e) => {
    e.preventDefault();
    history.push('/about');
  }
  const [textItems, setTextItems] = useState([
    'Shahzaib Saleem',
    'Frontend Developer',
    'React Developer',
  ]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [textItems]);

  return (
    <div className='home'>
      <Navbar   />
      <div className="home__main">
      <Box
        sx={{
          backgroundPosition: 'relative',
          height: '410px',
          display: 'flex',
          flexDirection:{xs:'column', sm:'column', md:'row'},
          alignItems: 'center',
          marginTop:"60px",
          width:'90%',    
          
        }}
      >
        <div className='home__mainText'
>
  <Typography
    variant='h4'
    color='inherit'
    sx={{
      fontSize: { xs: '32px', sm: '40px', md: '50px', lg: '60px', xl: '90px' },
      fontFamily: 'Segoe UI',
      height: { xs: 'auto', sm: '60px', md: '80px', lg: '100px' },
      lineHeight: { xs: '1.2', sm: '1.2', md: '1.2', lg: '1.2' },
      textAlign: 'left',
      width:'90%',
      marginLeft:'40px' // Centered for xs and sm
      
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
      textAlign: 'left',
      width:'90%',
      marginTop:'10px',
      marginLeft:'40px'// Centered for xs and sm
      
    }}
  >
    Passionate Frontend React Developer dedicated to creating exceptional user experiences.
  </Typography>
  <div className='button__home'>
  <Button
    className='home__mainButton'
    onClick={handleNav}
  >
    Learn more
  </Button>
  </div>
  
</div>
        <img src={shahzaib} className='home__profile' alt='Shahzaib' />
      </Box>
      </div>


      <div className='home__content'>
        <div className="home__cards">
        <Cards img={gmail} title='Gmail Clone' links={{github: 'https://github.com'}}/>
        <Cards img={gmail} title='Gmail Clone' links={{github: 'https://github.com'}}/>
        <Cards img={gmail} title='Gmail Clone' links={{github: 'https://github.com'}}/>
        <Cards img={gmail} title='Gmail Clone' links={{github: 'https://github.com'}}/>
        <Cards img={gmail} title='Gmail Clone' links={{github: 'https://github.com'}}/>
        <Cards img={gmail} title='Gmail Clone' links={{github: 'https://github.com'}}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
