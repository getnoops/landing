import React, { PropsWithChildren, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../Navbar";

const Body = ({ children }: PropsWithChildren) => {
  // this is needed to fix the error of not scrolling to the top of the page when navigating to a new page
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />

      {children}
    </div>
  );
};

export default Body;
