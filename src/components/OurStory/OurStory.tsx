import { cn } from "@site/src/lib/utils";

const timeline = [
	{
		title: "Pre 2023",
		description:
			"Years of mounting frustration with traditional DevOps practices",
	},
	{
		title: "Apr 2023",
		description:
			"No_Ops is founded from a desire to create a new vision for DevOps",
	},
	{
		title: "Sept 2023",
		description:
			"Development on our initial MVP is completed and tested, validating our vision",
	},
	{
		title: "Nov 2023",
		description:
			"Our scope is expanded to achieve a more refined second iteration of our product",
	},
	{
		title: "Feb 2024",
		description: "No_Ops Debuts and is officially launched to the public",
	},
	{
		title: "Post Launch",
		description:
			"Not slowing down, our focus is on implementing user feedback and iterating on our product",
	},
];

const TimelineSVG = () => {
	return (
		<svg
			aria-hidden="true"
			className="absolute top-0 h-full w-full overflow-clip"
		>
			<defs>
				<pattern id="a" width="6" height="6" patternUnits="userSpaceOnUse">
					<path fill="none" d="M0 0h6M0 8h6" className="stroke-noops-300/60" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#a)" />
		</svg>
	);
};

const OurStory = () => {
	return (
		<div>
			<div className="mx-auto max-w-7xl py-24">
				<div className="grid grid-cols-1 gap-8 px-4 lg:grid-cols-3 2xl:px-0">
					<div className="col-span-2">
						<h3 className="text-4xl font-bold tracking-tight text-noops-100">
							Our Story
						</h3>

						<p className="col-span-2 mt-2 text-noops-200">
							Like all good Ideas, Get No_Ops was born out of need. CTO and
							co-founder Chris Kolenko while working full time ran multiple
							projects on the side. As a result the burden of devops
							environments was huge.
							<br />
							<br />
							Chris started to build automation to remove this for himself. It
							wasn’t long until we figured out that this was a need everywhere.
							<br />
							<br />
							So we formed the company in April 2023 and have been growing
							interest ever since!
						</p>
					</div>

					<div className=" relative w-full space-y-1  overflow-x-clip border-l border-l-noops-400/60 ">
						<div className="absolute inset-y-1 left-0 w-1/2 -translate-x-1/2 rounded-full bg-gradient-radial from-noops-400/20 via-transparent via-80% blur"></div>
						<div className="absolute inset-y-1 left-0 w-1/2 -translate-x-1/2 rounded-full bg-gradient-radial from-noops-600/50 via-transparent via-50% blur"></div>

						{timeline.map((event, i) => (
							<div className="relative">
								<div className="absolute bottom-0 left-1 z-30 h-full w-2">
									<TimelineSVG />
								</div>

								<div className="relative ">
									<div
										className={cn(
											i == 0 && "pt-6",
											"flex items-start gap-x-2 pb-6",
										)}
									>
										<h6 className="relative m-0 shrink-0 pl-6 text-base font-normal text-noops-300">
											<div className="absolute  inset-y-1/2 left-1 z-50 h-0.5 w-3 bg-noops-400"></div>
											{event.title} -{" "}
										</h6>
										<p className="m-0  text-sm text-noops-400">
											{event.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurStory;
