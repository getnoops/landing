import { CheckCircleIcon } from "@heroicons/react/24/solid";
import * as RadioGroup from "@radix-ui/react-radio-group";
import {
	calculatePlanPrice,
	formatAmountAsCurrency,
	toWholeAmount,
	type Interval,
} from "@site/src/lib/pricing";
import { cn } from "@site/src/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { Slider } from "../Slider";
import CurvedShape from "./CurvedShape";
import Grid from "./Grid";
import { plans } from "./consts";

const Pricing = () => {
	const [interval, setInterval] = useState<Interval>("monthly");
	const [microservices, setMicroservices] = useState(10);
	const [databaseClusters, setDatabaseClusters] = useState(2);

	const price = toWholeAmount(
		calculatePlanPrice(microservices, databaseClusters, interval),
	);

	return (
		<div className="my-10 text-white">
			<div className="flex justify-center">
				<RadioGroup.Root
					value={interval}
					onValueChange={(value: Interval) => setInterval(value)}
					className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-accent/80"
				>
					{["monthly", "annually"].map((option) => (
						<RadioGroup.Item
							key={option}
							value={option}
							className={cn(
								"relative cursor-pointer rounded-full bg-transparent px-2.5 py-1.5 font-semibold transition",
								option === interval ? "text-white" : "text-accent/80",
							)}
						>
							{option === interval && (
								<motion.div
									className="absolute inset-0 z-0 h-full w-full rounded-full bg-gradient-to-r from-noops-600 to-accent shadow-inner shadow-noops-300"
									layoutId="planFrequency"
								/>
							)}

							<span className="relative z-10">
								{option === "monthly" ? "Monthly" : "Annually"}
							</span>
						</RadioGroup.Item>
					))}
				</RadioGroup.Root>
			</div>

			<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
				{plans.map(({ id, name, description, href }) => (
					<div
						key={id}
						className="relative min-h-[28rem] overflow-clip rounded-3xl bg-noops-1000 p-8 xl:p-10"
					>
						{id === "pro" && (
							<>
								{/* TOP */}
								<CurvedShape
									fill="#cab6fc"
									className="pointer-events-none absolute right-0 top-0 w-full origin-top-right scale-75 blur-xl   "
									flipped
								/>
								<CurvedShape
									fill="#8335e9"
									className="pointer-events-none absolute right-0 top-0 w-full origin-top-right scale-125 mix-blend-overlay  blur-xl"
									flipped
								/>
								<CurvedShape
									fill="#ffffff"
									className="pointer-events-none absolute right-0 top-0 w-full origin-top-right  scale-[50%] mix-blend-overlay  blur-2xl "
									flipped
								/>

								{/* BOTTOM */}
								<CurvedShape
									fill="#cab6fc"
									className="pointer-events-none absolute bottom-0 left-0 w-full origin-bottom-left scale-[60%] blur-xl  "
								/>
								<CurvedShape
									fill="#8335e9"
									className="pointer-events-none absolute bottom-0 left-0 w-full origin-bottom-left scale-[100%] mix-blend-overlay  blur-lg"
								/>
								<CurvedShape
									fill="#ffffff"
									className="pointer-events-none absolute bottom-0 left-0 w-full origin-bottom-left  scale-[40%] mix-blend-overlay  blur-xl "
								/>
							</>
						)}

						{id === "enterprise" && (
							<>
								<div className="absolute inset-x-0 -top-1/2 mx-auto h-[200%] w-24 rotate-[60deg] bg-[#fff4ce] blur-2xl grayscale  lg:rotate-[31deg]"></div>
								<div className="absolute inset-x-0 -top-1/2 mx-auto h-[200%] w-48 rotate-[60deg] bg-[#eeaa5b] mix-blend-overlay blur-2xl grayscale  lg:rotate-[31deg]"></div>

								<div className="absolute inset-0">
									<Grid className="mx-auto h-full w-full opacity-10 " />
								</div>
							</>
						)}

						{id === "free" && (
							<>
								<div className="absolute inset-0 bg-noops-1000  " />
								<div className="absolute left-0 top-[90%] z-50 h-full w-full rounded-full bg-noops-400 blur-[46px] " />
								<div className="absolute left-0 top-[90%] z-50 h-full w-full rounded-full bg-noops-400 mix-blend-overlay blur-2xl" />
							</>
						)}

						<div className="relative flex items-center justify-between gap-x-4">
							<h3
								id={id}
								className={cn(
									"m-0 text-xl font-bold leading-8",
									id === "pro" ? "text-accent" : "",
								)}
							>
								{name}
							</h3>
						</div>

						<p className="relative mt-4 text-sm leading-6">{description}</p>

						<p className="relative mb-0 mt-6 flex items-baseline gap-x-1">
							<span className="text-4xl font-bold tabular-nums tracking-tight">
								{id === "enterprise"
									? ""
									: id === "free"
										? formatAmountAsCurrency(0, "AUD")
										: formatAmountAsCurrency(price, "AUD")}
							</span>
							<span className="text-sm font-semibold leading-6">
								{id !== "enterprise" &&
									(interval === "annually" ? "/year" : "/month")}
							</span>
						</p>

						{id === "pro" && (
							<div className="relative mt-4">
								<label className="text-sm" htmlFor="numberOfMicroservices">
									Add extra microservices:
								</label>
								<Slider
									className="mb-4 mt-1 cursor-pointer"
									id="numberOfMicroservices"
									noopsColor
									min={10}
									max={100}
									step={5}
									value={[microservices]}
									onValueChange={([newMicroservices]: any) =>
										setMicroservices(newMicroservices)
									}
								/>

								<label className="text-sm" htmlFor="numberOfDatabaseClusters">
									Add extra database clusters:
								</label>
								<Slider
									className="mb-4 mt-1 cursor-pointer"
									id="numberOfDatabaseClusters"
									noopsColor
									min={2}
									max={30}
									value={[databaseClusters]}
									onValueChange={([newDatabaseClusters]: any) =>
										setDatabaseClusters(newDatabaseClusters)
									}
								/>
							</div>
						)}

						{id !== "enterprise" && (
							<ul className="relative mb-0 mt-6 space-y-3 p-0 text-sm leading-6">
								<Feature id={id}>
									{id === "free" ? 5 : microservices} microservices
								</Feature>

								<Feature id={id}>
									{id === "free" ? 1 : databaseClusters} database cluster
									{id === "pro" && databaseClusters > 1 ? "s" : ""}
								</Feature>

								<Feature id={id}>
									{id === "free" ? 15 : microservices * 3} S3 buckets
								</Feature>

								<Feature id={id}>
									{id === "free" ? 5 : databaseClusters * 5} databases
								</Feature>

								<Feature id={id}>
									{id === "free" ? "1 environment" : "3 environments"}
								</Feature>

								<Feature id={id}>Unlimited developers</Feature>

								{id === "free" && (
									<Feature id={id}>No credit card required</Feature>
								)}
							</ul>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

interface FeatureProps {
	id: string;
	children: React.ReactNode;
}

const Feature = ({ id, children }: FeatureProps) => (
	<li className="flex gap-x-3">
		<CheckCircleIcon
			className={cn(
				"h-6 w-5 flex-none text-noops-500",
				id === "enterprise" && "text-slate-500",
			)}
			aria-hidden="true"
		/>
		{children}
	</li>
);

export default Pricing;
