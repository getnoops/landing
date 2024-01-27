import { CubeIcon } from "@heroicons/react/24/outline";
import {
	LockClosedIcon,
	MagnifyingGlassCircleIcon,
	Square3Stack3DIcon,
} from "@heroicons/react/24/solid";

// Small-Medium-Business
// Struggling to find good devops people
// Need new environments to keep development going forward
// Security was an afterthought and it's catching up to you

const features = [
	{
		name: "Struggling to find good DevOps people.",
		description:
			"Whether it's a lack of talent or budget, it's hard to find good DevOps people.",
		Icon: MagnifyingGlassCircleIcon,
	},
	{
		name: "Need new environments.",
		description:
			"To keep development going forward, you need new environments.",
		Icon: Square3Stack3DIcon,
	},
	{
		name: "Security was an afterthought.",
		description:
			"It's okay, you spent your time building a great product. Now it's time to secure it.",
		Icon: LockClosedIcon,
	},
];

const MediumLargeBusiness = () => {
	return (
		<div
			id="medium-large-business"
			className="relative isolate overflow-hidden px-4 py-16 sm:py-32"
		>
			<div className="relative mx-auto  max-w-6xl rounded-3xl border border-accent/20 bg-noops-1000 p-6">
				<div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/10 via-transparent to-accent/10"></div>
				<CubeIcon className="pointer-events-none absolute left-1/2 top-1/2 h-96 -translate-x-1/2 -translate-y-1/2 text-noops-400/[2%]" />

				<div className="pointer-events-none absolute -inset-1 mx-auto rounded-3xl border-4 border-noops-400 blur-xl"></div>

				<div className="mx-auto max-w-2xl lg:mx-0">
					<p className="text-lg font-semibold leading-8 tracking-tight text-noops-300">
						Medium / Large Business
					</p>
					<h2 className="mt-4 text-4xl font-bold tracking-tight text-noops-100">
						Taking the next step
					</h2>
				</div>

				<div className="mx-auto mt-8 max-w-6xl lg:mx-0 ">
					<div className=" text-base leading-7 text-noops-200 lg:col-span-7">
						<p>
							Struggling to take your product to the next level? You're not in
							it alone, many companies struggle with these issues.
						</p>

						<ul role="list" className="mt-8 grid gap-8 p-0 sm:grid-cols-2">
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
							Finally, you can take that next step with confidence. We'll help
							you get there.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MediumLargeBusiness;
