import React from "react";
import { Container, Row } from "react-bootstrap";

export default function MenuItem() {
  return (
    <Container fluid className="item-container">
      <Row className="item-header-container">
        <span className="item-name">Pad Thai</span>
        <span className="item-price">10€</span>
      </Row>
      <Row className="raw-materials-container">
        <span className="raw-materials">
          Riisinuudelit, Kana, Porkkana, Valkokaali, TOfu, Purjosipuli,
          Kananmuna, Punasipuli, Pad Thai kastike, Tamarin kastike
        </span>
      </Row>
    </Container>
  );
}
