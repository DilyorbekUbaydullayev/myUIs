import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Aboutcard from "./aboutcard";
import { Title, Text3, Link } from "../../styles/styles";
import Card1 from "../cards/card1";
import { Card } from "@mui/material";
import img from '../../assets/tm-img-310x180-2.jpg';
import img1 from '../../assets/tm-img-310x180-1.jpg';
import img2 from '../../assets/tm-img-310x180-3.jpg';



export default () => {
  return (
    <Box sx={{ width: "100%",pb:10 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
            <Card1 title={'DETAIL'} img={img1} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Card1 title={'READ MORE'} img={img} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Card1 title={'DETAIL'} img={img2}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{mt:-0.5}}>
          <Link style={{fontSize:25}}>Duis sit amet tristique <br /> #1</Link>
          <Title  style={{borderBottom:'1px solid #8c8c8c',paddingBottom:25}}>
            Vestibulum arcu erat, lobortis sit amet tellus ut, semper tristique
            nibh. Nunc in molestie elit.
          </Title>
          <Link style={{fontSize:25}}>Duis sit amet tristique <br /> #1</Link>
          <Title>
            Vestibulum arcu erat, lobortis sit amet tellus ut, semper tristique
            nibh. Nunc in molestie elit.
          </Title>
        </Grid>
      </Grid>
    </Box>
  );
};
