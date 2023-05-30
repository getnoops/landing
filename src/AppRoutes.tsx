import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Body } from "./components";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import StyleGuide from "./pages/StyleGuide";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Body>
        <Routes>
          {/* App Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/solutions/*" element={<Solutions />} />
          <Route path="/style" element={<StyleGuide />} />
        </Routes>
      </Body>
    </BrowserRouter>
  );
};

export default AppRoutes;
