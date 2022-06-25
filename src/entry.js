import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

import "./entry.css";

const root = createRoot(document.getElementById("app"));
root.render(<App />);
