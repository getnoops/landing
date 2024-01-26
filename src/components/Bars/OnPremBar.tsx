import { FaceFrownIcon } from "@heroicons/react/20/solid";
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

const stopAt = 5;

const NoOpsBar = ({ steps, inView }: BarProps) => {
	const [currentAnimation, setCurrentAnimation] = useState(0);
	const [finished, setFinished] = useState(false);
	const [variants, setVariants] = useState<Variants>({
		initial: {
			width: "0%",
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
		if (currentAnimation == stopAt) {
			setFinished(true);
		} else if (currentAnimation != steps.length) {
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
								style={{ left: variant.width.toString() }}
							>
								{/* <div className="absolute -top-6 right-0 flex-1 text-right font-mono text-noops-100">
                    {i + 1}. {variant.name}
                  </div> */}
								<div className="absolute left-0 top-0 z-10 h-full border-2 border-dashed border-noops-400"></div>
							</div>
						);
					})}
				</div>
				<div className=" relative flex h-full overflow-clip rounded-lg border border-accent bg-gradient-to-r from-noops-300 to-noops-200">
					{/* Animated Bar */}
					<motion.div
						variants={variants}
						initial="initial"
						animate={
							currentAnimation == 0 ? undefined : `step${currentAnimation}`
						}
						onAnimationComplete={handleNextAnimation}
						className="relative z-50 flex h-full w-full items-center justify-end bg-gradient-to-r from-noops-800 to-noops-600  shadow-lg"
					>
						{/* Shimmer effect */}
						{!finished && (
							<div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] border-y border-noops-100 bg-gradient-to-r from-transparent via-noops-100 to-transparent opacity-[0.15]"></div>
						)}
						<div className="absolute left-full h-full w-1 bg-gradient-to-r from-noops-900 opacity-50 "></div>

						<motion.p
							key={!finished ? currentSection.name : "finished"}
							initial="initial"
							animate={"animate"}
							exit="exit"
							variants={{
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
							}}
							transition={{ duration: 0.5 }}
							className="z-20 flex items-center gap-x-1 whitespace-nowrap pr-2 font-mono font-medium text-noops-200"
						>
							{finished && (
								<>
									<FaceFrownIcon className="h-5" />
									Give Up
								</>
							)}

							{!finished && (
								<>
									<currentSection.Icon className="h-5" />
									{currentSection.name}
								</>
							)}
						</motion.p>

						{/* <motion.div
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
              className="absolute inset-x-0 flex w-full items-center justify-center text-center text-2xl font-black text-noops-200"
            >
              <SparklesIcon className="mr-0.5 h-6 scale-x-[-100%]" /> Deployed{" "}
              <SparklesIcon className="h-6" />
            </motion.div> */}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default NoOpsBar;
