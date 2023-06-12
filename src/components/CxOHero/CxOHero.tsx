import React, { Fragment } from "react";
import { Highlight, themes } from "prism-react-renderer";
import classNames from "classnames";

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

const CxOHero = () => {
  const bars = [
    "h-[30%]",
    "h-[33%]",
    "h-[46%]",
    "h-[60%]",
    "h-[58%]",
    "h-[62%]",
    "h-[67%]",
    "h-[72%]",
    "h-[69%]",
    "h-[83%]",
    "h-[75%]",
    "h-[80%]",
    "h-[90%]",
  ];

  return (
    <div className="relative  bg-noops-1000">
      <div className="relative py-36">
        <div className="absolute inset-0 z-10">
          <StarryBackground />
        </div>
        <div className="relative z-10 mx-auto max-w-9xl px-2 lg:px-8">
          <div className="items-center gap-8 xl:flex">
            <div className="mb-8 flex-1">
              <h3 className="mb-2 text-center text-sm font-medium uppercase text-noops-100 xl:text-left">
                CxO / Head of Application or Engineering
              </h3>
              <h1 className="text-center text-5xl font-semibold tracking-tight text-slate-800 sm:text-6xl md:leading-[4rem] xl:text-left">
                <span className="bg-gradient-to-t from-noops-50 to-noops-100 bg-clip-text text-transparent ">
                  Stop slow downs,{" "}
                </span>
                <span className="bg-gradient-to-br from-noops-400  to-noops-700 bg-clip-text pr-4 text-transparent">
                  Increase <i>Efficiency</i>
                </span>
              </h1>
              <p className="my-4 text-center text-noops-200  xl:text-left">
                NoOps is a platform for developers and engineers to deploy their
                applications without having to stress about the underlying
                infrastructure. We provide the infrastructure and tools to build
                and monitor your applications, so you can focus on what matters
                most.
              </p>
            </div>

            <div className=" relative flex h-80 flex-1 sm:h-112 md:h-128 lg:h-144 xl:h-112">
              <div className="absolute left-1/3 top-1/3 h-2/3 w-2/3">
                <div className="relative h-full w-full rounded-xl border border-noops-600/10 bg-slate-900 bg-opacity-30 p-4">
                  <div className="absolute inset-0 rounded-xl border-2 border-noops-400 blur-3xl"></div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-noops-300/10 via-transparent to-noops-400/10 blur-2xl"></div>
                  <div className="h-full w-full border-b border-noops-400/50 pb-1.5">
                    <svg
                      viewBox="0 0 446 256"
                      className="h-full w-full fill-none"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="Gradient1"
                          x1="0"
                          x2="0"
                          y1="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#b980fa"
                            stop-opacity={0.4}
                          />
                          <stop
                            offset="100%"
                            stopColor="#471c87"
                            stop-opacity={0.05}
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,256 C150,100 300,170 446,0 L446,256 L0,256 Z"
                        fill="url(#Gradient1)"
                      />
                      <path
                        className="stroke-noops-600"
                        d="M0,256 C150,100 300,170 446,0"
                        stroke-linecap="round"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="absolute h-2/3 w-2/3">
                <div className="relative h-full w-full rounded-xl border border-noops-600/10 bg-slate-900 bg-opacity-30 p-4">
                  <div className="absolute inset-0 rounded-xl border-2 border-noops-400 blur-3xl"></div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-noops-300/10 via-transparent to-noops-400/10 blur-2xl"></div>
                  <div className="flex h-full w-full items-end gap-3 border-b border-noops-400/50 py-1.5 ">
                    {bars.map((bar) => (
                      <div
                        className={classNames(
                          bar,
                          "flex-1 rounded-t-sm border border-noops-900 bg-gradient-to-b from-noops-400/80 to-noops-900/50"
                        )}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CxOHero;
