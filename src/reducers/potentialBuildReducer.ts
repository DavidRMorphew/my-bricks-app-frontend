import { PayloadAction } from "@reduxjs/toolkit";
import { LegoSet } from "../components/LegoSets/types";

const potentialBuildReducer = (
  state = [],
  action: PayloadAction<LegoSet[]>
) => {
  switch (action.type) {
    case "ADD_POTENTIAL_BUILDS":
      return action.payload;
    case "TOGGLED_OWNED_VALUE":
      return [];
    default:
      return state;
  }
};

export default potentialBuildReducer;
