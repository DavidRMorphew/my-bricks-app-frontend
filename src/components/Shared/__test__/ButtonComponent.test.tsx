import Button from "../ButtonComponent";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { screen, render } from "@testing-library/react";

const mockOnClickHandler = vi.fn();

describe("ButtonComponent", () => {
  it("As a user, I expect the button component to be disabled if the disabled prop is passed in", () => {
    render(
      <Button onClick={mockOnClickHandler} disabled>
        Button Text
      </Button>
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
  it("As a user, I expect the button component children to display", () => {
    render(
      <Button onClick={mockOnClickHandler}>
        <h1>Button Label</h1>
      </Button>
    );
    expect(screen.getByRole("heading")).toHaveTextContent(/Button Label/);
  });
  it("As a user, I expect the onClick handler to be called when the button is clicked", async () => {
    render(
      <Button onClick={mockOnClickHandler}>
        <h1>Button Label</h1>
      </Button>
    );
    await userEvent.click(screen.getByRole("button"));
    expect(mockOnClickHandler).toHaveBeenCalled();
  });
});
