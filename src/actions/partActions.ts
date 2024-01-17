import { fetchSetPartSpecs } from "./setPartSpecsActions";
import { AppDispatch } from "..";
import { Part } from "../components/LegoParts/types";
const baseUrl = "http://localhost:3001/lego_sets";

interface PartData {
  attributes: Part;
}

export const addParts = (parts: Part[]) => ({
  type: "ADD_PARTS",
  payload: parts,
});

export const fetchPartsOfSet = (setId: number) => {
  return (dispatch: AppDispatch) => {
    dispatch({ type: "LOADING" });
    fetch(`${baseUrl}/${setId}/parts`)
      .then((resp) => resp.json())
      .then((data) => {
        const parts = data.data.map((part: PartData) => part.attributes);
        dispatch(addParts(parts));
        dispatch(fetchSetPartSpecs(setId));
        // dispatch({type: 'LOADING_COMPLETE'}) // Removed to avoid problems of rendering in PartCards before parts and specs are added to store
      });
  };
};
