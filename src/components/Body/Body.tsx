import React, { PropsWithChildren } from "react";
import { Navbar } from "../Navbar";

const Body = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />

      {children}
    </div>
  );
};

export default Body;
