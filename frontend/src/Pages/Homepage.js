import React from 'react'
import HomepageCard from '../components/HompageCard';
import { Container, Paper } from '@mui/material';
//import HompageContainer from '../components/HompageContainer';

export default function Homepage() {
  return (
    <div>
        <Container>
        <Paper sx={{display:'flex', flexDirection:'row', marginTop:'5%'}}>
        <HomepageCard />
        </Paper>  
        </Container>
    </div>
  )
}

