import React from 'react'
import { Container } from '@mui/material';
import Navbar from "../../components/blog/blog-nav";
import Aboutimg from '../../components/about/about-img';
import img from "../../assets/tm-blog-img.jpg";
import Main from '../../components/blog/main';

const blog = () => {
  return (
    <div>
      <Navbar/>
      <Aboutimg  img={img} />
      <Container style={{paddingInline:50,paddingTop:40,paddingBottom:80}}>
  <Main/>
      </Container>

    </div>
  )
}

export default blog
