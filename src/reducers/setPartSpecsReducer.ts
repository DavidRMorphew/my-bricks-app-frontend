import { PayloadAction } from "@reduxjs/toolkit";
import { SetPartSpec } from "../components/LegoParts/types";

const setPartSpecsReducer = (
  state = [],
  action: PayloadAction<SetPartSpec[]>
) => {
  switch (action.type) {
    case "ADD_SET_PART_SPECS":
      return action.payload;
    default:
      return state;
  }
};

export default setPartSpecsReducer;
