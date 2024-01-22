import { screen, render } from "@testing-library/react";
import { textLabels } from "../../../constants";
import { mockLegoSet } from "../../../mocks/mockLegoData";
import userEvent from "@testing-library/user-event";
import LegoSetShowCard from "../LegoSetShowCard";

const mockChangedOwnedStatus = jest.fn();

describe("LegoSetShowCard component", () => {
  it("As a user, I expect to see appropriate LegoSet information on page load", () => {
    render(
      <LegoSetShowCard
        legoSet={mockLegoSet}
        changeOwnedSetStatus={mockChangedOwnedStatus}
      />
    );

    expect(screen.getByText(mockLegoSet.year));
    expect(screen.getByText(mockLegoSet.themeName));
    expect(screen.getByText(mockLegoSet.totalBricks));
    expect(screen.getByText(textLabels.owned));
  });
  it("As a user, I expect the changedOwnedStatus function to be called when I click on  the button to changed the owned status", async () => {
    render(
      <LegoSetShowCard
        legoSet={mockLegoSet}
        changeOwnedSetStatus={mockChangedOwnedStatus}
      />
    );
    const changeOwnedStatusButton = screen.getByText(
      textLabels.removeFromOwned
    );
    await userEvent.click(changeOwnedStatusButton);
    expect(mockChangedOwnedStatus).toHaveBeenCalledWith(mockLegoSet.id);
  });
  it("As a user, I expect a new window tab to open to a given url if I click to see the building instructions", async () => {
    const windowOpenSpy = jest.spyOn(window, "open");
    windowOpenSpy.mockImplementation(jest.fn());
    render(
      <LegoSetShowCard
        legoSet={mockLegoSet}
        changeOwnedSetStatus={mockChangedOwnedStatus}
      />
    );
    const seeBuildingInstructionsButton = screen.getByText(
      textLabels.clickHereLabel
    );
    await userEvent.click(seeBuildingInstructionsButton);
    expect(windowOpenSpy).toHaveBeenCalledWith(
      mockLegoSet.instructionsUrl,
      "_blank",
      "noopener,noreferrer"
    );
    windowOpenSpy.mockRestore();
  });
});
