import { screen, render } from "@testing-library/react";
import About from "../About";

describe("About component", () => {
  it("As a user, I expect to see the About title on page load", () => {
    render(<About />);
    expect(screen.getByText(/About Page/)).toBeVisible();
  });
});
