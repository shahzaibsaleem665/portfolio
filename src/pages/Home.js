import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../Components/Navbar';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
function Home() {
 
  const history = useHistory();
  const [text, setText] = useState([
  'Frontend Developer', 'React Developer', 'Full-Stack Developer', 'Web-App Developer'
  ]);

  const [index, setIndex] = useState(0);
  useEffect(()=> {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % text.length);
      
    },2500);

    return () => clearInterval(interval);
  }, [text])

  return (
    <div className='home'>
      <Navbar />
  <div className="home__content">
    <h2>SHAHZAIB SALEEM</h2>
    <h1>{text[index]}</h1>
    <p>I am a React Developer dedicated to create  exceptional user experiences.</p>
    <div className='home__buttons'>
    <button onClick={(e) => history.push('/about')} endIcon={<ArrowRightAltIcon />}>About me <ArrowRightAltIcon /></button>
    <button className='contact' onClick={(e) => history.push('/contact')} >Contact me <ArrowRightAltIcon /></button>
    </div>
</div>
</div>
  )
}

export default Home