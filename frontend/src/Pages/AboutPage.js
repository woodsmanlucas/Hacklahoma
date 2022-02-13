import React from 'react';
import { Container, Paper } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import AboutPageCard from '../components/AboutPageCard';
import AboutPageMobile from '../components/AboutPageMobile';

const Aboutpageview = () =>{
    const isActive = useMediaQuery('(max-width: 1000px)')
    if (isActive){
      return <AboutPageMobile />
    }else{
      return <AboutPageCard />
    }
  
  } 

export default function AboutPage() {
  return (
    <Container>
    <Paper sx={{marginTop:'5%'}}>
    <Aboutpageview />
    </Paper>  
    </Container>
  )
}

