import * as React from "react";
const Grid = (props: any) => (
	<svg xmlns="http://www.w3.org/2000/svg" {...props}>
		<defs>
			<pattern
				id="gridPattern"
				width="33.667"
				height="33.667"
				patternUnits="userSpaceOnUse"
			>
				<path
					d="M0 0h66.667v66.667H0z"
					fill="none"
					stroke="hsla(0, 0%, 100%, 1.00)"
					strokeWidth={0.5}
				/>
			</pattern>
		</defs>

		<rect width="100%" height="100%" fill="url(#gridPattern)" />
	</svg>
);
export default Grid;
