import React from 'react'
import {Typography, Button, Card, CardActions, CardMedia, CardContent} from '@mui/material';


export default function Homepage({Title, Image, Link}) {
  return (
    <Card varient="outlined" sx={{my: "10px", width: 400}}>
            <CardMedia
        component="img"
        height="140"
        image={Image}
        alt="green iguana"
      />
        <CardContent>
        <Typography variant="h5" component="div">{Title}</Typography>
        {/* <Typography variant="body2">
        {Paragraph}
      </Typography> */}
        </CardContent>
        <CardActions>
            <Button size='small' href={Link}>Learn More</Button>
        </CardActions>
    </Card>
  )
}