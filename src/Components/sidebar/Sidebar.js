import React, { useState } from 'react'
import './Sidebar.css'
import Items from './Items'
import {motion} from 'framer-motion'
import ToggleButton from './ToggleButton'

function Sidebar() {

    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: 'circle(1200px at 50px 50px)',
            transition: {
                type: 'spring',
                stiffness: 20,
            }
        },
        closed: {
            clipPath: 'circle(20px at 50px 50px)',
            Transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40, 
            }
        }


    }



  return (
    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
    <motion.div className="sidebar__bg" variants={variants}>
        <Items />
    </motion.div>
    <ToggleButton setOpen={setOpen} open={open} />
    </motion.div>
  )
}

export default Sidebar