import {
  CommandLineIcon,
  CubeTransparentIcon,
  CogIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";
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
}

const DualBars = ({ infraSteps, devSteps }: DualBarProps) => {
  const [infraComplete, setInfraComplete] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const codeWeight = 5;

  return (
    <div
      className={classNames(
        animationComplete && "my-0.5",
        "relative col-span-6 transition-all"
      )}
    >
      <InfraBar
        steps={infraSteps}
        infraComplete={infraComplete}
        setInfraComplete={setInfraComplete}
        animationComplete={animationComplete}
      />
      <DevBar
        steps={devSteps}
        infraComplete={infraComplete}
        animationComplete={animationComplete}
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
