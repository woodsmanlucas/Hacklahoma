import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import Solar from "../Images/Solar.jpg"




const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function HomepageCard() {
  
  return (
    
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Paper sx={{display: "flex"}}>
        <Paper>
        <Typography variant="h5" component="div" color="text.secondary" gutterBottom>
          Hacklahoma Team
        </Typography>
        
        <Typography variant="body2">
        <Paper sx={{ width: '50%', padding:'2%'}}>
        Lorem ipsum dolor sit amet, adhuc homero scribentur his id, ad sint animal vix. 
        Quas ridens eum eu, no vide legimus usu. Ea natum reque animal qui. His ex virtute appareat 
        pertinacia. Has facilisis dissentiunt id, id labores invenire iudicabit eum. 
        Pro id quando partiendo, simul temporibus vix ut, an erant nobis sed. Sale lorem ea cum. 
        Sed te doctus commune accumsan, euripidis constituam ne pro. Ludus mandamus eum no, soluta 
        mnesarchum an pro. Ad labore timeam principes vis, eos ad augue delicata signiferumque. 
        Ea eum luptatum adolescens. Eu eos duis tota volumus, no qui doming virtute 
        </Paper>
        </Typography>
        </Paper>
        <img src={Solar} alt="Solar system" />
        </Paper>
 
      </CardContent>

      <CardActions>
        <Paper sx={{display:'flex', flexDirection:'column', marginTop:'25%', position: 'relative', mx: "auto" }}>
        
        <Box component="span" sx={{ p: 7, border: '5px grey' }}>
        <Button variant="contained" color="success" sx={{width: "100%"}} href="/Welcome">Login with google</Button>
        <Paper sx={{ margin:'5%'}}></Paper>
        <Button variant="contained"  sx={{width: "100%"}} href="/Welcome">Log in with metamask</Button>
        </Box>
        </Paper>
      </CardActions>
    </Card>

  );
}