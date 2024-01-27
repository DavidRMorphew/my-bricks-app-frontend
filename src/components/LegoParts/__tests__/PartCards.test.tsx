import PartCards from "../PartCards";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
// import { textLabels } from "../../../constants";
// import { LegoSet } from "../../LegoSets/types";
import {
  mockLegoSet,
  mockPartsOfExploriensShip,
  mockSetPartSpecsOfExploriensShip,
} from "../../../mocks/mockLegoData";
// import type { Part } from "../types";
import { renderWithProviders } from "../../../utils/test-utils";
import { textLabels } from "../../../constants";

describe("Part Cards", () => {
  it("As a user, I expect to see the Loading display if loading is true", async () => {
    renderWithProviders(<PartCards set={mockLegoSet} />, {
      preloadedState: {
        loading: true,
        parts: mockPartsOfExploriensShip,
        setPartSpecs: mockSetPartSpecsOfExploriensShip,
      },
    });
    const LoadingComponentSpan = await screen.findByText(
      textLabels.loadingLabel
    );
    expect(LoadingComponentSpan).toBeVisible();
  });

  it("As a user, I expect to see the correct number of parts cards when there are parts and loading is false", async () => {
    renderWithProviders(<PartCards set={mockLegoSet} />, {
      preloadedState: {
        loading: false,
        parts: mockPartsOfExploriensShip,
        setPartSpecs: mockSetPartSpecsOfExploriensShip,
      },
    });
    const partCards = await screen.findAllByTestId(/part-card/);
    expect(partCards.length).toEqual(mockPartsOfExploriensShip.length);
  });

  it("As a user, I expect the part quantity to default to false if no part quantity is provided when there are parts and loading is false", async () => {
    const mockSetPartSpecsOfExplorienShipWithFirstPartSpecMissing = [
      ...mockSetPartSpecsOfExploriensShip.slice(1),
    ];
    renderWithProviders(<PartCards set={mockLegoSet} />, {
      preloadedState: {
        loading: false,
        parts: mockPartsOfExploriensShip,
        setPartSpecs: mockSetPartSpecsOfExplorienShipWithFirstPartSpecMissing,
      },
    });
    const firstPartId = mockPartsOfExploriensShip[0].id;
    const firstPartCardQuantity = await screen.findByTestId(
      `${firstPartId}-part-quantity`
    );
    expect(firstPartCardQuantity).toHaveTextContent("0");
  });
});
