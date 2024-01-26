import * as React from "react";
const Triangle = (props: any) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 2"
		fill="none"
		className={props?.className}
	>
		<path fill={props?.fill} d="M20 2L-4.37121e-08 1.00002L20 0L20 2Z" />
	</svg>
);
export default Triangle;
