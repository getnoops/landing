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

import Testing from "./pages/Testing.mdx";
import HomeMDX from "./pages/Home.mdx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Body>
        <Routes>
          {/* App Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/homemdx" element={<HomeMDX />} />
          <Route path="/solutions/*" element={<Solutions />} />
          <Route path="/style" element={<StyleGuide />} />
          <Route path="/test" element={<Testing />} />
        </Routes>
      </Body>
    </BrowserRouter>
  );
};

export default AppRoutes;
