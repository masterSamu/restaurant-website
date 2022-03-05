import { render, screen, fireEvent } from "@testing-library/react";
import NavigationBar from "../NavigationBar";

test("Navigation bar has all links visible", () => {
    render(<NavigationBar />);
    const linkTexts = ["MENU", "SCHEDULE", "ABOUT US"];
    linkTexts.forEach(item => expect(item).toBeInTheDocument);
})