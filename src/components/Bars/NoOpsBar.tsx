import { SparklesIcon } from "@heroicons/react/24/solid";
import { cn } from "@site/src/lib/utils";
import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import GenerateVariants from "./GenerateVariants";

interface StepsType {
	name: string;
	Icon: any;
	weight: number;
}

interface BarProps {
	steps: StepsType[];
	inView: boolean;
}

const NoOpsBar = ({ steps, inView }: BarProps) => {
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
		}
	};

	return (
		<div className="flex h-10 flex-col">
			{/* headers */}

			<div className="relative h-full overflow-clip">
				<div className=" absolute z-50 flex h-full w-full items-end">
					{Object.values(variants).map((variant: any, i) => {
						if (i == 0 || i == steps.length) return;

						return (
							<div
								key={i}
								className="relative h-full -translate-x-1"
								style={{ left: variant.scaleX.toString() }}
							>
								<div className="absolute left-0 top-0 h-full border-2 border-dashed border-noops-400"></div>
							</div>
						);
					})}
				</div>
				<div className=" relative flex h-full overflow-clip rounded-lg border border-accent bg-gradient-to-r from-noops-300 to-noops-200">
					<motion.p
						key={currentSection.name}
						initial="initial"
						animate={!finished ? "animate" : "initial"}
						exit="exit"
						variants={{
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							exit: { opacity: 0 },
						}}
						transition={{ duration: 0.5 }}
						className="absolute left-0 top-1/2 z-[51] flex -translate-y-1/2 transform-gpu items-center gap-x-1 whitespace-nowrap px-2 font-mono font-medium text-noops-200"
					>
						<currentSection.Icon className="h-5" />
						{currentSection.name}
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
						<div
							className={cn(
								"absolute inset-0 -translate-x-full transform-gpu animate-[shimmer_2s_infinite] border-y border-noops-100 bg-gradient-to-r from-transparent via-noops-100 to-transparent transition-opacity",
								finished ? "opacity-0" : "opacity-[0.15]",
							)}
						></div>
						<div className="absolute left-full h-full w-1 bg-gradient-to-r from-noops-900 opacity-50 "></div>

						<motion.div
							initial="initial"
							variants={{
								initial: { opacity: 0, letterSpacing: "0em", scale: 0.8 },
								animate: { opacity: 1, letterSpacing: "0.1em", scale: 1 },
							}}
							transition={{
								duration: 0.5,
								ease: "easeOut",
								letterSpacing: { duration: 1.5, ease: "easeOut" },
							}}
							animate={finished ? "animate" : "initial"}
							className="absolute inset-x-0 flex w-full transform-gpu items-center justify-center text-center text-2xl font-black text-noops-200"
						>
							<SparklesIcon className="mr-0.5 h-6 scale-x-[-100%] animate-pulse" />{" "}
							Deployed <SparklesIcon className="h-6 animate-pulse" />
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default NoOpsBar;
