import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


const buttonValues = [
  { icon: <GitHubIcon />, label: 'GitHub' },
  { icon: <LinkedInIcon />, label: 'LinkedIn' },
  { icon: <OpenInNewIcon />, label: 'Website' }
];
function Cards({title, img, links}) {
  return (
    <div className='card'>
        <Card sx={{ maxWidth: 250, 
          margin:'50px',borderRadius:'10px',  }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img}
      />
       <CardContent>
        <Typography  variant="h5" component="div" sx={{fontFamily:'Segoe UI', paddingLeft:'10px'}} >
        {title}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'space-around'}}>
        {buttonValues.map((values, index) => (
            <Button
            key={index}
            sx={{
              alignItems: 'center',
              color: 'black',
              padding: '0px',
              '&:hover': {
                backgroundColor: 'transparent', // Remove background color on hover
                fontWeight: 'normal', // Remove bold on hover
                color: '#56B3E0' // Change color on hover
              },
              '& .MuiSvgIcon-root': {
                fontSize: '1.7rem', // Adjust the icon size here
              }
            }}

            href={links && links[values.label.toLowerCase()]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {values.icon}
          </Button>
        )
        )}
      <Box className="hover-overlay">
            <Typography variant="body1" sx={{ color: 'white', opacity: 0, position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center', padding: '10px', transition: 'opacity 0.3s ease-in-out' }}>
              Hover Text
            </Typography>
          </Box>
      </CardActions>
        </Card>
    </div>
  )
}

export default Cards