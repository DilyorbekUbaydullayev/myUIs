
import 'bootstrap/dist/css/bootstrap.min.css';
import stl from './navbar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from '../../assets/logo.png';

export default()=> {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
      <Navbar.Brand href="#home" className={stl.logo}><img src={img} style={{maxWidth:'100%',height:'auto'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" ms-auto">
            <Nav.Link className={stl.nav_title} href="#features">Popular</Nav.Link>
            <NavDropdown className={stl.nav_title} title="Most Visited" id={stl.collapsible_nav_dropdown}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className={stl.nav_title} href="#features">Blog Entries</Nav.Link>
            <Nav.Link className={stl.nav_title} href="#features">Our Services</Nav.Link>
            <Nav.Link className={stl.nav_title} href="#features">Contact Us</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
