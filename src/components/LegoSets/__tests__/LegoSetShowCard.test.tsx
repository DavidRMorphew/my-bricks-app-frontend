import { describe, expect, it, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import { textLabels } from "../../../constants";
import { mockLegoSet } from "../../../mocks/mockLegoData";
import userEvent from "@testing-library/user-event";
import LegoSetShowCard from "../LegoSetShowCard";
import Button from "../../Shared/ButtonComponent";

const mockChangedOwnedStatus = vi.fn();

describe("LegoSetShowCard component", () => {
  it("As a user, I expect to see appropriate LegoSet information on page load", () => {
    render(
      <LegoSetShowCard legoSet={mockLegoSet}>
        {textLabels.ownedLabel}
        <strong>
          {mockLegoSet.owned ? textLabels.owned : textLabels.notOwned}
        </strong>
        <Button
          data-testid="lego-set-toggle-owned-button"
          onClick={mockChangedOwnedStatus(mockLegoSet.id)}
        >
          {mockLegoSet.owned
            ? textLabels.removeFromOwned
            : textLabels.addToOwned}
        </Button>
      </LegoSetShowCard>
    );

    expect(screen.getByText(mockLegoSet.year));
    expect(screen.getByText(mockLegoSet.themeName));
    expect(screen.getByText(mockLegoSet.totalBricks));
    expect(screen.getByText(textLabels.owned));
  });
  it("As a user, I expect the changedOwnedStatus function to be called when I click on  the button to changed the owned status", async () => {
    render(
      <LegoSetShowCard legoSet={mockLegoSet}>
        {textLabels.ownedLabel}
        <strong>
          {mockLegoSet.owned ? textLabels.owned : textLabels.notOwned}
        </strong>
        <Button
          data-testid="lego-set-toggle-owned-button"
          onClick={mockChangedOwnedStatus(mockLegoSet.id)}
        >
          {mockLegoSet.owned
            ? textLabels.removeFromOwned
            : textLabels.addToOwned}
        </Button>
      </LegoSetShowCard>
    );
    const changeOwnedStatusButton = screen.getByText(
      textLabels.removeFromOwned
    );
    await userEvent.click(changeOwnedStatusButton);
    expect(mockChangedOwnedStatus).toHaveBeenCalledWith(mockLegoSet.id);
  });
  it("As a user, I expect a new window tab to open to a given url if I click to see the building instructions", async () => {
    const windowOpenSpy = vi.spyOn(window, "open");
    windowOpenSpy.mockImplementation(vi.fn());
    render(
      <LegoSetShowCard legoSet={mockLegoSet}>
        {textLabels.ownedLabel}
        <strong>
          {mockLegoSet.owned ? textLabels.owned : textLabels.notOwned}
        </strong>
        <Button
          data-testid="lego-set-toggle-owned-button"
          onClick={mockChangedOwnedStatus(mockLegoSet.id)}
        >
          {mockLegoSet.owned
            ? textLabels.removeFromOwned
            : textLabels.addToOwned}
        </Button>
      </LegoSetShowCard>
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
