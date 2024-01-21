import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import { connect } from "react-redux";
import PotentialBuildSetCard from "./PotentialBuildSetCard";
import { LegoSet } from "../LegoSets/types";
import { textLabels } from "../../constants";

interface PotentialBuildSetsResultsProps {
  loading: boolean;
  potentialBuilds: LegoSet[];
}

const PotentialBuildSetsResults = ({
  loading,
  potentialBuilds,
}: PotentialBuildSetsResultsProps) => {
  const handleLegoSetLoading = () => {
    if (loading) {
      return (
        <h1 className="over-background">
          {textLabels.loadingLabel}Please wait, as this could take a few
          seconds...<br></br>
          Please do not change owned sets while we search.
        </h1>
      );
    } else if (potentialBuilds.length > 0) {
      return (
        <div>
          <h1 className="over-background">
            Potential Build Results: {potentialBuilds.length}
          </h1>
          <CardDeck>{renderPotentialBuildCards()}</CardDeck>
        </div>
      );
    }
  };

  const renderPotentialBuildCards = () =>
    potentialBuilds.map((potBuildSet) => (
      <PotentialBuildSetCard
        key={`Pot-build-${potBuildSet.id}`}
        set={potBuildSet}
      />
    ));

  return (
    <Container fluid className="container">
      {handleLegoSetLoading()}
    </Container>
  );
};

export default connect(({ potentialBuilds, loading }) => ({
  potentialBuilds,
  loading,
}))(PotentialBuildSetsResults);