import Loading from "../Loading";
import { screen, render } from "@testing-library/react";
import { textLabels } from "../../../constants";

describe("Loading component", () => {
  it("As a user, I expect to see the appropriate text when the loading component loads", () => {
    render(<Loading />);
    expect(screen.getByText(textLabels.loadingLabel)).toBeVisible();
  });
});
