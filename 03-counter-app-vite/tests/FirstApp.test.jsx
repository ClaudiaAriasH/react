import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Prueba <FirstApp/>", () => {
  test("debe de hacer match con el snapshot", () => {
    const title = "First App.";
    const { container } = render(<FirstApp title={title} />);
    //expect(container).toMatchSnapshot();
  });
  test("debe de mostrar el título en un h1", () => {
    const title = "Hola, Soy Sasha";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain( title )
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola, Soy Sasha";
    const subTitle = "Soy un subtitulo";
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    expect(getAllByText(subTitle).length).toBe(1);
  });
});
