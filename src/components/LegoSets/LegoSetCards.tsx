import Button from "../Shared/ButtonComponent";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import LegoSetCard from "./LegoSetCard";
import Loading from "../Shared/Loading";
import { changeOwnedSetStatus } from "../../actions/legoSetActions";
import { connect } from "react-redux";
import { textLabels, titles } from "../../constants";
import { useCallback } from "react";
import type { LegoSet } from "./types";

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
      <h1 className="over-background">{titles.legoSets}{legoSets.length}</h1>
      {loading ? (
        <Loading />
      ) : (
        <CardDeck>
          {legoSets.map((set) => (
            <LegoSetCard key={set.id} legoSet={set}>
              {textLabels.ownedLabel}
              <strong>
                {set.owned ? textLabels.owned : textLabels.notOwned}
              </strong>
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

interface MapStateToPropsStateProps {
  legoSets: LegoSet[];
  loading: boolean;
}
interface MapStateToPropsOwnProps {
  filterTerm?: string;
  subSetTerm?: string;
}

const mapStateToProps = (
  { legoSets, loading }: MapStateToPropsStateProps,
  { filterTerm, subSetTerm }: MapStateToPropsOwnProps
) => {
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
      results = legoSets.filter((set: LegoSet) => set.owned);
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
