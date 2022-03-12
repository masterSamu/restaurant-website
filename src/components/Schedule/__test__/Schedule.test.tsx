import { render, screen } from "@testing-library/react";
import Schedule from "../Schedule";
import ScheduleItem from "../ScheduleItem";

test("renders Schedule component without crashing", () => {
  render(<Schedule />);
});

test("renders ScheduleItem as closed, with weekday", () => {
  render(
    <ScheduleItem
      weekDay="Sunday"
      isOpen={false}
      openingHours={null}
      location={null}
    />
  );
  const element = screen.getByTestId("scheduleItem-test");
  expect(element).toHaveTextContent("Suljettu");
  expect(element).toHaveTextContent("Sunday");
});

test("renders ScheduleItem as open, with weekday", () => {
  render(
    <ScheduleItem
      weekDay="Monday"
      isOpen={true}
      openingHours={{ opens_at: "10:00", closed_at: "20:00" }}
      location={{ url: "www.google.com", name: "Tampere, Tammelantori" }}
    />
  );
  const element = screen.getByTestId("scheduleItem-test");
  expect(element).toHaveTextContent("Monday");
  expect(element).toHaveTextContent("10:00 - 20:00");
  expect(element).toHaveTextContent("Tampere, Tammelantori");
});

test("render ScheduleItem as closed, but with openinghours and location", () => {
  render(
    <ScheduleItem
      weekDay="Monday"
      isOpen={false}
      openingHours={{ opens_at: "10:00", closed_at: "20:00" }}
      location={{ url: "www.google.com", name: "Tampere, Tammelantori" }}
    />
  );
  const element = screen.getByTestId("scheduleItem-test");
  expect(element).toHaveTextContent("Monday");
  expect(element).not.toHaveTextContent("10:00 - 20:00");
  expect(element).not.toHaveTextContent("Tampere, Tammelantori");
  expect(element).toHaveTextContent("Suljettu");
});
