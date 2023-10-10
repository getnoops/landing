import { motion, Variants } from "framer-motion";
import React from "react";

const variants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      ease: "circOut",
      duration: 1,
    },
  },
};

const HowItWorksHeroGradient = () => {
  return (
    <div className="absolute inset-0 top-0 mx-auto h-screen w-96 md:w-112">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="absolute inset-x-0 top-1/2 z-10 mx-auto h-[120%]  -translate-y-1/2 bg-noops-400 blur-3xl "
      />
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="absolute inset-x-0 top-1/2 z-20 mx-auto h-[120%] -translate-y-1/2 bg-noops-100 mix-blend-overlay blur-3xl "
      />
    </div>
  );
};

export default HowItWorksHeroGradient;
