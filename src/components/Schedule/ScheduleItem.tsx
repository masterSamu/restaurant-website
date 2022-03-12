import React from "react";
import { Row } from "react-bootstrap";

interface Props {
  weekDay: string;
  openingHours: { opens_at: string; closed_at: string } | null;
  location: { url: string; name: string } | null;
  isOpen: boolean;
}

export default function ScheduleItem({
  weekDay,
  openingHours,
  location,
  isOpen,
}: Props) {
  return (
    <>
      <Row className="schedule-day-info" data-testid="scheduleItem-test">
        <Row>
            <span className="schedule-day-headline">{weekDay}</span>
        </Row>
          {isOpen ? (
            <div className="schedule-day-info-container">
              <div className="sdic-inner-container">
                <span className="sdic-text-title bold-text">Aukioloaika:</span>
                <span>
                  {openingHours?.opens_at + " - " + openingHours?.closed_at}
                </span>
              </div>
              <div className="sdic-inner-container">
                <span className="sdic-text-title bold-text">Location:</span>
                <span>
                  <a href={location?.url}>{location?.name}</a>
                </span>
              </div>
            </div>
          ) : (
            <Row className="schedule-closed-text">
              <span>Suljettu</span>
            </Row>
          )}
      </Row>
    </>
  );
}
