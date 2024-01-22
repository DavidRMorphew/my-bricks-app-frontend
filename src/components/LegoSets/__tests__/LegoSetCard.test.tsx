import { screen, render } from "@testing-library/react";
import { textLabels } from "../../../constants";
import { mockLegoSet } from "../../../mocks/mockLegoData";
import userEvent from "@testing-library/user-event";

const mockChangedOwnedStatus = jest.fn();
const mockUseHistoryPush = jest.fn();
const mockLegoSetNotOwned = { ...mockLegoSet, owned: false };

jest.mock("react-router-dom", () => ({
  useHistory: () => ({ push: mockUseHistoryPush }),
}));
import LegoSetCard from "../LegoSetCard";

describe("LegoSetCard component", () => {
  it("As a user, I expect to see basic the LegoSet name", () => {
    render(
      <LegoSetCard
        legoSet={mockLegoSet}
        changeOwnedSetStatus={mockChangedOwnedStatus}
      />
    );
    expect(screen.getByText(mockLegoSet.name)).toBeVisible();
  });
  it("As a user, I expect the useHistory hook to call a push to the appropriate lego set id if I click on the name button", async () => {
    render(
      <LegoSetCard
        legoSet={mockLegoSet}
        changeOwnedSetStatus={mockChangedOwnedStatus}
      />
    );
    const nameButton = screen.getByTestId("lego-set-name-button");
    await userEvent.click(nameButton);
    expect(mockUseHistoryPush).toHaveBeenCalledWith(
      `/lego_sets/${mockLegoSet.id}`
    );
  });
  it("As a user, I expect the useHistory hook to call a push to the appropriate lego set id if I click on the lego image", async () => {
    render(
      <LegoSetCard
        legoSet={mockLegoSet}
        changeOwnedSetStatus={mockChangedOwnedStatus}
      />
    );
    const legoImage = screen.getByRole("img");
    await userEvent.click(legoImage);
    expect(mockUseHistoryPush).toHaveBeenCalledWith(
      `/lego_sets/${mockLegoSet.id}`
    );
  });
  it("As a user, I expect the toggleOwned function to be with the appropriate lego set id if I click on the toggle owned button", async () => {
    render(
      <LegoSetCard
        legoSet={mockLegoSet}
        changeOwnedSetStatus={mockChangedOwnedStatus}
      />
    );
    const toggleOwnedButton = screen.getByTestId(
      `lego-set-toggle-owned-button`
    );
    await userEvent.click(toggleOwnedButton);
    expect(mockChangedOwnedStatus).toHaveBeenCalledWith(mockLegoSet.id);
  });
  it("As a user, I expect to see the the remove from owned label on the toggleOwned button label when the set is owned", () => {
    render(
      <LegoSetCard
        legoSet={mockLegoSet}
        changeOwnedSetStatus={mockChangedOwnedStatus}
      />
    );
    const toggleOwnedButton = screen.getByTestId(
      `lego-set-toggle-owned-button`
    );
    expect(toggleOwnedButton).toHaveTextContent(textLabels.removeFromOwned);
  });
  it("As a user, I expect to see the the add to owned label on the toggleOwned button label when the set is not owned", () => {
    render(
      <LegoSetCard
        legoSet={mockLegoSetNotOwned}
        changeOwnedSetStatus={mockChangedOwnedStatus}
      />
    );
    const toggleOwnedButton = screen.getByTestId(
      `lego-set-toggle-owned-button`
    );
    expect(toggleOwnedButton).toHaveTextContent(textLabels.addToOwned);
  });
  it("As a user, I expect to see the set number, year, theme, total bricks, and owned status for a given lego set", () => {
    render(
      <LegoSetCard
        legoSet={mockLegoSet}
        changeOwnedSetStatus={mockChangedOwnedStatus}
      />
    );
    expect(screen.getByText(mockLegoSet.name)).toBeVisible();
    expect(screen.getByText(mockLegoSet.setNumber)).toBeVisible();
    expect(screen.getByText(mockLegoSet.year)).toBeVisible();
    expect(screen.getByText(mockLegoSet.totalBricks)).toBeVisible();
    expect(screen.getByText(textLabels.owned)).toBeVisible();
  });
});
