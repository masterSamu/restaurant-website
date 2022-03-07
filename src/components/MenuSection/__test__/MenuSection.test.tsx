import { render, screen, fireEvent } from "@testing-library/react";
import MenuSection from "../MenuSection";
import MenuItem from "../MenuItem";

test("Menu item information is rendering", () => {
    render(<MenuItem name="Noodle" price={10} materials="Noodle, chicken" />);
    const nameElement = screen.getByTestId("menu-item-name");
    expect(nameElement).toHaveTextContent("Noodle");

    const priceElement = screen.getByTestId("menu-item-price");
    expect(priceElement).toHaveTextContent("10");

    const materialsElement = screen.getByTestId("menu-item-materials");
    expect(materialsElement).toHaveTextContent("Noodle, chicken")
})

test("Menu section is rendering properly", () => {
    render(<MenuSection />);
    const text = screen.getByText("MENU");
    expect(text).toBeInTheDocument();
})