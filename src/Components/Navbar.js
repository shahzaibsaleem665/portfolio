import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import logo_m from '../assets/logos/logo_m.png'
import logo from '../assets/logos/logo.png'
import Sidebar from './sidebar/Sidebar';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'


function Navbar() {
  const history = useHistory();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const homeNav = (e) => {
    e.preventDefault();
    history.push('/');
  }

  return (
    <div className='navbar'>
          <div className="navbar__left">
          <Sidebar />
          <img src={windowWidth < 768 ? logo_m : logo} alt='my logo' onClick={homeNav} />
         </div>
          <div className='navbar__right'>
          <GitHubIcon />
          <LinkedInIcon />
          <FacebookIcon />
    </div>
  </div>
  );
}

export default Navbar;
