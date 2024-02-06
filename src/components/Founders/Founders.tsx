const people = [
	{
		name: "Sam Hunt",
		role: "CEO & Founder",
		imageUrl: "/sam.webp",
	},
	{
		name: "Chris Kolenko",
		role: "CTO & Founder",
		imageUrl: "/chris.webp",
	},
];

const Founders = () => {
	return (
		<div>
			<div className="mx-auto max-w-7xl py-24">
				<div className="px-4 2xl:px-0">
					<h3 className="text-4xl font-bold tracking-tight text-noops-100">
						Our Founders
					</h3>
					<p className="mt-2 text-noops-200">
						Meet the founders of No_Ops, who are passionate about making
						developers' lives easier and reducing the burden of devops.
					</p>
				</div>

				<ul
					role="list"
					className="mx-auto  mt-20 grid max-w-2xl grid-cols-2 gap-8 text-center lg:mx-auto lg:max-w-4xl"
				>
					{people.map((person) => (
						<li key={person.name} className="list-none">
							<div className="relative mx-auto h-24 w-24 overflow-clip rounded-full">
								<img className="grayscale" src={person.imageUrl} alt="" />
								<div className="absolute inset-0 bg-noops-500  mix-blend-overlay"></div>
							</div>
							<h3 className="mb-0 mt-6 text-base font-semibold leading-7 tracking-tight text-noops-400">
								{person.name}
							</h3>
							<p className="my-0 text-sm leading-6 text-noops-200">
								{person.role}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Founders;
