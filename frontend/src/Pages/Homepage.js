import React from 'react';
import HomepageCard from '../components/HompageCard';
import MobileCard from '../components/MobileCard';
import { Container, Paper } from '@mui/material';
import { useMediaQuery } from '@mui/material';

//import HompageContainer from '../components/HompageContainer';

const Hompageview = () =>{
  const isActive = useMediaQuery('(max-width: 1000px)')
  if (isActive){
    return <MobileCard />
  }else{
    return <HomepageCard />
  }

} 


export default function Homepage() {
  
  return (
    <div>
        <Container>
        <Paper sx={{marginTop:'5%'}}>
        <Hompageview />
        </Paper>  
        </Container>
    </div>
  )
}

