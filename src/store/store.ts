import { rootReducer } from "../reducers/index";
import { configureStore } from "@reduxjs/toolkit";

// TODO: address TS error with reducer type implementation
export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    //@ts-expect-error @ts-ignore
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
