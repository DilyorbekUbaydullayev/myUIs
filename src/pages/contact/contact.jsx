import React from 'react'
import Navbar from "../../components/contact/contact-nav";
import Aboutimg from '../../components/about/about-img';
import img from "../../assets/tm-contact-img.jpg";
import ContactBody from '../../components/contact/contact-body';
import { Container } from '@mui/material';

const contact = () => {
  return (
    <div>
      <Navbar/>
      <Aboutimg img={img}/>
    <Container style={{paddingInline:50,paddingTop:40,paddingBottom:0}}>
      <ContactBody/>
    </Container>
    </div>
  )
}

export default contact
