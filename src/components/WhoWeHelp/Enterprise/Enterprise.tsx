import React from "react";

import { CodeBracketIcon, ScaleIcon } from "@heroicons/react/20/solid";
import {
	BoltIcon,
	CurrencyDollarIcon,
	MagnifyingGlassCircleIcon,
	ServerStackIcon,
} from "@heroicons/react/24/solid";
import {
	BriefcaseIcon,
	CubeTransparentIcon,
	MapIcon,
} from "@heroicons/react/24/outline";

// Enterprise
// Losing control for your DevOps environments
// Costs increasing month after month
// Teams stuck writing Infrastructure type of code rather than code that produces product enhancements

const features = [
	{
		name: "Losing control of your DevOps environments.",
		description:
			"At scale, it's hard to keep track of all the environments you have running.",
		Icon: MagnifyingGlassCircleIcon,
	},
	{
		name: "Costs increasing month after month.",
		description:
			"Whether its inefficiency or forgotten resources, at scale, it's bound to happen.",
		Icon: CurrencyDollarIcon,
	},
	{
		name: "Teams bogged down from infrastructure.",
		description:
			"Your team spends more time on infrastructure than on product enhancements.",
		Icon: ScaleIcon,
	},
	{
		name: "Security and compliance troubles.",
		description:
			"Unable to track and enforce security and compliance policies.",
		Icon: CodeBracketIcon,
	},
];

const Enterprise = () => {
	return (
		<div
			id="enterprise"
			className="relative isolate overflow-hidden px-4 py-16 sm:py-32"
		>
			<div className="relative mx-auto  max-w-6xl rounded-3xl border border-accent/20 bg-noops-1000 p-6">
				<div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/10 via-transparent to-accent/10"></div>
				<BriefcaseIcon className="pointer-events-none absolute left-1/2 top-1/2 h-96 -translate-x-1/2 -translate-y-1/2 text-noops-400/[2%]" />

				<div className="pointer-events-none absolute -inset-1 mx-auto rounded-3xl border-4 border-noops-400 blur-xl"></div>

				<div className="mx-auto max-w-2xl lg:mx-0">
					<p className="text-lg font-semibold leading-8 tracking-tight text-noops-300">
						Enterprise
					</p>
					<h2 className="mt-4 text-4xl font-bold tracking-tight text-noops-100">
						Pains at scale, solved
					</h2>
				</div>

				<div className="mx-auto mt-8 max-w-6xl lg:mx-0 ">
					<div className=" text-base leading-7 text-noops-200 lg:col-span-7">
						<p>At this scale, you're probably facing some of these problems.</p>

						<ul role="list" className="mt-8 grid gap-8 sm:grid-cols-2">
							{features.map((feature) => (
								<li className="flex gap-x-3">
									<feature.Icon
										className="mt-1 h-6 w-6 flex-none text-noops-400"
										aria-hidden="true"
									/>

									<p>
										<span className="font-semibold text-noops-400">
											{feature.name}
										</span>{" "}
										<br />
										<span className="text-noops-200">
											{feature.description}
										</span>
									</p>
								</li>
							))}
						</ul>
						<p className="mt-8">
							This is a nightmare, and unfortunately a reality for many products
							and teams at scale. No_Ops has been built to help teams at scale
							rest easy.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Enterprise;
