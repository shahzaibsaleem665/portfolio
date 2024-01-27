import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import gmail from '../assets/pictures/gmail.png'

const buttonValues = [<GitHubIcon/>, <LinkedInIcon />, <OpenInNewIcon />]
function Cards() {
  return (
    <div className='card'>
        <Card sx={{ maxWidth: 250, margin:'30px',marginTop:'60px', marginLeft:'110px', borderRadius:'10px',   }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={gmail}
      />
       <CardContent>
        <Typography  variant="h5" component="div" sx={{fontFamily:'Segoe UI', paddingLeft:'10px'}} >
        Gmail Clone
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'space-around'}}>
        {buttonValues.map((values) => (
            <p  sx={{alignItems:'center', color:'black', padding:'0px', }}>{values}</p>
            
        )
        )}
      
      </CardActions>
        </Card>
    </div>
  )
}

export default Cards