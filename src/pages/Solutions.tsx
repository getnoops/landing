import React from "react";
import { Route, Routes } from "react-router-dom";
import SoftwareEngineer from "./SoftwareEngineer";

const Solutions = () => {
  return (
    <Routes>
      <Route path="/software-engineer" element={<SoftwareEngineer />} />
    </Routes>
  );
};

export default Solutions;
