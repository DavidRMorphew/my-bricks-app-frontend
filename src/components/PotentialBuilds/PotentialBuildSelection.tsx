import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "../Shared/ButtonComponent";
import { connect } from "react-redux";
import {
  fetchPotentialBuilds,
  type StrictParam,
} from "../../actions/potentialBuildActions";
import { useCallback } from "react";

interface PotentialBuildSelectionProps {
  loading: boolean;
  fetchPotentialBuilds: (isStrict: StrictParam) => void;
}

const PotentialBuildSelection = ({
  loading,
  fetchPotentialBuilds,
}: PotentialBuildSelectionProps) => {
  const fetchPotentialBuildsWithoutStrictColorMatching = useCallback(
    () => fetchPotentialBuilds("notStrict"),
    [fetchPotentialBuilds]
  );
  const fetchPotentialBuildsWithStrictColorMatching = useCallback(
    () => fetchPotentialBuilds("strict"),
    [fetchPotentialBuilds]
  );

  return (
    <Container fluid className="container over-background shaded-background">
      <br></br>
      <br></br>
      <h1>Potential Builds</h1>
      <h2>Find Out What You can Build With What You Own!</h2>
      <br></br>
      <h4>
        We will find all the sets in our database that you can build based on
        all the parts you already own.
      </h4>
      <br></br>
      <h1>Please Choose Below:</h1>
      <Row>
        <Col>
          <Button
            onClick={fetchPotentialBuildsWithoutStrictColorMatching}
            disabled={loading}
          >
            Find Potential Builds (Color Substitutions)
          </Button>
        </Col>
        <Col>
          <Button
            onClick={fetchPotentialBuildsWithStrictColorMatching}
            disabled={loading}
          >
            Find Potential Builds (strict color matching)
          </Button>
        </Col>
      </Row>
      <br></br>
      <Accordion>
        <Card className="on-shaded-background">
          <Card.Header>
            <Accordion.Toggle eventKey="0">
              <h4>CLICK HERE TO READ HOW IT WORKS</h4>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <h4>Parts of lego sets are filtered for matching, excluding: </h4>
              <h5>Minifigures and Figures,</h5> <h5>Accessories,</h5>{" "}
              <h5>Non-lego parts</h5>
              <br></br>
              <h4>
                Then we add up how many you have of each part and how many you
                need for each set to determine matches.
              </h4>
              <br></br>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default connect(({ loading }) => ({ loading }), {
  fetchPotentialBuilds,
})(PotentialBuildSelection);
