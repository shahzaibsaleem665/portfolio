import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './Cards.css'


const buttonValues = [
  { icon: <GitHubIcon />, label: 'GitHub' },
  { icon: <LinkedInIcon />, label: 'LinkedIn' },
  { icon: <OpenInNewIcon />, label: 'Website' }
];
function Cards({title, src, icons, text}) {
  return (
    <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{text}</h4>
                <h3>{icons}</h3>
            </div>
        </div>
  )
}

export default Cards