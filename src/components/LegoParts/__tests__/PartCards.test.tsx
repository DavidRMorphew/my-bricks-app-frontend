import PartCards from "../PartCards";
import { screen, render } from "@testing-library/react";
import { textLabels } from "../../../constants";
import { LegoSet } from "../../LegoSets/types";
import {
  mockLegoSet,
  mockPartsOfExploriensShip,
  mockSetPartSpecsOfExploriensShip,
} from "../../../mocks/mockLegoData";
import type { Part } from "../types";

describe.skip("Part Cards", () => {
  it("As a user, I expect to see the Loading display if loading is true", () => {
    render(<PartCards set={mockLegoSet} />);
  });
});
