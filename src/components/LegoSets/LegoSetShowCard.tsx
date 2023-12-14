import Card from "react-bootstrap/Card";
import { LegoSetProps } from "./types";
import { MouseEventHandler } from "react";

const LegoSetShowCard = ({ legoSet, changeOwnedSetStatus }: LegoSetProps) => {
  const handleOnClick: MouseEventHandler<HTMLButtonElement> = () => {
    changeOwnedSetStatus(legoSet.id);
  };

  const renderOwnedValue = () => {
    return !!legoSet.owned ? "Owned" : "Not Owned";
  };

  const ownButtonDisplay = () => {
    return !!legoSet.owned ? "Remove from Owned" : "Add to Owned";
  };

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
          Year: <strong>{legoSet.year}</strong>
        </Card.Text>
        <Card.Text as="h2">
          Theme: <strong>{legoSet.themeName}</strong>
        </Card.Text>
        <Card.Text as="h2">
          Building Instructions:
          <button
            onClick={() =>
              openInstructionsPageInNewTab(legoSet.instructionsUrl)
            }
          >
            Click Here
          </button>
        </Card.Text>
        <Card.Text as="h2">
          Total Bricks: <strong>{legoSet.totalBricks}</strong>
        </Card.Text>
        <Card.Text as="h2">
          Owned: <strong>{renderOwnedValue()}</strong>
        </Card.Text>
        <Card.Text as="h2">
          <button onClick={handleOnClick}>{ownButtonDisplay()}</button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LegoSetShowCard;
