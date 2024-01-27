import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Loading from "../Shared/Loading";
import PotentialBuildSetCard from "./PotentialBuildSetCard";
import { connect } from "react-redux";
import type { LegoSet } from "../LegoSets/types";
import FilterInputComponent from "../FilterInputComponent";
import {
  type ChangeEventHandler,
  type MouseEventHandler,
  useCallback,
  useDeferredValue,
  useState,
} from "react";

interface PotentialBuildSetsResultsProps {
  loading: boolean;
  potentialBuilds: LegoSet[];
}

const PotentialBuildSetsResults = ({
  loading,
  potentialBuilds,
}: PotentialBuildSetsResultsProps) => {
  const [filterTerm, setFilterTerm] = useState("");

  const deferredFilterTerm = useDeferredValue(filterTerm);

  const handleFilterInputOnChange: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        setFilterTerm(e.target.value);
      },
      [setFilterTerm]
    );

  const handleFilterInputClearOnClick: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      setFilterTerm("");
    }, [setFilterTerm]);

  const filteredResults = potentialBuilds.filter((set: LegoSet) => {
    const regex = new RegExp(deferredFilterTerm as string, "i");
    return (
      regex.test(set.name) ||
      regex.test(set.themeName) ||
      regex.test(set.setNumber)
    );
  });
  return (
    <Container fluid className="container">
      {loading ? (
        <>
          <Loading />
          <h1 className="over-background">
            Please wait, as this could take a few seconds...<br></br>
            Please do not change owned sets while we search.
          </h1>
        </>
      ) : (
        filteredResults?.length && (
          <div>
            <h1 className="over-background">
              Potential Build Results: {filteredResults.length}
            </h1>
            <FilterInputComponent
              handleOnChange={handleFilterInputOnChange}
              handleOnClick={handleFilterInputClearOnClick}
              value={filterTerm}
            />
            <CardDeck>
              {filteredResults.map((potBuildSet) => (
                <PotentialBuildSetCard
                  key={`Pot-build-${potBuildSet.id}`}
                  set={potBuildSet}
                />
              ))}
            </CardDeck>
          </div>
        )
      )}
    </Container>
  );
};

export default connect(({ potentialBuilds, loading }) => ({
  potentialBuilds,
  loading,
}))(PotentialBuildSetsResults);
