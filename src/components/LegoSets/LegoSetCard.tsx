import Button from "../Shared/ButtonComponent";
import Card from "react-bootstrap/Card";
import { textLabels } from "../../constants";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import type { LegoSetProps } from "./types";

const LegoSetCard = ({ children, legoSet }: LegoSetProps) => {
  const history = useHistory();

  const navigateToSelectedSetShowView = useCallback(
    () => history.push(`/lego_sets/${legoSet.id}`),
    [legoSet.id, history]
  );

  return (
    <div>
      <Card className="my-4 border-dark card-deck-set-card">
        <Card.Header as="h4">
          <Button
            data-testid="lego-set-name-button"
            onClick={navigateToSelectedSetShowView}
          >
            {legoSet.name}
          </Button>
        </Card.Header>
        <Card.Img
          onClick={navigateToSelectedSetShowView}
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
            {children}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LegoSetCard;
