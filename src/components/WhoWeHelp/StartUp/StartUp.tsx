import React from "react";

import {
  CloudArrowUpIcon,
  CodeBracketIcon,
  LockClosedIcon,
  ScaleIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { BoltIcon, ServerStackIcon } from "@heroicons/react/24/solid";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";

// Startups
// Get of the ground fast
// No DevOps needed
// Heavy lifting already done (No worries about Security Architecture of AWS)
// Write your code and that's it.

const features = [
  {
    name: "Get off the ground. Fast.",
    description:
      "Built for speed, our platform is designed to get you going in no time.",
    Icon: BoltIcon,
  },
  {
    name: "No DevOps needed.",
    description: "DevOps is expensive and time consuming. Never again.",
    Icon: ServerStackIcon,
  },
  {
    name: "Heavy lifting already done.",
    description:
      "Don't worry about security and AWS architecture. We've taken care of it.",
    Icon: ScaleIcon,
  },
  {
    name: "Write your code and that's it.",
    description:
      "Focus on what matters most, your product. Stick to making it great.",
    Icon: CodeBracketIcon,
  },
];

const StartUp = () => {
  return (
    <div
      id="startup"
      className="relative isolate overflow-hidden px-4 py-16 sm:py-32"
    >
      <div className="relative mx-auto  max-w-6xl rounded-3xl border border-accent/20 bg-noops-1000 p-6">
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/10 via-transparent to-accent/10"></div>
        <CubeTransparentIcon className="pointer-events-none absolute left-1/2 top-1/2 h-96 -translate-x-1/2 -translate-y-1/2 text-noops-400/[2%]" />

        <div className="pointer-events-none absolute -inset-1 mx-auto rounded-3xl border-4 border-noops-400 blur-xl"></div>

        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-noops-300">
            Startup
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-noops-100">
            Launch faster than ever
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-6xl lg:mx-0 ">
          <div className=" text-base leading-7 text-noops-200 lg:col-span-7">
            <p>
              There's nothing more important for a startup than getting to
              market fast. We've built a platform that allows you to do just
              that.
            </p>

            <ul role="list" className="mt-8 grid gap-8 sm:grid-cols-2 ">
              {features.map((feature) => (
                <li className="flex gap-x-3">
                  <feature.Icon
                    className="mt-1 h-6 w-6 flex-none text-noops-400"
                    aria-hidden="true"
                  />

                  <p>
                    <span className="font-semibold text-noops-400">
                      {feature.name}
                    </span>{" "}
                    <br />
                    <span className="text-noops-200">
                      {feature.description}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              These are some problems startups regularly face. Take your idea to
              market faster than ever before.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartUp;
