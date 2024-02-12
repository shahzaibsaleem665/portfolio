import React, { useState } from 'react'
import './Items.css';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Items() {
  const [selectedButton, setSelectedButton] = useState('Home');
  const variants = {
    open : {
      transition: {
        staggerChildren:0.1,
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    }
  }

  const itemVariants = {
    open : {
      y:0,
      opacity:1,
    },
    closed: {
      y:50,
      opacity:0,
    }
  }


  const listItems = [
    'Home','About' ,'Work','Skills', 'Contact'];

    const handleButtonClick = (item) => {
      setSelectedButton(item);
      
    };
  return (
    <motion.div className='items' variants={variants}>
      {listItems.map((item, index) => (
        <Link key={item} to={index === 0 ? '/' : `/${item.toLowerCase()}`} >
      <motion.p value={item} variants={itemVariants}  onClick={() => handleButtonClick(item)} whileHover={{scale:1.1, fontSize:32}} whileTap={{scale:0.9}}>{item}</motion.p>
      </Link>
    ))}</motion.div>
  )
}

export default Items