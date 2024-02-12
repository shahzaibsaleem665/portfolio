import React from 'react'
import './ToggleButton.css'
import { Close, Menu } from '@mui/icons-material'


function ToggleButton({setOpen, open}) {
  return (
    <div className='toggleButton'>
         <button onClick={() => setOpen(prev => !prev)}>
        {open ? <Close /> : <Menu />} {/* Conditional rendering of icons based on the 'open' state */}
      </button>
    </div>
  )
}

export default ToggleButton