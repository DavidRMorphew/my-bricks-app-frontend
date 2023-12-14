import { LegoSet } from "../components/LegoSets/types";
import { PayloadAction } from "@reduxjs/toolkit";

const legoSetReducer = (
  state: LegoSet[] = [],
  action: PayloadAction<LegoSet[] | LegoSet>
): LegoSet[] => {
  switch (action.type) {
    case "ADD_SETS":
      return action.payload as LegoSet[];
    case "TOGGLED_OWNED_VALUE":
      return updateSetIfFound(state, action.payload as LegoSet);
    default:
      return state;
  }
};

const updateSetIfFound = (state: LegoSet[], payload: LegoSet) => {
  const setForUpdate = state.find((set) => set.id === payload.id);
  if (setForUpdate) {
    const updatedSet = { ...setForUpdate, owned: payload.owned };
    const indexOfSetForUpdate = state.indexOf(setForUpdate);
    return [
      ...state.slice(0, indexOfSetForUpdate),
      updatedSet,
      ...state.slice(indexOfSetForUpdate + 1),
    ];
  } else {
    return state;
  }
};

export default legoSetReducer;
