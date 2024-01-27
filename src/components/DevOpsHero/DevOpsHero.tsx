import { CircleStackIcon, ServerIcon } from "@heroicons/react/24/outline";

const StarryBackground: React.FC = () => {
	const stars = Array.from({ length: 100 }, () => ({
		cx: `${Math.random() * 100}%`,
		cy: `${Math.random() * 100}%`,
		r: Math.random(),
	}));

	return (
		<svg
			className="h-full w-full object-cover"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="100%" height="100%" fill="transparent" />
			<g fill="white">
				{stars.map((star, i) => (
					<circle
						className="animate-twinkle"
						key={i}
						cx={star.cx}
						cy={star.cy}
						r={star.r}
						style={{
							animationDuration: `${Math.random() * 2 + 1}s`,
							animationDelay: `${Math.random() * 2}s`,
						}}
					/>
				))}
			</g>
		</svg>
	);
};

interface DevOpsHeroProps {
	title: string | JSX.Element;
	description: string;
	subtitle: string;
}

const DevOpsHero = ({ title, description, subtitle }: DevOpsHeroProps) => {
	const bars = [
		"h-[30%]",
		"h-[33%]",
		"h-[46%]",
		"h-[60%]",
		"h-[58%]",
		"h-[62%]",
		"h-[67%]",
		"h-[72%]",
		"h-[69%]",
		"h-[83%]",
		"h-[75%]",
		"h-[80%]",
		"h-[90%]",
	];

	return (
		<div className="relative  bg-noops-1000">
			<div className="relative py-36">
				<div className="absolute inset-0 z-10">
					<StarryBackground />
				</div>
				<div className="relative z-10 mx-auto max-w-9xl px-2 lg:px-8">
					<div className="items-center gap-8 xl:flex">
						<div className="mb-8 flex-1">
							<h3 className="mb-2 text-center text-sm font-medium uppercase text-noops-100 xl:text-left">
								{subtitle}
							</h3>
							<h1 className="text-center text-5xl font-semibold tracking-tight text-slate-800 sm:text-6xl md:leading-[4rem] xl:text-left">
								{title}
							</h1>
							<p className="my-4 text-center text-noops-200  xl:text-left">
								{description}
							</p>
						</div>

						<div className=" relative flex h-80 flex-1 sm:h-112 md:h-128 lg:h-144 xl:h-112">
							<div className="absolute h-full w-full">
								<div className="relative h-full w-full rounded-xl border border-noops-600/10 bg-slate-900 bg-opacity-30 p-4">
									<div className="absolute inset-0 rounded-xl border-2 border-noops-400 blur-3xl"></div>
									<div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-noops-300/10 via-transparent to-noops-400/10 blur-2xl"></div>
									<div className="relative flex h-full">
										<div className="flex flex-1 items-center ">
											<ServerIcon className="w-full text-noops-600" />
										</div>
										<div className="relative flex flex-1 items-center justify-center">
											<div className="w-full border-2 border-noops-600" />
											<div className="absolute h-2/3 w-1/2 translate-x-1/2 rounded-l-lg border-4 border-r-0 border-noops-600" />
										</div>
										<div className="flex h-full flex-1 flex-col">
											<div className="relative flex flex-1 items-center justify-center">
												<CircleStackIcon className="absolute h-full text-noops-600" />
											</div>
											<div className="relative flex flex-1 items-center justify-center">
												<CircleStackIcon className="absolute h-full text-noops-600" />
											</div>
											<div className="relative flex flex-1 items-center justify-center">
												<CircleStackIcon className="absolute h-full text-noops-600" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DevOpsHero;
