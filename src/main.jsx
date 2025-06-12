import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Cinema } from "./Cinema";
import { Cinema2 } from "./Cinema2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Cinema></Cinema>
  </StrictMode>
);
