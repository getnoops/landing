const values = [
	{
		name: "Listen first culture",
		description:
			"We prioritise understanding and valuing every voice, ensuring that all opinions shape our collective direction.",
	},
	{
		name: "Trust & Accountability",
		description:
			"Fostering a reliable environment where everyone takes responsibility for their actions, building a foundation of mutual respect.",
	},
	{
		name: "Mental & Physical Health",
		description:
			"Championing holistic well-being by supporting both mental and physical health, ensuring our team thrives in all aspects of life.",
	},
	{
		name: "Build & support talent",
		description:
			"Committed to nurturing individual strengths, we invest in continuous learning and growth opportunities for all.",
	},
	{
		name: "Inclusion & Empathy",
		description:
			"Creating a diverse and welcoming space where empathy guides our interactions, embracing the richness of varied perspectives.",
	},
	{
		name: "Create a Fun & Safe Workplace",
		description:
			"Dedicated to cultivating a joyful and secure environment, where creativity flourishes and everyone feels at home.",
	},
];

const Values = () => {
	return (
		<div>
			<div className="mx-auto max-w-7xl py-24">
				<div className="px-4 2xl:px-0">
					<h3 className="text-4xl font-bold tracking-tight text-noops-100">
						Our Values
					</h3>
					<p className="mt-2 text-noops-200">
						Our values are simple, we believe in inclusivity and accountability.
						Everyone’s opinion is heard and respected. We categorise as follows
					</p>
				</div>

				<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 px-4 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 2xl:px-0">
					{values.map((feature) => (
						<div
							key={feature.name}
							className="rounded-xl border-t border-t-noops-300/10 bg-noops-300/5 p-4 shadow shadow-noops-300/5"
						>
							<dt className="font-semibold text-noops-200">{feature.name}</dt>
							<dd className="ml-0 mt-1 text-noops-300">
								{feature.description}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
};

export default Values;
