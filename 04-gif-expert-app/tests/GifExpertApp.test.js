import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("debe buscar una nueva categoria", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");
  });

  test("renders the component", () => {
    const { getByText } = render(<GifExpertApp />);

    const titleElement = getByText("Gif Expert App");
    expect(titleElement).toBeTruthy();

    const initialCategoryElement = getByText("One Punch");
    expect(initialCategoryElement).toBeTruthy();
  });

  test("Adds a new category when 'AddCategory' is used", () => {
    const { getByPlaceholderText } = render(<GifExpertApp />);

    const inputElement = getByPlaceholderText("Buscar gifs");

    fireEvent.change(inputElement, { target: { value: "New Category" } });

    expect(inputElement.value).toBe("New Category");
  });


});
