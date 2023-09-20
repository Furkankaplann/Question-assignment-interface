import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
