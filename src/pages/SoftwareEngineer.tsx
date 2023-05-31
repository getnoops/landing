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

const SoftwareEngineer = () => {
  return (
    <div className="relative  bg-[#1f252a]">
      <div className="relative py-36">
        <div className="absolute inset-0 z-10">
          <StarryBackground />
        </div>
        <div className="relative z-10 mx-auto max-w-9xl px-2 lg:px-8">
          <div className="flex items-center">
            <div className="flex-1">
              <h3 className="mb-2 text-sm font-medium uppercase text-noops-100">
                SOFTWARE ENGINEERS
              </h3>
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
              <p className="my-4 font-medium text-slate-300">
                NoOps allows you to focus on your product, not your
                infrastructure. NoOps is a platform that allows you to deploy
                your code to the cloud without having to worry about the
                underlying infrastructure.
              </p>
            </div>
            <div className="flex flex-1 justify-center">
              <div className="h-96 w-96 overflow-clip  break-words bg-gradient-radial from-noops-500 via-[#1f252a] via-70% to-[#1f252a] bg-clip-text text-5xl font-bold text-transparent">
                10010100101000101001010100101001010001010010101001010010100010100101010010100101000101001010100101001010001010010101001010010100010100101010010100101000101001010100101001010001010010101001010010100010100101010010100101000101001010
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareEngineer;
