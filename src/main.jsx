import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { Theme } from "@radix-ui/themes";
import BreakpointPip from "./components/dev/BreakpointPip";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <App />
      <BreakpointPip />
    </Theme>
  </React.StrictMode>
);
