import Card from "react-bootstrap/Card";
import { LegoSetProps } from "./types";
import { useMemo } from "react";
import { textLabels } from "../../constants";

const LegoSetShowCard = ({ children, legoSet }: LegoSetProps) => {
  const ownedValueDisplay = useMemo(
    () => (legoSet.owned ? textLabels.owned : textLabels.notOwned),
    [legoSet.owned]
  );

  const openInstructionsPageInNewTab = (instructionsUrl: string) => {
    const newTab = window.open(
      instructionsUrl,
      "_blank",
      "noopener,noreferrer"
    );
    if (newTab) {
      newTab.opener = null;
    }
  };

  return (
    <Card className="my-4 border-dark legoSet-show-card">
      <Card.Header as="h1">{legoSet.name}</Card.Header>
      <Card.Img src={legoSet.imageUrl} alt={`Set Image for ${legoSet.name}`} />
      <Card.Body>
        <Card.Text as="h2">
          {textLabels.yearLabel}
          <strong>{legoSet.year}</strong>
        </Card.Text>
        <Card.Text as="h2">
          {textLabels.themeLabel}
          <strong>{legoSet.themeName}</strong>
        </Card.Text>
        <Card.Text as="h2">
          {textLabels.buildingInstructionsLabel}
          <button
            onClick={() =>
              openInstructionsPageInNewTab(legoSet.instructionsUrl)
            }
          >
            {textLabels.clickHereLabel}
          </button>
        </Card.Text>
        <Card.Text as="h2">
          {textLabels.totalBricks}
          <strong>{legoSet.totalBricks}</strong>
        </Card.Text>
        <Card.Text as="h2">
          {textLabels.ownedLabel}
          <strong>{ownedValueDisplay}</strong>
        </Card.Text>
        <Card.Text as="h2">{children}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LegoSetShowCard;
