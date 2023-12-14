import LegoSetShowCard from "./LegoSetShowCard";
import PartCards from "../LegoParts/PartCards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { LegoSetProps } from "./types";

const LegoSetShowDisplay = ({
  legoSet,
  changeOwnedSetStatus,
}: LegoSetProps) => (
  <div className="flex-center">
    <Container fluid>
      <Row className="flex-center">
        <LegoSetShowCard
          legoSet={legoSet}
          changeOwnedSetStatus={changeOwnedSetStatus}
        />
      </Row>
      <Row>
        <PartCards set={legoSet} />
      </Row>
    </Container>
  </div>
);

export default LegoSetShowDisplay;
