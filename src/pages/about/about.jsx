import React from 'react'
import Navbar from "../../components/about/about-nav";
import Aboutimg from '../../components/about/about-img';
import Title1 from '../../components/about/title1';
import Title2 from '../../components/about/title2';
import { Container } from '@mui/material';
import Title3 from '../../components/about/title3';
import img from "../../assets/tm-about-img.jpg";
const about = () => {
  return (
    <div>
      <Navbar/>
      <Aboutimg img={img}/>
      <Container style={{paddingInline:'50px',paddingTop:40}}>
      <Title1/>
   <Title2/>
   <div style={{marginTop:50}}>
   <Title3/>
   </div>
      </Container>
     
  
    </div>
  )

}

export default about
