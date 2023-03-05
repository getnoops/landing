import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* App Pages */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
