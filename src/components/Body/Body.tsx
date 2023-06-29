import type { PropsWithChildren } from "react";
import { Navbar } from "../Navbar";

const Body = ({ children }: PropsWithChildren) => {
  // this is needed to fix the error of not scrolling to the top of the page when navigating to a new page

  return (
    <div>
      <Navbar />

      {children}
    </div>
  );
};

export default Body;
