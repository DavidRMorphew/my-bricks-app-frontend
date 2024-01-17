import { ChangeEventHandler, MouseEventHandler, useDeferredValue } from "react";
import { useState } from "react";
import FilterInputComponent from "../components/FilterInputComponent";
import LegoSetCards from "../components/LegoSets/LegoSetCards";
import LegoSetShowContainer from "./LegoSetShowContainer";
import PotentialBuildSelection from "../components/PotentialBuilds/PotentialBuildSelection";
import PotentialBuildSetsResults from "../components/PotentialBuilds/PotentialBuildSetsResults";
import { Switch, Route } from "react-router-dom";

const LegoSetsContainer = () => {
  const [filterTerm, setFilterTerm] = useState("");

  const deferredFilterTerm = useDeferredValue(filterTerm);

  const handleFilterInputOnChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setFilterTerm(e.target.value);
  };

  const handleFilterInputClearOnClick: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setFilterTerm("");
  };

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
