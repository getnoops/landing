import { CheckCircleIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
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
  infraComplete: boolean;
  setInfraComplete: (value: boolean) => void;
  animationComplete: boolean;
}

const InfraBar = ({ steps, animationComplete, setInfraComplete }: BarProps) => {
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
        i
      );
      prevWidth = newWidth;

      vars[name] = values;
    }

    setVariants({ ...variants, ...vars });
  }, []);

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
      className={classNames(
        !animationComplete && "mb-1",
        "flex h-10 flex-col transition-all"
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
        <div
          className={classNames(
            animationComplete && "rounded-b-none border-b-0",
            " relative flex h-full overflow-clip rounded-lg border border-accent bg-gradient-to-r from-noops-300 to-noops-200 transition"
          )}
        >
          {/* Animated Bar */}
          <motion.div
            variants={variants}
            initial="initial"
            animate={
              currentAnimation == 0 ? "initial" : `step${currentAnimation}`
            }
            viewport={{ once: true }}
            onAnimationComplete={handleNextAnimation}
            className="relative z-50 flex h-full w-full transform-gpu items-center justify-end bg-gradient-to-r from-noops-800 to-noops-600  shadow-lg"
          >
            {/* Shimmer effect */}
            {!finished && (
              <div className="absolute inset-0 -translate-x-full transform-gpu animate-[shimmer_2s_infinite] border-y border-noops-100 bg-gradient-to-r from-transparent via-noops-100 to-transparent opacity-[0.15]"></div>
            )}
            <div className="absolute left-full h-full w-1 bg-gradient-to-r from-noops-900 opacity-50 "></div>

            <motion.p
              key={!finished ? currentSection.name : "waiting"}
              initial="initial"
              animate={
                !finished
                  ? "animate"
                  : animationComplete
                  ? "initial"
                  : "animate"
              }
              exit="exit"
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="z-20 flex transform-gpu items-center gap-x-1 whitespace-nowrap pr-2 font-mono font-medium text-noops-200"
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfraBar;
