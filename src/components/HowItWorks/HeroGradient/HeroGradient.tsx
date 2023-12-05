import { motion, Variants } from "framer-motion";
import React from "react";

const variants: Variants = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      ease: "circOut",
      duration: 1.2,
    },
  },
};

const HeroGradient = () => {
  return (
    <div className="absolute inset-0 top-0 mx-auto h-screen  w-full bg-noops-1000 md:w-[36rem]">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="absolute inset-x-0 -top-[10%] mx-auto  h-[120%] w-[90%]  -translate-y-1/2 transform-gpu bg-noops-400 blur-[44px]"
      />
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="absolute inset-x-0 -top-[10%] z-10  mx-auto h-[120%] w-[90%]  -translate-y-1/2 transform-gpu bg-noops-100 mix-blend-overlay blur-[44px]"
      />
    </div>
  );
};

export default HeroGradient;
