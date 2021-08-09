import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import QuiltedImageList from '../QuiltedImageList';
import Roadmap from '../Roadmap';
import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";
import Services from '../Services';




function Home() {
  return (
    <>
      <HeroSection/>
      <br/>
      <div style={{  flexGrow: 1, backgroundColor: 'white', }}> 
        <Container maxWidth="xl">
          <Box sx={{ width: "100%", }} boxShadow={17} >
            <QuiltedImageList/>
            <Roadmap/>
            <Services/>
          </Box>
        </Container>
      </div>
      <Footer/>    
    </>
  );
}

export default Home;