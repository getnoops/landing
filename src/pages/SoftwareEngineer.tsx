import React, { useRef } from "react";
import { SparklesIcon, TruckIcon, ClockIcon } from "@heroicons/react/24/solid";
import { motion, useTransform, useScroll } from "framer-motion";
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

const SoftwareEngineer = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const backgroundColor = useTransform(scrollYProgress, (pos) =>
    pos < 0.5 ? "#0b0217" : "white"
  );
  const noBottom = useTransform(scrollYProgress, (pos) => `${pos * 100}%`);
  const noScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const noPosition = useTransform(scrollYProgress, (pos) =>
    pos < 0.5 ? "fixed" : "relative"
  );
  const surBottom = useTransform(scrollYProgress, (pos) =>
    pos < 0.5 ? "-100%" : "50%"
  );
  const surPosition = useTransform(scrollYProgress, (pos) =>
    pos > 0.5 && pos < 1 ? "fixed" : "relative"
  );
  const surOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

  return (
    <div>
      {/* Hero */}
      <SEHero />

      {/* content */}
      <div className="bg-noops-1000 py-24 sm:py-32">
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

      <div className="relative mb-28 bg-white">
        {/* <div className="absolute top-3/4 aspect-square w-1/3 -translate-y-1/2 rounded-full bg-noops-300/30 blur-3xl"></div> */}
        <div className="absolute inset-0 bg-gradient-to-tr from-noops-300/50 via-transparent to-noops-300/50 blur-3xl"></div>
        <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-noops-900 sm:text-4xl">
              No Catches
              <br />
              Build Whatever, However
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-noops-600">
              NoOps will fit into your workflow. Use our CLI or our Portal to
              deploy your application. We'll take care of the rest.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-noops-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-noops-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-noops-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="inline-flex cursor-pointer items-center gap-x-2 rounded-full border border-transparent px-4 py-1.5 text-sm text-noops-500 transition hover:border-noops-500/60 hover:bg-noops-600 hover:bg-opacity-10 hover:shadow-lg hover:shadow-noops-400/10 focus-visible:outline focus-visible:outline-noops-500/60"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-noops-1000 shadow-2xl shadow-noops-600/40">
        <div className="absolute inset-0 top-1/4 aspect-square rounded-full bg-gradient-radial from-noops-600/10 to-accent/10 blur-3xl"></div>
        <div className="relative isolate mx-auto max-w-7xl overflow-hidden py-24 sm:px-6 sm:py-32 lg:px-8 ">
          <div className="relative    px-6 py-24 text-center   sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              But... How? <br />
              Introducing{" "}
              <span className="bg-gradient-to-r from-noops-600  to-accent bg-clip-text text-transparent">
                Bond
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-noops-300">
              Bond is our open source interfacing schema that allows us to
              connect to your application to deploy and scale it automatically.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="inline-flex cursor-pointer items-center gap-x-2 rounded-full border border-transparent px-4 py-1.5 text-sm font-medium text-noops-500 transition hover:border-noops-500/60 hover:bg-noops-600 hover:bg-opacity-10 hover:shadow-lg hover:shadow-noops-400/10 focus-visible:outline focus-visible:outline-noops-500/60"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-2 pb-14">
        <div className="relative">
          <div className="absolute inset-0 rounded-xl bg-opacity-30 bg-gradient-to-br from-noops-300/50 via-transparent to-noops-400/50 blur-xl"></div>
          <div className="relative mt-24 rounded-xl border border-noops-400/30 bg-noops-300/10 p-4 backdrop-blur-lg">
            <h5 className="mb-2 text-center text-2xl font-medium leading-10 text-noops-950">
              Want to know more?
            </h5>
            <p className="text-center font-medium text-noops-900">
              If you have any questions about NoOps, or would like to learn more
              about how we can help you, please send an email to <br />
              <span className="mx-auto mt-1 block w-fit select-all font-semibold">
                sam@getnoops.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareEngineer;
