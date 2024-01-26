import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { cn } from "@site/src/lib/utils";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import GenerateVariants from "./GenerateVariants";

interface StepsType {
	name: string;
	Icon: any;
	weight: number;
}

interface BarProps {
	steps: StepsType[];
	animationComplete: boolean;
	inView: boolean;
	setInfraComplete: (value: boolean) => void;
}

const InfraBar = ({
	steps,
	animationComplete,
	inView,
	setInfraComplete,
}: BarProps) => {
	const [currentAnimation, setCurrentAnimation] = useState(0);
	const [finished, setFinished] = useState(false);
	const [variants, setVariants] = useState<Variants>({
		initial: {
			scaleX: "0%",
		},
	});

	const currentSection =
		steps[currentAnimation == 0 ? 0 : currentAnimation - 1];

	const totalWeight = steps.reduce((acc, section) => acc + section.weight, 0);

	useEffect(() => {
		let vars: Variants = {};

		let prevWidth = 0;

		for (let i = 0; i < steps.length; i++) {
			let name = `step${i + 1}`;

			let { values, newWidth } = GenerateVariants(
				totalWeight,
				prevWidth,
				steps,
				i,
			);
			prevWidth = newWidth;

			vars[name] = values;
		}

		setVariants({ ...variants, ...vars });
	}, []);

	useEffect(() => {
		if (inView) {
			setCurrentAnimation((prevCurrentAnimation) => prevCurrentAnimation + 1);
		}
	}, [inView]);

	const handleNextAnimation = () => {
		if (currentAnimation != steps.length) {
			setCurrentAnimation(currentAnimation + 1);
		} else {
			// fire deployed animation
			setFinished(true);
			setInfraComplete(true);
		}
	};

	return (
		<div
			className={cn(
				"flex h-10 flex-col transition-all",
				!animationComplete && "mb-1",
			)}
		>
			{/* headers */}

			<div className="relative h-full overflow-clip">
				<div className=" absolute z-50 flex h-full w-full items-end">
					{Object.values(variants).map((variant: any, i) => {
						if (i == 0 || i == steps.length) return;

						variant;
						return (
							<div
								key={i}
								className="relative h-full -translate-x-1"
								style={{ left: variant.scaleX.toString() }}
							>
								{/* <div className="absolute -top-6 right-0 flex-1 text-right font-mono text-noops-100">
                    {i + 1}. {variant.name}
                  </div> */}
								<div className="absolute left-0 top-0 z-10 h-full border-2 border-dashed border-noops-400"></div>
							</div>
						);
					})}
				</div>
				<div
					className={cn(
						"relative flex h-full overflow-clip rounded-lg border border-accent bg-gradient-to-r from-noops-300 to-noops-200 transition",
						animationComplete && "rounded-b-none border-b-0",
					)}
				>
					<motion.p
						key={!finished ? currentSection.name : "waiting"}
						initial="initial"
						animate={
							!finished ? "animate" : animationComplete ? "initial" : "animate"
						}
						exit="exit"
						variants={{
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							exit: { opacity: 0 },
						}}
						transition={{ duration: 0.5 }}
						className="absolute left-0 top-1/2 z-[51] flex -translate-y-1/2 transform-gpu items-center gap-x-1 whitespace-nowrap px-2 font-mono font-medium text-noops-200"
					>
						{!animationComplete && finished && (
							<>
								<CheckCircleIcon className="h-5" />
								Ready for Deployment
							</>
						)}
						{!finished && (
							<>
								<currentSection.Icon className="h-5" />
								{currentSection.name}
							</>
						)}
					</motion.p>

					{/* Animated Bar */}
					<motion.div
						variants={variants}
						initial="initial"
						animate={
							currentAnimation == 0 ? undefined : `step${currentAnimation}`
						}
						onAnimationComplete={handleNextAnimation}
						className="relative z-[50] flex h-full w-full origin-[0%_50%] transform-gpu items-center justify-start bg-noops-800 will-change-transform  md:justify-end"
					>
						{/* Shimmer effect */}
						{!finished && (
							<div className="absolute inset-0 -translate-x-full transform-gpu animate-[shimmer_2s_infinite] border-y border-noops-100 bg-gradient-to-r from-transparent via-noops-100 to-transparent opacity-[0.15]"></div>
						)}
						<div className="absolute left-full h-full w-1 bg-gradient-to-r from-noops-900 opacity-50 "></div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default InfraBar;
