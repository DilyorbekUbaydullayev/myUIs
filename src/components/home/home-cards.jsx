import * as React from "react";

import img5 from "../../assets/tm-img-660x330-1.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import { Title, Link } from "../../styles/styles";
import { cards, titles, posts,links } from "../../data/data";
export default () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
            sx={{ justifyContent: "center" }}>
            {cards.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}>
                <Box>
                  <img
                    src={item.img}
                    style={{ maxWidth: "100%", height: "auto" }}
                    alt=""
                  />
                  <Typography
                    sx={{ color: "#cc9900", fontSize: 24, mt: 2, mb: 2 }}>
                    Lorem ipsum dolor#{item.num}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
                      fontSize: 16.5,
                      lineHeight: 2,
                      color: "#8C8C8C",
                    }}>
                    {item.title}
                  </Typography>
                  <Button
                    sx={{
                      my: 2,
                      borderRadius: 1.5,
                      p: "8px 23px",
                      color: "#fff",
                      display: "block",
                      fontFamily: "Open Sans,Helvetica,sans-serif",
                      fontSize: "18px",
                      fontWeight: "100",
                      backgroundColor: "#CC9900",
                      "&:hover": { backgroundColor: "#906E09", color: "white" },
                    }}>
                    {item.button}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ mt: 8 }}>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  color: "#cc9900",
                  fontSize: 26,
                  mt: 2,
                  mb: 2,
                  letterSpacing: 1.2,
                }}>
                Pellentesque fermentum mauris et posuere
              </Typography>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: 19.5,
                  lineHeight: 2,
                  color: "#8C8C8C",
                  marginBottom: 15,
                }}>
                Vivamus accumsan blandit ligula. Sed lobortis efficitur sapien
              </p>
              <img
                src={img5}
                style={{ maxWidth: "100%", height: "auto" }}
                alt=""
              />
              {titles.map((title, i) => {
                return <Title key={i}>{title.title}</Title>;
              })}
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
                  backgroundColor: "#CC9900",
                  "&:hover": { backgroundColor: "#906E09", color: "white" },
                }}>
                READ MORE
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={12}>
                  <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Typography
                        sx={{
                          color: "#cc9900",
                          fontSize: 26,
                          mt: 2,
                          mb: 1,
                          letterSpacing: 1.2,
                        }}>
                        Categories
                      </Typography>
                     {links.slice(1,6).map((item, index)=>{
                      return(
                        <Link href='#' key={index}>
                          <p style={{lineHeight:index===0?'40px':"px",marginBottom:index===0?'2px':''}}>{item}</p>
                        </Link>
                      )
                     })}
                    </Grid>
                    <Grid item xs={12}  sm={6} md={6}>
                      <Typography
                        sx={{
                          color: "#cc9900",
                          fontSize: 26,
                          mt: 2,
                          mb: 2.0,
                          letterSpacing: 1.2,
                        }}>
                        Useful Links
                      </Typography>
                      {links.slice(6,11).map((item, index)=>{
                      return(
                        <Link href='#' key={index}>
                          <p style={{lineHeight:index===4?'50px':"22px",marginTop:index===4?'15px':'px'}}>{item}</p>
                        </Link>
                      )
                     })}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={12}>
                <Typography
                    sx={{ color: "#cc9900", fontSize: 26, mt:0, mb: 2 }}>
                    Related Posts
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12} sx={{mt:-2,mb:10}}>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 0, md: 12 }}>
                    {posts.map((post, index) => (
                      <Grid item xs={12} sm={12} md={12} key={index}>
                        <Grid
                          container
                          rowSpacing={1}
                          columnSpacing={{ xs: 6, sm:0, md: 3 }}>
                          <Grid item xs={12} sm={6}>
                            <img
                              src={post.img}
                              style={{ maxWidth: "100%", height: "auto",marginTop:50 }}
                              alt=""
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                          <Typography
                    sx={{ color: "#cc9900", fontSize: 24, mt:0, mb: 2 }}>
                    Lorem ipsum dolor
                  </Typography>
                  <Typography
                    sx={{
                      width:'100%',
                      fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
                      fontSize: 16.5,
                      lineHeight: 2,
                      color: "#8C8C8C",
                      pb: 2,
                      borderBottom:'1px solid #8C8C8C'

                    }}>
                    {post.title}
                  </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
