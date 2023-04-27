import { Tab } from "@headlessui/react";
import classNames from "classnames";
import React, { useState } from "react";

const steps = [
  {
    title: "Write your Code",
    subject: "Write",
    description:
      "Write your code however you want, using whatever tools you want. NoOps is flexible and will fit into your workflow.",
  },
  {
    title: "Configure your Descriptor File",
    subject: "Describe",
    description:
      "Create a descriptor file using our Open Source Data Schema, Bond. This file will be used to configure your product and its infrastructure.",
    cta: (
      <a
        href="#"
        className="block w-fit text-sky-400 transition hover:text-sky-500"
      >
        Learn more about Bond {"→"}
      </a>
    ),
  },
  {
    title: "And You're Off",
    subject: "Deploy",
    description:
      "Thats it. Deploy. NoOps will automatically create the infrastructure needed to run your product with 24/7 monitoring and alerting.",
  },
];

const Steps = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="bg-gradient-to-t from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3 bg-clip-text text-transparent">
              Easy as
            </span>
          </h2>
          <p className="text-slate-600">
            The NoOps experience is simple and intuitive. Just follow these 3
            easy steps.
          </p>
        </div>

        <div className="my-16 grid select-none grid-cols-3 gap-x-8">
          {steps.map((step, index) => (
            <div
              onClick={() => setSelectedIndex(index)}
              key={index}
              className={classNames(
                index != selectedIndex && "opacity-80",
                "group relative cursor-pointer text-left transition"
              )}
            >
              <div className="absolute inset-0 scale-90 rounded-md bg-transparent transition group-hover:scale-100 group-hover:bg-slate-50" />
              <div className="relative space-y-2 p-3">
                <div
                  className={classNames(
                    index == selectedIndex ? "bg-sky-500" : "bg-slate-400",
                    " flex h-8 w-8 items-center justify-center rounded-md font-medium text-white transition"
                  )}
                >
                  {index + 1}
                </div>
                <h5
                  className={classNames(
                    index == selectedIndex ? "text-sky-700" : "text-slate-500",
                    "text-sm font-medium transition"
                  )}
                >
                  {step.subject}
                </h5>
                <h3
                  className={classNames(
                    index == selectedIndex
                      ? "text-slate-900"
                      : "text-slate-700",
                    " text-xl transition"
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={classNames(
                    index == selectedIndex
                      ? "text-slate-600"
                      : "text-slate-500",
                    "text-sm transition"
                  )}
                >
                  {step.description}
                  {step?.cta && step.cta}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="my-10 bg-slate-50 rounded-md w-full border border-slate-100 p-4 overflow-hidden">
          <div className="flex p-1">
            <div className="h-96 w-[52rem] rounded-xl bg-white shadow shadow-slate-200"></div>
            <div className="h-96 w-[52rem] rounded-xl bg-white shadow shadow-slate-200"></div>
            <div className="h-96 w-[52rem] rounded-xl bg-white shadow shadow-slate-200"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Steps;
