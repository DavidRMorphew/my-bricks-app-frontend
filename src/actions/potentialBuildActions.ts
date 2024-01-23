import { AppDispatch } from "../store/store";
import { LegoSet } from "../components/LegoSets/types";
const baseUrl = "http://localhost:3001/lego_sets/potential_builds";

interface PotentialBuildData {
  attributes: LegoSet;
}

export type StrictParam = "strict" | "notStrict";

export const addPotentialBuilds = (searchResults: LegoSet[]) => ({
  type: "ADD_POTENTIAL_BUILDS",
  payload: searchResults,
});

export const fetchPotentialBuilds = (strictParam: StrictParam) => {
  return (dispatch: AppDispatch) => {
    dispatch({ type: "LOADING" });
    fetch(`${baseUrl}/${strictParam}`)
      .then((resp) => resp.json())
      .then((data) => {
        const searchResults = data.data.map(
          (potBuildSet: PotentialBuildData) => potBuildSet.attributes
        );
        dispatch(addPotentialBuilds(searchResults));
        dispatch({ type: "LOADING_COMPLETE" });
      });
  };
};
