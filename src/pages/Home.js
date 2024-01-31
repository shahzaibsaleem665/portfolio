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
          height: '430px',
          display: 'flex',
          flexDirection:{xs:'column'},
          alignItems: 'center',
          justifyContent: 'center',
          marginTop:"60px",
          width:'90%',
          backgroundColor:'pink' ,    
        }}
      >
        <Box
          sx={{
            backgroundColor: 'transparent',
            width: '100%',
            justifyContent:'center',
            alignItems:'center',
            margin:'20px',
            height:'350px',
            backgroundColor:'violet'
            
          }}
        >
          <Typography
            variant='h4'
            color='inherit'

            sx={{
              fontSize: { xs: '35px', sm: '45px', md: '50px', lg: '60px', xl: '90px' },
              fontFamily: 'Segoe UI', height:{xs:'auto', sm:'', md:'', lg:'auto'},
              lineHeight: { xs: '1', sm: '0.9', md: '0.9', lg: '1' },
             textAlign:{xs:'center'}
             
            }}
          >
            Hi, I'm {' '}
            <strong style={{ fontFamily: 'League Spartan', mixBlendMode: 'overlay',}}>
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
              textAlign:{xs:'center'}
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
              backgroundColor: 'black',
              color: '#51DFDC'
              ,
              alignItems:'center',zIndex:'1',
              ':hover': {
                cursor:'pointer', backgroundColor:'#58B4E2', color:'black'} // Add some space between button and text
            }} onClick={handleNav}
          >
            Learn More
          </Button>
        </Box>
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
