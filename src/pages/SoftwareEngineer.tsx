import React from "react";
import { SparklesIcon, TruckIcon, ClockIcon } from "@heroicons/react/24/solid";
import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";
import { SEHero } from "../components";

const features = [
  {
    name: "Stop Delays",
    description:
      "Eliminate Delays and hit your deadlines with our streamlined solutions.",
    href: "#",
    icon: ClockIcon,
  },
  {
    name: "Focus on Core Delivery",
    description:
      "Don't waste time perfecting your deployment process, perfect your code instead. We'll handle it.",
    href: "#",
    icon: TruckIcon,
  },
  {
    name: "Simple & Intuitive",
    description:
      "Inefficiency can hinder productivity. We've crafted our platform to be remarkably simple and intuitive, maximising your output.",
    href: "#",
    icon: SparklesIcon,
  },
];

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 1.5]);

  return (
    <div className="relative flex h-screen items-center justify-center bg-black">
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl text-white"
        style={{
          opacity,
          scale,
        }}
      >
        <motion.div
          className="rounded-md bg-white p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No...
        </motion.div>
        <motion.div
          className="mt-6 rounded-md bg-black p-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Surprises!
        </motion.div>
      </motion.div>
    </div>
  );
};

const SoftwareEngineer = () => {
  return (
    <div>
      {/* Hero */}
      <SEHero />

      <div className="h-72 bg-gradient-to-b from-noops-1000 to-slate-950"></div>

      {/* content */}
      <div className="bg-slate-950 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-noops-400">
              The NoOps Platform
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why NoOps?
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Stop wasting time on DevOps and prioritize what sets your product
              apart. Leave the complexity of operations management to us, so you
              can focus on what you do best.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon
                      className="h-5 w-5 flex-none text-noops-400"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-300">
                    <p className="flex-auto">{feature.description}</p>
                    {/* <p className="mt-6">
                      <a
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-noops-400"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p> */}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* NO SURPRISES ANIMATION */}
      <ScrollAnimation />
    </div>
  );
};

export default SoftwareEngineer;
