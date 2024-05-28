import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiBell } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import stl from "./navbar.module.css";
import Navicon from "../../assets/apple-icon.png";
import { useNavigate } from "react-router-dom";
const navbar = ["Home", "About", "Work", "Pricing", "Contact"];
const navicon = [<BiBell />, <MdOutlineSettings />, <FaRegCircleUser />];

export default () => {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" className={stl.navbar}>
      <Container>
        <Navbar.Brand href="#home" className={stl.brand}>
          <img src={Navicon} width={24} alt="" className="me-1 mb-2" />
          <span className="fs-4 me-2" id={stl.P}>
            Purple
          </span>
          <span className="fs-4" id={stl.B}>
            Buzz
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto pe-5 pt-0 pb-1">
            {navbar.map((item, i) => {
              return (
                <Nav.Link href="#features" key={i}>
                  <Button
                    className={stl.btn}
                    onClick={() => {
                      navigate(i===0?'/':"/" + `${item}`);
                    }}>
                    {item}
                  </Button>
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav className="ms-auto" id={stl.icons}>
            {navicon.map((item, i) => {
              return (
                <Nav.Link className="fs-4 me-3 mb-2" id={stl.icons} key={i}>
                  {item}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
