import React from 'react'
import './Main.css'
import Home from './Home'
import About from './About'

function Main() {
  return (
    <div className='main'>     
       
        <div className="main__section">
        <Home />
        </div>
        <div className="main__section">
        <About />
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