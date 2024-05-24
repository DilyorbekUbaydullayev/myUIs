import React from 'react'
import Grid from "@mui/material/Grid";
import { Button, Typography,Box } from "@mui/material";
import { cards} from "../../data/data";
const aboutcard = () => {
  return (
    <div>
      <Grid
      container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
            sx={{ justifyContent: "center" }}>
            {cards.slice(0,3).map((item, index) => (
              <Grid
                item
                xs={12}
                sm={11}
                md={4}
                key={index}
                
              >
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
    </div>
  )
}

export default aboutcard
