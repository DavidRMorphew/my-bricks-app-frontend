import PartCard from "../PartCard";
import { screen, render } from "@testing-library/react";
import { textLabels } from "../../../constants";
import type { Part } from "../types";

const mockPart: Part = {
  partNumber: "4276b",
  name: "Hinge Plate 1 x 2 with 2 Fingers and Hollow Studs",
  color: "Black",
  imageUrl: "https://cdn.rebrickable.com/media/parts/ldraw/0/4276b.png",
  id: 311,
};

describe("PartCard", () => {
  it("As a user, I expect to see the correct name and color of the part type in the set displayed", () => {
    const mockPartQuantity = 5;
    render(<PartCard part={mockPart} partQuantity={mockPartQuantity} />);

    const nameAndColorText = screen.getByTestId(
      `${mockPart.partNumber}-part-name-and-color`
    );
    expect(nameAndColorText).toHaveTextContent(
      `${textLabels.partNameLabel}${mockPart.name}`
    );
    expect(nameAndColorText).toHaveTextContent(
      `${textLabels.partColorLabel}${mockPart.color}`
    );
  });
  it("As a user, I expect to see the correct number of parts in the set displayed", () => {
    const mockPartQuantity = 3;
    render(<PartCard part={mockPart} partQuantity={mockPartQuantity} />);

    expect(
      screen.getByTestId(`${mockPart.partNumber}-part-quantity`)
    ).toHaveTextContent(`${textLabels.partQuantityLabel}${mockPartQuantity}`);
  });
});
