import { motion } from "framer-motion";
import React from "react";

const StarryBackground: React.FC = () => {
  const stars = Array.from({ length: 100 }, () => ({
    cx: `${Math.random() * 100}%`,
    cy: `${Math.random() * 100}%`,
    r: Math.random(),
  }));

  return (
    <svg
      className="h-full w-full object-cover"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="transparent" />
      <g fill="white">
        {stars.map((star, i) => (
          <circle
            className="animate-twinkle"
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            style={{
              animationDuration: `${Math.random() * 2 + 1}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </g>
    </svg>
  );
};

const Hero = () => {
  return (
    <div className="relative  bg-[#1f252a] pt-28 sm:pt-40">
      <div className="relative py-24 sm:py-32">
        {/* <div className="absolute inset-x-0 top-10 z-10 flex scale-y-150 transform-gpu justify-center overflow-hidden blur-xl sm:scale-y-100 sm:blur-3xl md:-top-10 lg:-top-36">
          <motion.img
            animate={{
              y: [0, 23, 0, -20, -3, 13],
              rotateZ: [0, 5, 0, -8, 0],
              scale: [1, 1.1, 1.2, 1.05, 1, 0.8, 1],
              transition: {
                repeat: Infinity,
                duration: 10,
                repeatType: "reverse",
              },
            }}
            src="/blob.svg"
          />
        </div> */}
        <div className="absolute inset-0 z-10">
          <StarryBackground />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-2 lg:px-8">
          <div className="relative mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-800 sm:text-6xl md:leading-[4rem]">
              <span className="bg-gradient-to-t from-noops-50 to-noops-100 bg-clip-text text-transparent ">
                Focus on{" "}
              </span>
              <span className="bg-gradient-to-br from-noops-400  to-noops-700 bg-clip-text text-transparent">
                your product,{" "}
              </span>{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-t from-noops-50 to-noops-100 bg-clip-text text-transparent">
                not{" "}
              </span>
              <span className="bg-gradient-to-br from-noops-400  to-noops-700 bg-clip-text text-transparent">
                your infrastructure
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-noops-100">
              NoOps allows you to stop worrying about the complexities of
              infrastructure management so you can focus on creating a product
              that truly stands out.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="group/button relative cursor-pointer rounded-md bg-gradient-to-br from-noops-400  to-noops-700 px-4 py-3"
              >
                <div className="noops-xl pointer-events-none absolute inset-0 bg-gradient-to-br from-noops-400  to-noops-700 opacity-60 blur-lg" />
                <div className="pointer-events-none absolute inset-0 m-px rounded-[5px] bg-noops-50 transition group-hover/button:opacity-0" />
                <span className="relative font-medium text-noops-900 transition group-hover/button:text-white">
                  Experience NoOps
                </span>
              </a>

              <a
                href="#"
                className="text-sm font-semibold leading-6 text-noops-100"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-48 h-[1066px] overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/images/background.png"
          draggable={false}
          alt=""
        />
      </div>
      <div className="h-64 bg-gradient-to-b from-[#edeeea] to-white "></div>
    </div>
  );
};

export default Hero;
