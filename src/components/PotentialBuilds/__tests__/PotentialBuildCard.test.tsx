import { describe, it, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import { mockLegoSet } from "../../../mocks/mockLegoData";
import userEvent from "@testing-library/user-event";

const mockUseHistoryPush = vi.fn();

vi.mock("react-router-dom", () => ({
  useHistory: () => ({ push: mockUseHistoryPush }),
}));
import PotentialBuildSetCard from "../PotentialBuildSetCard";

describe("PotentialBuildSetCard", () => {
  it("As a user, I expect to see appropriate data for a given lego set", () => {
    render(<PotentialBuildSetCard set={mockLegoSet} />);

    expect(screen.getByText(mockLegoSet.setNumber)).toBeVisible();
    expect(screen.getByText(mockLegoSet.year)).toBeVisible();
    expect(screen.getByText(mockLegoSet.themeName)).toBeVisible();
    expect(screen.getByText(mockLegoSet.totalBricks)).toBeVisible();
  });
  it("As a user, I expect to be taken to the show page for a lego set if I click on the Lego set name", async () => {
    render(<PotentialBuildSetCard set={mockLegoSet} />);

    const nameButton = screen.getByText(mockLegoSet.name);

    await userEvent.click(nameButton);

    expect(mockUseHistoryPush).toHaveBeenLastCalledWith(
      `/lego_sets/${mockLegoSet.id}`
    );
  });
});
