import Button from "../Shared/ButtonComponent";
import Card from "react-bootstrap/Card";
import { textLabels } from "../../constants";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import type { LegoSet } from "../LegoSets/types";

interface PotentialBuildsSetCardProps {
  set: LegoSet;
}

const PotentialBuildSetCard = ({ set }: PotentialBuildsSetCardProps) => {
  const history = useHistory();

  const navigateToSelectedSetShowView = useCallback(
    () => history.push(`/lego_sets/${set.id}`),
    [set.id, history]
  );

  return (
    <div>
      <Card className="my-4 border-dark card-deck-set-card">
        <Card.Header as="h4">
          <Button onClick={navigateToSelectedSetShowView}>{set.name}</Button>
        </Card.Header>
        <Card.Img src={set.imageUrl} />
        <Card.Body>
          <Card.Title>
            <strong>{set.setNumber}</strong>
          </Card.Title>
          <Card.Text>
            {textLabels.yearLabel}
            <strong>{set.year}</strong>
            <br></br>
            {textLabels.themeLabel}
            <strong>{set.themeName}</strong>
            <br></br>
            {textLabels.totalBricks}
            <strong>{set.totalBricks}</strong>
            <br></br>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PotentialBuildSetCard;
