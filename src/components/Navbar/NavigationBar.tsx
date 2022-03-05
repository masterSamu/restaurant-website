import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="white" variant="light" sticky="top">
      <Container id="HOME">
        <Navbar.Brand href="#HOME"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#MENU">MENU</Nav.Link>
            <Nav.Link href="#SCHEDULE">SCHEDULE</Nav.Link>
            <Nav.Link href="#ABOUT-US">ABOUT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
