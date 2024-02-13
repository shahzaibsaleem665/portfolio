import React, { useState } from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import logo from '../assets/logos/logo.png'
import Sidebar from './sidebar/Sidebar';



const buttonValues = ['Home','About' ,'Work','Skills', 'Contact'];


function Navbar() {
  const [selectedButton, setSelectedButton] = useState('Home');
  const history = useHistory();


  const homeNav = (e) => {
    e.preventDefault();
    history.push('/');
  }

  const handleButtonClick = (value) => {
    setSelectedButton(value);
    
  };

  return (
    <div className='navbar'>
          <div className="navbar__left">
          <Sidebar />
              <img src={logo} alt='my logo' onClick={homeNav}
           />
         </div>
          <div className='navbar__right'>
      {buttonValues.map((value, index) => (
        
        <Link key={value} to={index === 0 ? '/' : `/${value.toLowerCase()}`} >  {/* condintionally rendering the Button components to that the path to Homepage stays '/*/}
          <Button
          value={value}
          className={`nav__button ${selectedButton === value ? 'selected' : ''}`}
          onClick={() => handleButtonClick(value)}
          sx={{
            marginRight: '10px',
            fontFamily: 'Syne Mono',
            fontSize: '16px',
            textTransform: 'capitalize',
            borderRadius:'50px',
            backgroundColor: selectedButton === value ? '#9EC8B9' : 'inherit',
            color: selectedButton === value ? 'black' : 'white',
            fontWeight: selectedButton === value ? 'bold' : '',
            '&:hover': {
              backgroundColor: selectedButton === value ? '#9EC8B9' : 'transparent',
              fontWeight: 'bold'
            },
          }}
        >
          {value}
        </Button>
        </Link>
      ))}
    </div>
  </div>
  );
}

export default Navbar;
