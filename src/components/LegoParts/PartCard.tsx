import Card from "react-bootstrap/Card";
import { textLabels } from "../../constants";
import type { Part } from "./types";

interface PartCardProps {
  part: Part;
  partQuantity: number;
}

const PartCard = ({ part, partQuantity }: PartCardProps) => (
  <div>
    <Card className="my-4 border-dark card-deck-part-card">
      <Card.Header as="h4">
        {textLabels.partNumberLabel}
        {part.partNumber}
      </Card.Header>
      {part.imageUrl && (
        <Card.Img src={part.imageUrl} alt={`Part Image for ${part.name}`} />
      )}
      <Card.Body>
        <Card.Text data-testid={`${part.partNumber}-part-name-and-color`}>
          <strong>{textLabels.partNameLabel}</strong>
          {part.name}
          <br></br>
          <strong>{textLabels.partColorLabel}</strong>
          {part.color}
        </Card.Text>
        <Card.Text data-testid={`${part.partNumber}-part-quantity`}>
          <strong>{textLabels.partQuantityLabel}</strong>
          {partQuantity}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default PartCard;
