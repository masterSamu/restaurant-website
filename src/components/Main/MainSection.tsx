import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";
import Headline from './Headline';
import "./MainSection.css";

export default function MainSection() {
  return (
    <Container className="main-container">
        <Row className="main-row">
            <Col xs={6} className="main-col headline-container">
                <Headline />
            </Col>
            <Col xs={6} className="main-col">
                <Image roundedCircle src="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80" />
            </Col>
        </Row>
    </Container>
  )
}
