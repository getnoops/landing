import classNames from "classnames";
import * as React from "react";
const Path = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
      className="overflow-visible"
    >
      <path
        stroke="#5e4a83"
        strokeOpacity={1}
        strokeWidth={0.5}
        d="M0 0H3.6C5.84021 0 6.96032 0 7.81596 0.43597C8.56861 0.81947 9.18053 1.43139 9.56403 2.18404C10 3.03968 10 4.15979 10 6.4V20"
      />
      <path
        stroke="#5e4a83"
        strokeOpacity={1}
        strokeWidth={0.5}
        d="M20 0H16.4C14.1598 0 13.0397 0 12.184 0.43597C11.4314 0.81947 10.8195 1.43139 10.436 2.18404C10 3.03968 10 4.15979 10 6.4V20"
      />
    </svg>
  );
};
export default Path;
