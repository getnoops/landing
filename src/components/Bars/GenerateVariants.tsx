import React from "react";

interface StepsType {
	name: string;
	Icon: any;
	weight: number;
}

const timePerWeight = 1.25;

const GenerateVariants = (
	totalWeight: number,
	prevWidth: number,
	steps: StepsType[],
	i: number,
) => {
	let wWidth = 100 / (totalWeight / steps[i].weight) + prevWidth;
	let newWidth = wWidth;

	let wDuration = steps[i].weight * timePerWeight;

	let delay = i == 0 ? 0.5 : 0;

	let values = {
		// width: `${wWidth}%`,
		scaleX: `${wWidth}%`,
		transition: {
			duration: wDuration,
			// delay: delay,
		},
	};

	return {
		values,
		newWidth,
	};
};

export default GenerateVariants;
