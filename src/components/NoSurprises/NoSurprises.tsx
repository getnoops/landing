import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const NoSurprises = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const backgroundColor = useTransform(scrollYProgress, (pos) =>
    pos < 0.5 ? "#0b0217" : "white",
  );
  const noBottom = useTransform(scrollYProgress, (pos) => `${pos * 100}%`);
  const noScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const noPosition = useTransform(scrollYProgress, (pos) =>
    pos < 0.5 ? "fixed" : "relative",
  );
  const surBottom = useTransform(scrollYProgress, (pos) =>
    pos < 0.5 ? "-100%" : "50%",
  );
  const surPosition = useTransform(scrollYProgress, (pos) =>
    pos > 0.5 && pos < 1 ? "fixed" : "relative",
  );
  const surOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      className="h-[200vh] bg-black"
      style={{ backgroundColor: backgroundColor }}
    >
      <motion.h1
        style={{ bottom: noBottom, scale: noScale, position: noPosition }}
        className="inset-x-0 text-center text-6xl font-black tracking-wide text-white sm:text-8xl"
      >
        No
      </motion.h1>
      <motion.h1
        style={{
          position: surPosition,
          opacity: surOpacity,
          bottom: surBottom,
        }}
        className="inset-x-0  text-center text-6xl font-black tracking-wide text-noops-1000 sm:text-8xl"
      >
        Surprises!
      </motion.h1>
    </motion.div>
  );
};

export default NoSurprises;
