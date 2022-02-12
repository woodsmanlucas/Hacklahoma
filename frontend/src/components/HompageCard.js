import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Paper sx={{ width: '50%'}}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="body2">
        Lorem ipsum dolor sit amet, adhuc homero scribentur his id, ad sint animal vix. 
        Quas ridens eum eu, no vide legimus usu. Ea natum reque animal qui. His ex virtute appareat 
        pertinacia. Has facilisis dissentiunt id, id labores invenire iudicabit eum. 
        Pro id quando partiendo, simul temporibus vix ut, an erant nobis sed. Sale lorem ea cum. 
        Sed te doctus commune accumsan, euripidis constituam ne pro. Ludus mandamus eum no, soluta 
        mnesarchum an pro. Ad labore timeam principes vis, eos ad augue delicata signiferumque. 
        Ea eum luptatum adolescens. Eu eos duis tota volumus, no qui doming virtute 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Paper>
  );
}