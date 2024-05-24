import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import img from "../../assets/classic-pattern-bg.png";
import img1 from "../../assets/tm-img-100x100-1.jpg";
import img2 from "../../assets/tm-img-100x100-2.jpg";
import img3 from "../../assets/tm-img-100x100-3.jpg";
import img4 from "../../assets/tm-img-100x100-4.jpg";
import img5 from "../../assets/tm-img-100x100-5.jpg";
import img6 from "../../assets/tm-img-100x100-6.jpg";
import { Text3, Linkyellow, Button2 } from "../../styles/styles";
import { Box, Button, Container, Typography } from "@mui/material";

const Bgimg = styled.div`
  background-image: url(${img});
  background-size: auto;
  background-position: center;
  height: 650px;
  padding-top: 40px;
  padding-bottom: 80px;
  @media (max-width: 1170px) {
    height: auto;
  }
`;
const footer = () => {
  return (
    <div>
      <Bgimg>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Text3>Proin eu posuere felis</Text3>
              <Box
                sx={{
                  bgcolor: "#cccccc",
                  p: "20px 1px 20px 1px",
                  fontSize: "16px",
                  lineHeight: 2,
                  fontWeight: 300,
                  paddingInline: 3.8,
                  mb: 10,
                }}>
                <p>
                  Classic is free HTML CSS website template provided by
                  templatemo for everyone. Feel free to use it.
                </p>
                <p>
                  Aenean cursus tellus mauris, quis consequat mauris dapibus id.
                  Donec scelerisque porttitor pharetra.
                </p>
                <p style={{ fontWeight: "500", fontSize: 19 }}>
                  Danny Egg (Executive)
                </p>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Text3>Nulla tortor dolor</Text3>
              <Linkyellow>Tincidunt non faucibus</Linkyellow>
              <Linkyellow>Vestibulum tempor</Linkyellow>
              <Linkyellow>Fusce non turpis euismod</Linkyellow>
              <Linkyellow>Lorem ipsum dolor sit</Linkyellow>
              <Linkyellow>Nam in augue consectetur</Linkyellow>
              <Linkyellow>Text Link Color #CCCC66</Linkyellow>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Text3>Etiam mollis ornare</Text3>
              <Typography
                sx={{
                  fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
                  fontSize: 16,
                  lineHeight: 2,
                  color: "#fff",
                  pb: 3,
                  borderBottom: "1px solid #fff",
                }}>
                Aenean cursus tellus mauris, quis consequat mauris dapibus id.
                Donec scelerisque porttitor pharetra.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
                  fontSize: 16,
                  lineHeight: 2,
                  color: "#fff",
                  pt: 3,
                  pb: 3,
                  borderBottom: "1px solid #fff",
                }}>
                Aenean cursus tellus mauris, quis consequat mauris dapibus id.
                Donec scelerisque porttitor pharetra.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
                  fontSize: 16,
                  lineHeight: 2,
                  color: "#fff",
                  pt: 3,
                  pb: 3,
                }}>
                Aenean cursus tellus mauris, quis consequat mauris dapibus id.
                Donec scelerisque porttitor pharetra.
              </Typography>
              <Button
                sx={{
                  my: 2,
                  borderRadius: 1.5,
                  p: "8.5px 28px",
                  color: "#fff",
                  display: "block",
                  fontFamily: "Open Sans,Helvetica,sans-serif",
                  fontSize: "18px",
                  fontWeight: "300",
                  backgroundColor: "#666666",
                  "&:hover": { backgroundColor: "#515050", color: "white" },
                }}>
                READ MORE
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Text3>Fusce non turpis</Text3>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.6,
                }}>
                <img
                  src={img1}
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <img
                  src={img2}
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <img
                  src={img3}
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <img
                  src={img4}
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <img
                  src={img5}
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <img
                  src={img6}
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
                  fontSize: 15.5,
                  lineHeight: 2,
                  color: "#fff",
                  pt: 3,
                  pb: 3,
                }}>
                Curabitur dui massa, aliquam quis mi sed, tempor vulputate
                tellus. Sed vestibulum non neque.
              </Typography>
              <Button
                sx={{
                  my: 2,
                  borderRadius: 1.5,
                  p: "8.5px 28px",
                  color: "#fff",
                  display: "block",
                  fontFamily: "Open Sans,Helvetica,sans-serif",
                  fontSize: "18px",
                  fontWeight: "300",
                  backgroundColor: "#666666",
                  "&:hover": { backgroundColor: "#515050", color: "white" },
                }}>
                BROWSE
              </Button>
            </Grid>
          </Grid>
          <p style={{marginTop:5,color:'#999999',fontSize:18}}>
          Copyright 2016 Your Company Name
          </p>
        </Container>
      </Bgimg>
    </div>
  );
};

export default footer;
