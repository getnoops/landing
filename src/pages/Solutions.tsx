import React from "react";
import { Route, Routes } from "react-router-dom";
import CxO from "./CxO";
import SoftwareEngineer from "./SoftwareEngineer";

const Solutions = () => {
  return (
    <Routes>
      <Route path="/software-engineer" element={<SoftwareEngineer />} />
      <Route path="/cxo" element={<CxO />} />
    </Routes>
  );
};

export default Solutions;
