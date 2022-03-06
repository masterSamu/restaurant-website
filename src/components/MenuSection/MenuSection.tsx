import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuItem from "./MenuItem";
import "./MenuSection.css";

export default function MenuSection() {
  return (
    <Container className="menu-container">
      <Row className="menu-headline-container">
        <h2>MENU</h2>
      </Row>
      <Row>
        <Col sm={6}>
          <Row>
            <h3>Pääruoka</h3>
          </Row>
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </Col>
        <Col sm={6}>
          <Row>
            <h3>Makeat</h3>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
