import React from 'react';
import Solar from '../Images/Solar.jpg'
import CardMedia from '@mui/material/CardMedia';

export default function HomepageImage() {
  return (
    <div>     
    <CardMedia
        component="img"
        sx={{ width: 365, position: 'absolute', left: '60%', }}
        image={Solar}
        alt="Live from space album cover"
    />
  </div>
  )
}
