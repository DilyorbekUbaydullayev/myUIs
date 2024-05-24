import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Carusel from "./components/carusel/carusel";
import { Button, Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Navbar from "./components/navbar/navbar";
import img from "./assets/main_banner.jpg";
import img1 from "./assets/featured_item_1.jpg";
import img2 from "./assets/featured_item_2.jpg";
import img3 from "./assets/featured_item_3.jpg";
import img4 from "./assets/service_icon_1.png";
import img5 from "./assets/service_icon_2.png";
import img6 from "./assets/service_icon_3.png";
import logo from "./assets/footer_logo.png";
import myVideo from "./assets/highway-loop.mp4";
import styled from "styled-components";
import Button1 from "./components/button/button";
import { Padding } from "@mui/icons-material";
import Card from "./components/card/card";
import Accordion1 from "./components/accordion/accordion";
import { MdPlayArrow, MdPlayCircleOutline } from "react-icons/md";
import {
  FaDribbble,
  FaFacebook,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoRss } from "react-icons/io";

const cards = [img1, img2, img3];
const cards2 = [
  {
    img: img4,
    title: "High Quality Design",
  },
  {
    img: img5,
    title: "Fully Customizable",
  },
  {
    img: img6,
    title: "Best HTML CSS Layout",
  },
];
const cards3 = ["Start Plan", "Premium Plan", "Advanced Plan"];
const Banner = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 127.7vh;
  width: 100%;
  position: relative;
`;
export default () => {
  return (
    <>
      <Navbar />
      <Banner>
        <div className="div1">
          <div className="div2"></div>
          <h1 className="mb-4 mt-3">Best Finder For You</h1>
          <h4>Suspendisse eu lorem massa. Integer sit amet posuere tellus.</h4>
          <Button1 name={"Discover more "} />
          <div className="div3">
            <Row>
              <Col className="inputs sm-12 md-3" sm={12} md={3}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name..."
                  className="inp"
                />
              </Col>
              <Col className="inputs sm-12 md-3" sm={12} md={3}>
                <input
                  type="text"
                  name="address"
                  className="inp"
                  placeholder="Type location..."
                />
              </Col>
              <Col className="inputs sm-12 md-3" sm={12} md={3}>
                <select className="inp">
                  <option value="volvo">Select Category...</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </Col>
              <Col sm={12} md={3}>
                <Button className="mybutton">Search Now</Button>
              </Col>
            </Row>
          </div>
        </div>
      </Banner>

      <div className="text-center div4">
        <p>Popular Places</p>
        <h4>Integer sapien odio</h4>
      </div>
      <Container fluid>
        <Carusel />
      </Container>

      <div className="div5">
        <Container fluid="md">
          <div className="text-center div4 pt-5">
            <p>Featured Places</p>
            <h4>Praesent nec dui sed urna</h4>
          </div>
          <Row className="g-5 mt-2">
            {cards.map((card, index) => {
              return (
                <Col sm={12} md={4} key={index}>
                  <Card img={card} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <Container fluid="md">
        <div>
          <div className="text-center div4 pt-4 pb-5">
            <p>Our Services</p>
            <h4>Best Template Site</h4>
          </div>
        </div>
        <Row className="pb-5 mb-5 g-5 r">
          {cards2.map((card, index) => {
            return (
              <Col sm={12} md={4} key={index}>
                <div className="div6 text-center p-4 pt-5 pb-5">
                  <img src={card.img} alt="" className="pb-4" />
                  <h4 className="pb-2">{card.title}</h4>
                  <p className="fs-6">
                    Etiam viverra nibh at lorem hendrerit porta non nec ligula.
                    Donec hendrerit porttitor pretium. Suspendisse fermentum nec
                    risus.
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container fluid="md">
        <Row className="px-md-5 px-sm-auto g-5">
          <Col sm={12} md={6}>
            <div className="div7">
              <h5>In hac habitasse platea dictumst</h5>
              <p>
                Aenean hendrerit metus leo, quis viverra purus condimentum nec.
                Pellentesque a sem semper, lobortis mauris non, varius urna.
                Quisque sodales purus eu tellus fringilla.
              </p>
              <p className="pb-2">
                Mauris sit amet quam congue, pulvinar urna et, congue diam.
                Suspendisse eu lorem massa. Integer sit amet posuere tellus, id
                efficitur leo. In hac habitasse platea dictumst.
              </p>
              <Button1 name={"Discover More"} />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <Accordion1 />
          </Col>
        </Row>
      </Container>
      <div
        style={{
          position: "relative",
          maxWidth: "100%",
          height: "100%",
          background: "#000",
          marginTop: 70,
        }}>
        <video
          autoPlay
          loop
          muted
          style={{ maxWidth: "100%", height: "auto", opacity: 0.5 }}>
          <source src={myVideo} type="video/mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}>
          <div className="color-light text-center">
            <p>Video Presentation</p>
            <h4>Sed et risus ac sapien congue mattis.</h4>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}>
          <a href="https://www.youtube.com/">
            <div
              style={{
                border: "2px solid#fff",
                padding: 10,
                borderRadius: "50%",
              }}>
              <MdPlayArrow style={{ fontSize: 50, color: "#fff" }} />
            </div>
          </a>
        </div>
      </div>
      <div className="text-center div4 pt-4 pb-5 ">
        <p>Pricing Tables</p>
        <h4>Duis molestie ipsum id faucibus fermentum</h4>
      </div>

      <Container>
        <Row>
          {cards3.map((card, i) => {
            return (
              <Col sm={12} md={4} key={i}>
                <div className="div8 text-center pb-5">
                  <div className="div9 text-light">
                    <h5 className="pt-4">{card}</h5>
                    <h4>$45</h4>
                    <p className="pb-4">/monthly</p>
                  </div>
                  <div className="div10 ">
                    <div className="py-4">
                      {Array.from(Array(5)).map((e, i) => {
                        return (
                          <p key={i} className="p2">
                            200 Suspendisse dapibus
                          </p>
                        );
                      })}
                    </div>
                    <Button1 name={"Buy It Now "} />
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228295.89854831516!2d69.32053318660317!3d41.25267767287769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c3da3c6e5c3%3A0x9882f2a6b7329d1d!2sTDTU!5e0!3m2!1sru!2s!4v1715449383281!5m2!1sru!2s"
          width="100%"
          height="500"></iframe>
      </div>
      <div className="div11 pb-3">
        <div className="text-center div4 pt-4 pb-5 ">
          <p>Contact Us</p>
          <h4 className="pb-4">Vivamus nec vehicula felis</h4>
          <Button1 name={"Talk to us"} />
        </div>
      </div>
      <Container>
        <Row className="gx-3 gy-3 pt-5 pb-5">
          <Col sm={12} md={5}>
            <div className="div12 text-start pb-4">
              <img src={logo} alt="" />
            </div>
            <p className="fp">
              Mauris sit amet quam congue, pulvinar urna et, congue diam.
              Suspendisse eu lorem massa. Integer sit amet posuere tellus, id
              efficitur leo. In hac habitasse platea dictumst.
            </p>
            <div>
              <ul className="ul">
                <li className="social">
                  <FaFacebookF />
                </li>
                <li className="social">
                  <FaTwitter />
                </li>
                <li className="social">
                  <FaLinkedinIn />
                </li>
                <li className="social w">
                  <IoLogoRss />
                </li>
                <li className="social">
                  <FaDribbble />
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <h4 className="pb-4">Useful Links</h4>
            <div className="link">
              <div className="div12">
                <ul>
                  <li>Help FAQs</li>
                  <li>Register</li>
                  <li>Login</li>
                  <li>My Profile</li>
                  <li>How It Works?</li>
                  <li>More About Us</li>
                </ul>
              </div>
              <div className="div12">
                <ul>
                  <li>Our Clients</li>
                  <li>Partnerships</li>
                  <li>Blog Entries</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <h4 className="ps-md-4 pb-4">Contact Information</h4>
            <p className="fp ps-md-4">
              Praesent iaculis gravida elementum. Proin fermentum neque
              facilisis semper pharetra. Sed vestibulum vehicula tincidunt.
            </p>
            <div className="link2">
              <div className="div13">
                <ul className="ps-4">
                  <li>Phone:</li>
                  <li>Email:</li>
                  <li>Address:</li>
                </ul>
              </div>
              <div className="div14">
                <ul>
                  <li>010-050-0550</li>
                  <li>hi@company.co</li>
                  <li>company.co</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer pb-3 pt-4">
        <p>Copyright © 2018 Company Name - Design: <font style={{color:'#4883ff'}}>Template Mo</font></p>
      </div>
    </>
  );
};
