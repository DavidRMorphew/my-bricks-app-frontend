import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import PartCard from "./PartCard";
import Loading from "../Shared/Loading";
import { connect } from "react-redux";
import { titles } from "../../constants";
import type { Part, SetPartSpec } from "./types";
import type { LegoSet } from "../LegoSets/types";

interface PartCardsProps {
  parts: Part[];
  set: LegoSet;
  loading: boolean;
  setPartSpecs: SetPartSpec[];
}

const PartCards = ({ parts, setPartSpecs, set, loading }: PartCardsProps) => {
  const partQuantityOfPart = (part: Part) => {
    const setPartSpecOfPart = setPartSpecs.find(
      (setPartSpec: SetPartSpec) =>
        setPartSpec.legoSetId === set.id && setPartSpec.partId === part.id
    );
    return setPartSpecOfPart?.partQuantity ?? 0;
  };

  const renderPartCards = () =>
    parts.map((part) => (
      <PartCard
        key={`${set.id}—${part.id}`}
        part={part}
        partQuantity={partQuantityOfPart(part)}
      />
    ));

  return (
    <Container fluid className="container">
      <h1 className="over-background">{titles.parts}</h1>
      {loading ? <Loading /> : <CardDeck>{renderPartCards()}</CardDeck>}
    </Container>
  );
};

export default connect(({ parts, setPartSpecs, loading }) => ({
  parts,
  setPartSpecs,
  loading,
}))(PartCards);
