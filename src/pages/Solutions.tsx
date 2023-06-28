import React from "react";
import { Route, Routes } from "react-router-dom";
import CxO from "./CxO";
import DevOps from "./DevOps";
import SoftwareEngineer from "./SoftwareEngineer";

const Solutions = () => {
  return (
    <Routes>
      <Route path="/software-engineer" element={<SoftwareEngineer />} />
      <Route path="/cxo" element={<CxO />} />
      <Route path="/devops" element={<DevOps />} />
    </Routes>
  );
};

export default Solutions;
