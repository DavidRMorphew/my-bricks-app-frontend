import {
  type ChangeEventHandler,
  type MouseEventHandler,
  useCallback,
  useDeferredValue,
  useState,
} from "react";
import { Switch, Route } from "react-router-dom";
import FilterInputComponent from "../components/FilterInputComponent";
import LegoSetCards from "../components/LegoSets/LegoSetCards";
import LegoSetShowContainer from "./LegoSetShowContainer";
import PotentialBuildSelection from "../components/PotentialBuilds/PotentialBuildSelection";
import PotentialBuildSetsResults from "../components/PotentialBuilds/PotentialBuildSetsResults";

const LegoSetsContainer = () => {
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

  return (
    <Switch>
      <Route exact path="/lego_sets">
        <FilterInputComponent
          handleOnChange={handleFilterInputOnChange}
          handleOnClick={handleFilterInputClearOnClick}
          value={filterTerm}
        />
        <LegoSetCards filterTerm={deferredFilterTerm} />
      </Route>
      <Route exact path="/lego_sets/owned">
        <LegoSetCards subSetTerm={"owned"} />
      </Route>
      <Route exact path="/lego_sets/potential_builds">
        <PotentialBuildSelection />
        <PotentialBuildSetsResults />
      </Route>
      <Route path="/lego_sets/:id">
        <LegoSetShowContainer />
      </Route>
    </Switch>
  );
};

export default LegoSetsContainer;
