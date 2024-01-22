import { LegoSet } from "../components/LegoSets/types";
import { AppDispatch } from "../store/store";

interface LegoSetData {
  attributes: LegoSet;
}

const baseUrl = "http://localhost:3001/lego_sets";

export const addSets = (sets: LegoSet[]) => ({
  type: "ADD_SETS",
  payload: sets,
});

export const toggleOwned = (set: LegoSet) => ({
  type: "TOGGLED_OWNED_VALUE",
  payload: set,
});

export const fetchLegoSets = () => {
  return (dispatch: AppDispatch) => {
    dispatch({ type: "LOADING" });
    fetch(baseUrl)
      .then((resp) => resp.json())
      .then((data) => {
        const sets = data.data.map(
          (legoSet: LegoSetData) => legoSet.attributes
        );
        dispatch(addSets(sets));
        dispatch({ type: "LOADING_COMPLETE" });
      });
  };
};

export const changeOwnedSetStatus = (id: number) => {
  return (dispatch: AppDispatch) => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(id),
    };

    fetch(`${baseUrl}/${id}`, configObj)
      .then((resp) => resp.json())
      .then((data) => {
        const set = data.data.attributes;
        dispatch(toggleOwned(set));
      });
  };
};
