import { motion } from "framer-motion";
import type React from "react";

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

interface HomeProps {
  description?: string;
}

const Hero = ({ description }: HomeProps) => {
  return (
    <>
      <div className="relative  bg-noops-1000 pt-28 sm:pt-40">
        <div className="absolute inset-x-0 top-0 h-[750px] sm:h-[900px] z-10">
          <StarryBackground />
        </div>
        <div className="relative py-28 sm:py-40">
          <div className="relative z-10 mx-auto max-w-7xl px-2 lg:px-8">
            <div className="relative mx-auto text-center">
              <h1 className="text-6xl font-semibold tracking-tight text-slate-800 sm:text-7xl md:leading-[5rem]">
                <span className="bg-gradient-to-b from-noops-100 to-noops-300 bg-clip-text text-transparent ">
                  DevOps{" "}
                </span>

                <span className="bg-gradient-to-r from-noops-400 font-extrabold  to-noops-700 bg-clip-text text-transparent">
                  slowing{" "}
                </span>

                <span className="bg-gradient-to-b from-noops-100 to-noops-300 bg-clip-text text-transparent ">
                  you down?
                </span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-noops-200">
                That new technology you're learning right now... stop it, it
                will be gone tomorrow
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-[1066px] overflow-hidden bg-noops-1000">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center"
            src="/images/noops_bg.webp"
            draggable={false}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
