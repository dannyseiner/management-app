import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import NavbarComponent from "./NavbarComponent";
// Screens
import HomePage from "../screens/HomePage";
function Router() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;
