import { AppDispatch } from "..";
import { SetPartSpec } from "../components/LegoParts/types";
const baseUrl = "http://localhost:3001/lego_sets";

interface SetPartSpecData {
  attributes: SetPartSpec;
}

export const addSetPartSpecs = (setPartSpecs: SetPartSpec[]) => ({
  type: "ADD_SET_PART_SPECS",
  payload: setPartSpecs,
});

export const fetchSetPartSpecs = (setId: number) => {
  return (dispatch: AppDispatch) => {
    // dispatch({type: 'LOADING'}) // Removed to avoid problems of rendering in PartCards before parts and specs are added to store
    fetch(`${baseUrl}/${setId}/set_part_specs`)
      .then((resp) => resp.json())
      .then((data) => {
        const setPartSpecs = data.data.map(
          (setPartSpec: SetPartSpecData) => setPartSpec.attributes
        );
        dispatch(addSetPartSpecs(setPartSpecs));
        dispatch({ type: "LOADING_COMPLETE" });
      });
  };
};
