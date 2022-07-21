import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
