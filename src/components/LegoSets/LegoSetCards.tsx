import LegoSetCard from "./LegoSetCard";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import { connect } from "react-redux";
import { changeOwnedSetStatus } from "../../actions/legoSetActions";
import { LegoSet } from "./types";
import { textLabels } from "../../constants";
import Button from "../Shared/ButtonComponent";
import { useCallback } from "react";
import Loading from "../Shared/Loading";

interface LegoSetCardsProps {
  legoSets: LegoSet[];
  loading: boolean;
  changeOwnedSetStatus: (id: number) => void;
}

const LegoSetCards = ({
  legoSets,
  loading,
  changeOwnedSetStatus,
}: LegoSetCardsProps) => {
  const handleChangeOwnedStatus = useCallback(
    (legoSetId: number) => () => changeOwnedSetStatus(legoSetId),
    [changeOwnedSetStatus]
  );

  return (
    <Container fluid className="container">
      <h1 className="over-background">Lego Sets: {legoSets.length}</h1>
      {loading ? (
        <Loading />
      ) : (
        <CardDeck>
          {legoSets.map((set) => (
            <LegoSetCard key={set.id} legoSet={set}>
              <Button
                data-testid="lego-set-toggle-owned-button"
                onClick={handleChangeOwnedStatus(set.id)}
              >
                {set.owned ? textLabels.removeFromOwned : textLabels.addToOwned}
              </Button>
            </LegoSetCard>
          ))}
        </CardDeck>
      )}
    </Container>
  );
};

const mapStateToProps = (
  state: { legoSets: LegoSet[]; loading: boolean },
  ownProps: { filterTerm?: string; subSetTerm?: string }
) => {
  const { legoSets, loading } = state;
  const { filterTerm, subSetTerm } = ownProps;

  let results;
  switch (true) {
    case !!filterTerm:
      results = legoSets.filter((set: LegoSet) => {
        const regex = new RegExp(filterTerm as string, "i");
        return (
          regex.test(set.name) ||
          regex.test(set.themeName) ||
          regex.test(set.setNumber)
        );
      });
      break;
    case !!subSetTerm:
      results = legoSets.filter((set: LegoSet) => !!set.owned);
      break;
    default:
      results = legoSets;
  }

  return {
    legoSets: results,
    loading,
  };
};

export default connect(mapStateToProps, { changeOwnedSetStatus })(LegoSetCards);
