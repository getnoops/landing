import * as React from "react";
const CurvedShape = (props: any) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 485 350"
		fill="none"
		className={props.className}
	>
		<path
			fill={props.fill}
			d={
				props.flipped
					? "M0 0H485V350C479.995 130.87 191.197 0 0 0Z"
					: "M485 350H0V0c5.005 219.13 293.803 350 485 350Z"
			}
		/>
	</svg>
);
export default CurvedShape;
