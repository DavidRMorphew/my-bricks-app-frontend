import { PayloadAction } from "@reduxjs/toolkit";
import { Part } from "../components/LegoParts/types";

const partReducer = (state = [], action: PayloadAction<Part[]>) => {
  switch (action.type) {
    case "ADD_PARTS":
      return action.payload;
    default:
      return state;
  }
};

export default partReducer;
