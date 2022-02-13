import React from 'react'
import { Box, Container } from '@mui/material'
import WelcomePageCard from "../components/WelcomePageCard"
import welcomePageData from '../components/welcomePageData.js'
import System from '../Images/System.jpg'
import "./welcomepage.css"

export default function Welcome() {
    const data = welcomePageData()
  return (
    <Container>
        <img src={System} alt="The solar System"/>
        <Box sx={{paddingY: "100px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}>
            {data.map((cardData) => 
            <WelcomePageCard Title={cardData.title} Image={cardData.image} Link={cardData.link}/>
            )}
        </Box>
    </Container>
    )
}