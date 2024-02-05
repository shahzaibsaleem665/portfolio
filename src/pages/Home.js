import React, { useEffect, useState } from 'react';
import './Home.css';
import shahzaib from '../assets/pictures/shahzaib.png';
import Navbar from '../Components/Navbar';
import {  Button } from '@mui/material';
import Cards from '../Components/Cards';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import gmail from '../assets/pictures/gmail.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Home() {
  const history = useHistory();

  const handleNav = (e) => {
    e.preventDefault();
    history.push('/about');
  }
  const [textItems, setTextItems] = useState([
    'Frontend Developer',
    'Full-Stack Developer',
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
        <div className='home__mainText'>
<h3>
    Hi, I'm <b>Shahzaib Saleem</b>
  </h3>
  <h1 >
  <strong style={{ fontFamily: 'League Spartan', mixBlendMode: 'overlay' }}>
    {textItems[currentTextIndex]}
  </strong>
  </h1>
<p>
    I am a React Developer dedicated to create exceptional user experiences.
</p>
  <Button
    className='home__mainButton'
    onClick={handleNav}
    endIcon={<ArrowRightAltIcon/>}
  >
    About me
  </Button>
</div>
        <img src={shahzaib} className='home__profile' alt='Shahzaib' />
      </div>

      <div className='home__section'>
       <Cards  src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                text="Unique activities we can do together, led by a world of hosts."
        />
          <Cards  src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                text="Unique activities we can do together, led by a world of hosts."
        />
          <Cards  src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                text="Unique activities we can do together, led by a world of hosts."
        />
          <Cards  src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                text="Unique activities we can do together, led by a world of hosts."
        />
      </div>
    </div>
  );
}

export default Home;
