import React, { useRef } from "react";
import {
  SparklesIcon,
  TruckIcon,
  ClockIcon,
  LockClosedIcon,
  FaceSmileIcon,
  BanknotesIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { motion, useTransform, useScroll } from "framer-motion";
import { CxOHero, SEFeatures, SEHero } from "../components";
import {} from "@heroicons/react/20/solid";

const SEContent = {
  hero: {},

  features: {
    title: "Why NoOps?",
    description:
      "Stop wasting time on DevOps and prioritize what sets your product apart. Leave the complexity of operations management to us, so you can focus on what you do best.",
    subtitle: "The NoOps Platform ",

    features: [
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
    ],
  },

  blocks: {
    title: "Automate Complexity",
    description:
      "We've built a platform that automates the complexity of operations management, so you can focus on what you do best.",
    image: "/images/complexity.png",

    items: [
      {
        title: "Developer Experience",
        description:
          "Have a great developer experience with our intuitive CLI and Portal. Deploy your application in seconds.",
        Icon: FaceSmileIcon,
      },
      {
        title: "Security & Compliance",
        description:
          "NoOps is built for security. Rest easy knowing your application is secure and compliant.",
        Icon: LockClosedIcon,
      },
      {
        title: "Cost Effective",
        description:
          "DevOps is expensive. Why have a team of engineers when you could have a platform that does it for you?",
        Icon: CurrencyDollarIcon,
      },
    ],
  },
};

const SoftwareEngineer = () => {
  const { hero, features, blocks } = SEContent;

  return (
    <div>
      {/* Hero */}
      <CxOHero />

      {/* content */}
      <SEFeatures
        title={features.title}
        description={features.description}
        subtitle={features.subtitle}
        features={features.features}
      />

      <div className="bg-noops-1000 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl border-4 border-accent/50 bg-gradient-to-br from-accent/20 via-transparent to-accent/20 blur-xl"></div>

            <div className="relative h-96 w-full overflow-clip rounded-3xl border border-noops-600/20 bg-noops-600/10">
              <div className="mx-auto flex h-full flex-col-reverse justify-between md:flex-row">
                <div className="my-8 flex items-center text-center md:w-3/5 md:text-left">
                  <div className="mx-4 md:ml-8 md:mr-16">
                    <h2 className=" text-4xl font-bold text-noops-200 ">
                      {blocks.title}
                    </h2>
                    <p className="mt-2 text-noops-300 md:mt-0">
                      {blocks.description}
                    </p>
                  </div>
                </div>
                <div className="max-h-full border-b border-noops-600/20 md:w-2/5 md:border-b-0 md:border-l">
                  <img
                    src={blocks.image}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="my-8 flex flex-col gap-8 md:my-2 md:flex-row md:gap-2 xl:my-8 xl:gap-8">
            {blocks.items.map((item) => (
              <div className="relative w-full flex-1 shrink-0">
                <div className="absolute inset-0 rounded-3xl border-4 border-accent/50 bg-gradient-to-br from-accent/20 via-transparent to-accent/20 blur-xl"></div>
                <div className="relative h-96 w-full overflow-clip rounded-3xl border border-noops-600/20 bg-noops-600/10 p-4 md:p-2 lg:p-4">
                  <div className="flex h-2/3 w-full items-center justify-center rounded-2xl border border-noops-600/30 bg-noops-600/10 md:h-3/5 lg:h-2/3">
                    <item.Icon className="h-32 text-noops-400" />
                  </div>
                  <div className="mt-4 text-center md:mt-2 md:text-left">
                    <h2 className="  text-2xl font-bold text-noops-200 md:text-xl lg:text-2xl">
                      {item.title}
                    </h2>
                    <p className="text-noops-300 md:text-sm lg:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mb-28 bg-white">
        {/* <div className="absolute top-3/4 aspect-square w-1/3 -translate-y-1/2 rounded-full bg-noops-300/30 blur-3xl"></div> */}
        <div className="absolute inset-0 bg-gradient-to-tr from-noops-300/50 via-transparent to-noops-300/50 blur-3xl"></div>
        <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-noops-900 sm:text-4xl">
              Your Team Will Love It
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-noops-600">
              Your team will love the simplicity of NoOps. We've built a
              platform that is easy to use, easy to understand, and easy to
              deploy.
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
              Get in Touch
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
