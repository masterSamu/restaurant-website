import React from "react";
import { Container, Row } from "react-bootstrap";
import ScheduleItem from "./ScheduleItem";
import "./Schedule.css";

export default function Schedule() {
  return (
    <Container className="schedule-section">
      <Row>
        <h2 id="SCHEDULE" className="schedule-main-headline">
          SCHEDULE
        </h2>
      </Row>
      <Row className="schedule-container">
        <ScheduleItem
          weekDay="Maanantai"
          isOpen={false}
          openingHours={null}
          location={null}
        />
        <ScheduleItem
          weekDay="Tiistai"
          isOpen={true}
          openingHours={{ opens_at: "10:00", closed_at: "20:00" }}
          location={{ url: "www.google.com", name: "Nokia, Pirkkalaistori" }}
        />
        <ScheduleItem
          weekDay="Keskiviikko"
          isOpen={true}
          openingHours={{ opens_at: "10:00", closed_at: "20:00" }}
          location={{ url: "www.google.com", name: "Pirkkala, Suupantori" }}
        />
        <ScheduleItem
          weekDay="Torstai"
          isOpen={true}
          openingHours={{ opens_at: "10:00", closed_at: "20:00" }}
          location={{ url: "www.google.com", name: "Nokia, Pirkkalaistori" }}
        />
        <ScheduleItem
          weekDay="Perjantai"
          isOpen={true}
          openingHours={{ opens_at: "10:00", closed_at: "20:00" }}
          location={{ url: "www.google.com", name: "Pirkkala, Suupantori" }}
        />
        <ScheduleItem
          weekDay="Lauantai"
          isOpen={true}
          openingHours={{ opens_at: "10:00", closed_at: "20:00" }}
          location={{ url: "www.google.com", name: "Nokia, Pirkkalaistori" }}
        />
        <ScheduleItem
          weekDay="Sunnuntai"
          isOpen={false}
          openingHours={null}
          location={null}
        />
      </Row>
    </Container>
  );
}
