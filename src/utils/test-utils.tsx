import React, { PropsWithChildren, ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore, type AppStore, type RootState } from "../store/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: ReactElement,
  { store = setupStore(), ...renderOptions }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<unknown>): JSX.Element => (
    <Provider store={store}>{children}</Provider>
  );
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
