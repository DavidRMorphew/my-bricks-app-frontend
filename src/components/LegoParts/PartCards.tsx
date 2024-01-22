import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import PartCard from "./PartCard";
import { Part, SetPartSpec } from "./types";
import { LegoSet } from "../LegoSets/types";
import { textLabels } from "../../constants";
import Loading from "../Shared/Loading";

interface PartCardsProps {
  parts: Part[];
  set: LegoSet;
  loading: boolean;
  setPartSpecs: SetPartSpec[];
}

const PartCards = ({ parts, setPartSpecs, set, loading }: PartCardsProps) => {
  const handlePartAndPartSpecLoading = () => {
    return !loading ? (
      <CardDeck>{renderEachPartCard()}</CardDeck>
    ) : (
      <Loading />
    );
  };

  const partQuantityOfPart = (part: Part) => {
    const setPartSpecOfPart = setPartSpecs.find(
      (setPartSpec: SetPartSpec) =>
        setPartSpec.legoSetId === set.id && setPartSpec.partId === part.id
    );
    return setPartSpecOfPart?.partQuantity ?? 0;
  };

  const renderEachPartCard = () =>
    parts.map((part) => (
      <PartCard
        key={`${set.id}—${part.id}`}
        part={part}
        partQuantity={partQuantityOfPart(part)}
      />
    ));

  return (
    <Container fluid className="container">
      <h1 className="over-background">Parts of Set</h1>
      {handlePartAndPartSpecLoading()}
    </Container>
  );
};

export default connect(({ parts, setPartSpecs, loading }) => ({
  parts,
  setPartSpecs,
  loading,
}))(PartCards);
