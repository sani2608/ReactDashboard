import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import "./index.css";

const root = document.getElementById("root");
ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  root
);
