import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';

const buttonValues = [<GitHubIcon/>, <LinkedInIcon />, <LinkIcon />]
function Cards() {
  return (
    <div className='card'>
        <Card sx={{ maxWidth: 250, margin:'35px', borderRadius:'10px', marginTop:'50px'  }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?b=1&s=612x612&w=0&k=20&c=V8oaDpP3mx6rUpRfrt2L9mZCD0_ySlnI7cd4nkgGAb8="
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