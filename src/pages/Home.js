import React from 'react'
import './Home.css'
import Navbar from '../Components/Navbar';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import {motion} from 'framer-motion';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
function Home() {
 
  const history = useHistory();

const textVariants = {
  initial: {
    x:-500,
    opacity: 0,
  },
  animate: {
    x:0,
    opacity: 1,
    transition:{
      duration:1,
      staggerChildren:0.1,

    }
  }
}


const sliderVariant = {
  initial: {
    x:0,
  },
  animate: {
    x:'-150%',
    transition:{
      repeat: Infinity,
      repeatType: 'mirror',
      duration:20,
      staggerChildren:0.01,
    }
  }
}




  return (
    <div className='home'>
      <Navbar />
  <motion.div className="home__content" variants={textVariants} initial='initial' animate='animate'>
    <motion.h2 variants={textVariants}>SHAHZAIB SALEEM</motion.h2>
    <motion.h1 variants={textVariants}>React/Front-End Developer</motion.h1>
    <motion.p variants={textVariants}>I am a React Developer dedicated to create  exceptional user experiences.</motion.p>
    <motion.div variants={textVariants} className='home__buttons'>
    <motion.button variants={textVariants} onClick={(e) => history.push('/about')} >About me <ArrowRightAltIcon /></motion.button>
    <motion.button variants={textVariants} className='contact' onClick={(e) => history.push('/contact')} >Contact me <ArrowRightAltIcon /></motion.button>
    </motion.div>
  </motion.div>
<motion.div className="home__backgroundText" variants={sliderVariant} initial='initial' animate='animate'>
      <motion.h1>Bringing Creative Designs To Life</motion.h1>
    </motion.div>
</div>
  )
}

export default Home