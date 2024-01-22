import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import type { LegoSet, LegoSetProps } from "./types";
import { textLabels } from "../../constants";

type OnClickActionType = "toggleOwnedStatus" | "navigate";

const LegoSetCard = ({ legoSet, changeOwnedSetStatus }: LegoSetProps) => {
  const history = useHistory();

  const handleOnClick = (actionType: OnClickActionType) => {
    actionType === "toggleOwnedStatus"
      ? changeOwnedSetStatus(legoSet.id)
      : history.push(`/lego_sets/${legoSet.id}`);
  };

  const renderOwnedValue = (legoSet: LegoSet) => {
    return legoSet.owned ? textLabels.owned : textLabels.notOwned;
  };

  const ownButtonDisplay = (legoSet: LegoSet) => {
    return legoSet.owned ? textLabels.removeFromOwned : textLabels.addToOwned;
  };

  return (
    <div>
      <Card className="my-4 border-dark card-deck-set-card">
        <Card.Header as="h4">
          <button
            data-testid="lego-set-name-button"
            onClick={() => handleOnClick("navigate")}
          >
            {legoSet.name}
          </button>
        </Card.Header>
        <Card.Img
          onClick={() => handleOnClick("navigate")}
          src={legoSet.imageUrl}
          alt={`Set Image for ${legoSet.name}`}
        />
        <Card.Body>
          <Card.Title>
            <strong>{legoSet.setNumber}</strong>
          </Card.Title>
          <Card.Text>
            {textLabels.yearLabel}
            <strong>{legoSet.year}</strong>
            <br></br>
            {textLabels.themeLabel}
            <strong>{legoSet.themeName}</strong>
            <br></br>
            {textLabels.totalBricks}
            <strong>{legoSet.totalBricks}</strong>
            <br></br>
            {textLabels.ownedLabel}
            <strong>{renderOwnedValue(legoSet)}</strong>
          </Card.Text>
          <button
            data-testid="lego-set-toggle-owned-button"
            onClick={() => handleOnClick("toggleOwnedStatus")}
          >
            {ownButtonDisplay(legoSet)}
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LegoSetCard;
