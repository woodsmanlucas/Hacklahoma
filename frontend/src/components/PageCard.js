import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';


const CardBottons =(props)=>{
  if (window.location.href === '/'){
    return(
    <CardActions>
    <Paper sx={{display:'flex', flexDirection:'column', marginTop:'25%', position: 'relative', mx: "auto" }}>
    
    <Box component="span" sx={{ p: 7, border: '5px grey' }}>
    <Button variant="contained" color="success" sx={{width: "100%"}} href="/Welcome">Login with google</Button>
    <Paper sx={{ margin:'5%'}}></Paper>
    <Button variant="contained"  sx={{width: "100%"}} href="/Welcome">Log in with metamask</Button>
    </Box>
    </Paper>
  </CardActions>
    )
  } else{
    return(
      <CardActions>
      <Paper sx={{display:'flex', flexDirection:'column', marginTop:'5%', position: 'relative', left: props.left, mx: "auto" }}>
        <Button variant="contained" color="success" sx={{width: "100%"}} href="/Welcome">{props.button}</Button>
        </Paper>
      </CardActions>
    )
  }

}


export default function PageCard(props) {
  const mybotton = props.button
  return (
<Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Paper sx={{display: "flex", flexDirection:props.direction}}>
        <Paper>
        <Typography variant="h5" component="div" color="text.secondary" gutterBottom>
          {props.heading}
        </Typography>
        
        <Typography variant="body2">
        <Paper sx={{ width: props.width, padding:'2%'}}>
          {props.text}  
        </Paper>
        </Typography>
        </Paper>
        <img src={props.image} alt="Solar system" />
        </Paper>
 
      </CardContent>

    <CardBottons
      button= {mybotton}
    ></CardBottons>
    </Card>
  )
}

