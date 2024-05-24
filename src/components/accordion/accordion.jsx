import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import stl from "./accordion.module.css";
import { useState } from "react";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      className={stl.button}
      type="button"
      style={{ backgroundColor: isClicked ? "#4883FF" : "#d1d1d1" }}
      onClick={(event) => {
        decoratedOnClick(event);
        handleClick(event);
      }}>
      {children}
    </button>
  );
}

export default () => {
  return (
    <Accordion>
      <Card className={stl.card}>
        <Card.Header className={stl.header}>
          <Card.Title className={stl.title}>Ut in dapibus ipsum</Card.Title>
          <div className="text-end">
            <CustomToggle eventKey="0" className={stl.button2}></CustomToggle>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body> Nulla eget aliquet dui, vitae tincidunt nulla. Sed sagittis odio
            vitae auctor volutpat. In semper ex neque, ut hendrerit mauris
            rutrum eget. Integer consectetur neque eu enim dictum porta. Sed et
            risus ac sapien congue mattis.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className={stl.card}>
        <Card.Header className={stl.header}>
          <Card.Title className={stl.title}>Vivamus ligula metus</Card.Title>
          <div className="text-end">
            <CustomToggle eventKey="1" className={stl.button2}></CustomToggle>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            Nulla eget aliquet dui, vitae tincidunt nulla. Sed sagittis odio
            vitae auctor volutpat. In semper ex neque, ut hendrerit mauris
            rutrum eget. Integer consectetur neque eu enim dictum porta. Sed et
            risus ac sapien congue mattis.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className={stl.card}>
        <Card.Header className={stl.header}>
          <Card.Title className={stl.title}>Suspendisse dapibus</Card.Title>
          <div className="text-end">
            <CustomToggle eventKey="2" className={stl.button2}></CustomToggle>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body> Nulla eget aliquet dui, vitae tincidunt nulla. Sed sagittis odio
            vitae auctor volutpat. In semper ex neque, ut hendrerit mauris
            rutrum eget. Integer consectetur neque eu enim dictum porta. Sed et
            risus ac sapien congue mattis.</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
