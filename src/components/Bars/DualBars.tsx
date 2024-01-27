import { cn } from "@site/src/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { DevBar, InfraBar } from ".";

interface StepsType {
	name: string;
	Icon: any;
	weight: number;
}

interface DualBarProps {
	infraSteps: StepsType[];
	devSteps: StepsType[];
	inView: boolean;
}

const DualBars = ({ infraSteps, devSteps, inView }: DualBarProps) => {
	const [infraComplete, setInfraComplete] = useState(false);
	const [animationComplete, setAnimationComplete] = useState(false);

	return (
		<div
			className={cn(
				"relative col-span-6 transition-all",
				animationComplete && "my-0.5",
			)}
		>
			<InfraBar
				steps={infraSteps}
				animationComplete={animationComplete}
				inView={inView}
				setInfraComplete={setInfraComplete}
			/>
			<DevBar
				steps={devSteps}
				infraComplete={infraComplete}
				animationComplete={animationComplete}
				inView={inView}
				setAnimationComplete={setAnimationComplete}
			/>

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
				animate={animationComplete ? "animate" : "initial"}
				className="absolute inset-0 z-50 flex h-full w-full transform-gpu items-center justify-center text-center text-2xl font-black text-noops-200"
			>
				Deployed
			</motion.div>
		</div>
	);
};

export default DualBars;
