import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { rootReducer } from "./reducers/index";
import { configureStore } from "@reduxjs/toolkit";

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

const store = setupStore();
const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Move to separate file with store
export type AppDispatch = typeof store.dispatch;

reportWebVitals();
