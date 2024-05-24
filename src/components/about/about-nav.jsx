import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";



const pages = [{
  name: "Home",
  path: "/",
}
 , {
  name: "About",
  path: "/about",
}
 , {
  name: "Blog",
  path: "/blog",
}
 , {
  name: "Contact",
  path: "/contact",
}
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate=useNavigate()
  return (
    
    <AppBar position="static" color="">
      <Container maxWidth="xl">
      <Toolbar disableGutters sx={{p:1.2}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              ml: 3.4,
              display: { xs: "none", md: "flex" },
              fontFamily: 'Open Sans,Helvetica,sans-serif',
              fontWeight: 500,
              letterSpacing: "0",
              color: "#CC9900",
              textDecoration: "none",
              fontSize: 41.5,
            }}>
            Classic
          </Typography>

         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: 'sans-serif',
              fontWeight: 500,
              letterSpacing: "0",
              color: "#CC9900",
              textDecoration: "none",
              fontSize: 40,
            }}>
            Classic
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "end", marginRight:45},
            }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              {pages.map((page, index) => (
                <Button
                  key={page.name}
                  onClick={()=>{
                    handleCloseNavMenu();
                    navigate(page.path)
          
                  }}
                  sx={{
                    my: 2,
                    borderRadius:1.5,
                    p:'8.5px 39px',
                    color: index === 1 ? "#fff" : "black",
                    display: "block",
                    fontFamily: 'Open Sans,Helvetica,sans-serif',
                    fontSize: "18px",
                    textTransform:'capitalize',
                    backgroundColor: index === 1 ? "#CC9900" : "white",
                    "&:hover": { backgroundColor: "#CC9900", color: "white" },
                  }}>
                  {page.name}
                </Button>
              ))}
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
               <MenuItem key={page}  onClick={()=>{
                handleCloseNavMenu();
                navigate(page.path)
      
              }}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
