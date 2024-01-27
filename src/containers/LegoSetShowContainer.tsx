import LegoSetShowDisplay from "../components/LegoSets/LegoSetShowDisplay";
import NotFoundErrorDisplay from "../components/NotFoundErrorDisplay";
import { connect } from "react-redux";
import { changeOwnedSetStatus } from "../actions/legoSetActions";
import { fetchPartsOfSet } from "../actions/partActions";
import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import type { LegoSet } from "../components/LegoSets/types";
import type { SetPartSpec } from "../components/LegoParts/types";

interface LegoSetShowContainerProps {
  legoSets: LegoSet[];
  changeOwnedSetStatus: (id: number) => void;
  fetchPartsOfSet: (id: number) => void;
  setPartSpecs: SetPartSpec[];
}

interface Params {
  id: string;
}

const LegoSetShowContainer = ({
  legoSets,
  changeOwnedSetStatus,
  fetchPartsOfSet,
  setPartSpecs,
}: LegoSetShowContainerProps) => {
  const { id } = useParams<Params>();
  const legoSetId = useMemo(() => parseInt(id), [id]);
  const legoSet = useMemo(
    () => legoSets.find((set) => set.id === legoSetId),
    [legoSets, legoSetId]
  );

  const areLegoSetPartsAndSpecsAlreadyLoaded = useMemo(
    () => setPartSpecs?.[0]?.legoSetId === legoSetId,
    [legoSetId, setPartSpecs]
  );

  useEffect(() => {
    if (legoSet && !areLegoSetPartsAndSpecsAlreadyLoaded) {
      fetchPartsOfSet(legoSetId);
    }
  }, [
    legoSetId,
    fetchPartsOfSet,
    areLegoSetPartsAndSpecsAlreadyLoaded,
    legoSet,
  ]);

  return (
    <div>
      {legoSet ? (
        <LegoSetShowDisplay
          legoSet={legoSet}
          changeOwnedSetStatus={changeOwnedSetStatus}
        />
      ) : (
        <NotFoundErrorDisplay />
      )}
    </div>
  );
};

export default connect(
  ({ legoSets, setPartSpecs }) => ({ legoSets, setPartSpecs }),
  {
    changeOwnedSetStatus,
    fetchPartsOfSet,
  }
)(LegoSetShowContainer);
