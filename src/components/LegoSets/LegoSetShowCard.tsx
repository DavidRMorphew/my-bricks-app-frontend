import Card from "react-bootstrap/Card";
import { textLabels } from "../../constants";
import type { LegoSetProps } from "./types";

const LegoSetShowCard = ({ children, legoSet }: LegoSetProps) => {
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
        {children}
      </Card.Body>
    </Card>
  );
};

export default LegoSetShowCard;
