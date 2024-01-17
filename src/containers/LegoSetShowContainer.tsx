import { connect } from "react-redux";
import { changeOwnedSetStatus } from "../actions/legoSetActions";
import { fetchPartsOfSet } from "../actions/partActions";
import LegoSetShowDisplay from "../components/LegoSets/LegoSetShowDisplay";
import NotFoundErrorDisplay from "../components/NotFoundErrorDisplay";
import { LegoSet } from "../components/LegoSets/types";
import { useParams } from "react-router-dom";

interface LegoSetShowContainerProps {
  legoSets: LegoSet[];
  changeOwnedSetStatus: (id: number) => void;
  fetchPartsOfSet: (id: number) => void;
}

interface Params {
  id: string;
}

const LegoSetShowContainer = ({
  legoSets,
  changeOwnedSetStatus,
  fetchPartsOfSet,
}: LegoSetShowContainerProps) => {
  const { id } = useParams<Params>();
  const legoSetId = parseInt(id);
  const legoSet = legoSets.find((set) => set.id === legoSetId);

  const renderLegoSetShowDisplay = () => {
    if (legoSetId && legoSet) {
      fetchPartsOfSet(legoSetId);
      return (
        <LegoSetShowDisplay
          legoSet={legoSet}
          changeOwnedSetStatus={changeOwnedSetStatus}
        />
      );
    } else {
      return <NotFoundErrorDisplay />;
    }
  };

  return <div>{renderLegoSetShowDisplay()}</div>;
};

export default connect(({ legoSets }) => ({ legoSets }), {
  changeOwnedSetStatus,
  fetchPartsOfSet,
})(LegoSetShowContainer);
