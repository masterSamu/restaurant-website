import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { IconContext } from "react-icons";

import "./Footer.css";

export default function Footer() {
  return (
    <Row className="footer-row">
      <Col className="footer-l-col">
        <p>Pai Streetfood</p>
      </Col>
      <Col className="footer-r-col">
        <IconContext.Provider value={{ color: "rgb(85, 85, 85)", size: "2em" }}>
          <span>
            <a href="#">
              <BsInstagram title="link to instagram" />
            </a>
          </span>
          <span>
            <a href="#">
              <BsFacebook title="link to facebook" />
            </a>
          </span>
        </IconContext.Provider>
      </Col>
    </Row>
  );
}
