import React from "react";
import stl from "./work.module.css";
import { Container } from "react-bootstrap";

const work = () => {
  return (
    <div>
      {/* Our work */}
      <div className={stl.work}>
        <div className={stl.title}>
          <Container>
            <h1>Our Work</h1>
            <div className={stl.line}></div>
            <h4>Elit, sed do eiusmod tempor incididunt</h4>
            <p>
              Vector illustration Freepik. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus
            </p>
          
          </Container>
        </div>
      </div>
    </div>
  );
};

export default work;
