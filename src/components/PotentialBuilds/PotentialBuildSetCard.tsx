import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import { LegoSet } from "../LegoSets/types";
import { textLabels } from "../../constants";

interface PotentialBuildsSetCardProps {
  set: LegoSet;
}

const PotentialBuildSetCard = ({ set }: PotentialBuildsSetCardProps) => {
  const history = useHistory();

  const handleClick = () => history.push(`/lego_sets/${set.id}`);

  return (
    <div>
      <Card className="my-4 border-dark card-deck-set-card">
        <Card.Header as="h4">
          <button onClick={handleClick}>{set.name}</button>
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
