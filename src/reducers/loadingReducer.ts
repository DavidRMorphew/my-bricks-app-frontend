import { PayloadAction } from "@reduxjs/toolkit";

const loadingReducer = (state = false, action: PayloadAction<boolean>) => {
  switch (action.type) {
    case "LOADING":
      return true;
    case "LOADING_COMPLETE":
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
