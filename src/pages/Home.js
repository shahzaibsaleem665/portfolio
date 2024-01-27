// Home.jsx
import React, { useEffect, useState } from 'react';
import './Home.css';
import background from '../assets/logos/background.svg';
import shahzaib from '../assets/pictures/shahzaib.png'
import Navbar from '../Components/Navbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import Card from '../Components/Card';
function Home() {

  // code to render multiple dynamix texts on screen

  const [textItems, setTextItems] = useState([
    'Shahzaib Saleem',
    'Frontend Developer',
    'React Developer',
  ]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 2000); // Adjust the interval as needed


    //the below code sets intervals to 0 before reRendering
    return () => clearInterval(interval);
  }, [textItems]);



  return (
    <div className='home'>
      <Navbar />
    <Box sx={{backgroundImage:`url(${background})`,
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover",
     backgroundPosition: 'relative',
     height: "420px",
     zIndex:'-1',
     display:'flex',
     alignItems:'center',
     justifyContent:'center',
     width:'100vw' }}>
      <Box sx={{backgroundColor:'transparent', width:'100%', padding:'20px', marginRight:'20px', marginLeft:'20px' }}>
      <Typography variant="h4" color='inherit' sx={{padding:'10px', fontSize:{xs:'35px', sm:'45px', md:'50px', lg:'70px', xl:'90px'}, fontFamily:'Segoe UI', paddingLeft:{xs:'20px', sm:'50px', md:'70px'}, lineHeight:{xs:'1', sm:'0.9', md:'0.9', lg:'1'}}} >
              Hi, I'm   <strong style={{ fontFamily: 'League Spartan', mixBlendMode:'overlay', // overlay Blend mode is used to blend with the background
            }}> 
                  {textItems[currentTextIndex]}
              
            </strong>
        </Typography>
        <Typography variant="body1" color='inherit' sx={{padding:'10px', fontSize:{xs:'16px', sm:'18px', md:'20px'},fontFamily:'Syne Mono', fontWeight:'bold', paddingLeft:{xs:'20px', sm:'50px', md:'70px'}}}>
              Passionate Frontend React Developer dedicated to creating exceptional user experiences.
        </Typography>
        <Button variant='outlined' sx={{padding:'10px', fontSize:{xs:'16px', sm:'18px', md:'20px'},fontFamily:'Syne Mono', fontWeight:'bold', marginLeft:{xs:'20px', sm:'50px', md:'70px'}, backgroundColor: 'black', border: '1px solid #5C89E8', color: '#51DFDC', ':hover': {
          cursor:'pointer', backgroundColor:'#58B4E2', color:'black'
        }}}>Learn More</Button>
        </Box>
        <img src={shahzaib} className='home__profile' />
      </Box>
      <div className="home__content">
        <Card />
      </div>
    
    </div>
  );
}

export default Home;
