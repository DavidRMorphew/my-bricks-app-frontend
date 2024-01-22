import LegoSetShowCard from "./LegoSetShowCard";
import PartCards from "../LegoParts/PartCards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { LegoSet } from "./types";
import Button from "../Shared/ButtonComponent";
import { textLabels } from "../../constants";
import { useCallback } from "react";

interface LegoSetShowDisplayProps {
  legoSet: LegoSet;
  changeOwnedSetStatus: (legoSetId: number) => void;
}

const LegoSetShowDisplay = ({
  legoSet,
  changeOwnedSetStatus,
}: LegoSetShowDisplayProps) => {
  const handleChangeOwnedStatus = useCallback(
    (legoSetId: number) => changeOwnedSetStatus(legoSetId),
    [changeOwnedSetStatus]
  );

  return (
    <div className="flex-center">
      <Container fluid>
        <Row className="flex-center">
          <LegoSetShowCard legoSet={legoSet}>
            <Button
              data-testid="lego-set-toggle-owned-button"
              onClick={() => handleChangeOwnedStatus(legoSet.id)}
            >
              {legoSet.owned
                ? textLabels.removeFromOwned
                : textLabels.addToOwned}
            </Button>
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
