import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Prueba <GifItem/>", () => {
  const title = "One Punch";
  const url = "https://giphy.com/embed/VXJWhaO7afRe";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de tener la imagen igual al url y alt", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe de mostrar el titulo del componente", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy;
    
  });
});
