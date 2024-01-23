import Button from "../Shared/ButtonComponent";
import Container from "react-bootstrap/Container";
import LegoSetShowCard from "./LegoSetShowCard";
import PartCards from "../LegoParts/PartCards";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import { textLabels } from "../../constants";
import { useCallback } from "react";
import type { LegoSet } from "./types";

interface LegoSetShowDisplayProps {
  legoSet: LegoSet;
  changeOwnedSetStatus: (legoSetId: number) => void;
}

const LegoSetShowDisplay = ({
  legoSet,
  changeOwnedSetStatus,
}: LegoSetShowDisplayProps) => {
  const handleChangeOwnedStatus = useCallback(
    (legoSetId: number) => () => changeOwnedSetStatus(legoSetId),
    [changeOwnedSetStatus]
  );

  return (
    <div className="flex-center">
      <Container fluid>
        <Row className="flex-center">
          <LegoSetShowCard legoSet={legoSet}>
            <Card.Text as="h2">
              {textLabels.ownedLabel}
              <strong>
                {legoSet.owned ? textLabels.owned : textLabels.notOwned}
              </strong>
            </Card.Text>
            <Card.Text as="h2">
              <Button
                data-testid="lego-set-toggle-owned-button"
                onClick={handleChangeOwnedStatus(legoSet.id)}
              >
                {legoSet.owned
                  ? textLabels.removeFromOwned
                  : textLabels.addToOwned}
              </Button>
            </Card.Text>
          </LegoSetShowCard>
        </Row>
        <Row>
          <PartCards set={legoSet} />
        </Row>
      </Container>
    </div>
  );
};

export default LegoSetShowDisplay;
