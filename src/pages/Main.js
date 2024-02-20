import React from 'react'
import './Main.css'
import Home from './Home'
import Navbar from '../Components/Navbar'

function Main() {
  return (
    <div className='main'>     
       
        <div className="main__section">
        <Home />
        </div>
        <div className="main__section">
        Work
        </div>
        <div className="main__section">
        Skills
        </div>
        <div className="main__section">
        About
        </div>
        <div className="main__section">
        Contact
        </div>
        
    </div>
  )
}

export default Main