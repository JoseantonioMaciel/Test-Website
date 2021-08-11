import React from 'react';
import '../App.css';

import './HeroSection.css';

import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";

function HeroSection() {
  return (
   
   <Container maxWidth="xl">
      <Box sx={{ width: "100%" }}>
          <Card >
            <CardMedia component="img" image="images/Banner.jpg"/>
            
          </Card>
        </Box>
        </Container>
    
  );
}

export default HeroSection;