import React, { useRef } from "react";

import { Blocks, DevOpsHero, SEFeatures } from "../components";

import DevOpsContent from "../content/DevOps";

const DevOps = () => {
  const { hero, features, blocks, section4, section5 } = DevOpsContent;

  return (
    <div>
      {/* Hero */}
      <DevOpsHero
        title={hero.title}
        description={hero.description}
        subtitle={hero.subtitle}
      />

      {/* content */}
      <SEFeatures
        title={features.title}
        description={features.description}
        subtitle={features.subtitle}
        features={features.features}
      />

      <Blocks
        title={blocks.title}
        description={blocks.description}
        image={blocks.image}
        items={blocks.items}
      />

      <div className="relative mb-28 bg-white">
        {/* <div className="absolute top-3/4 aspect-square w-1/3 -translate-y-1/2 rounded-full bg-noops-300/30 blur-3xl"></div> */}
        <div className="absolute inset-0 bg-gradient-to-tr from-noops-300/50 via-transparent to-noops-300/50 blur-3xl"></div>
        <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-noops-900 sm:text-4xl">
              {section4.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-noops-600">
              {section4.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={section4.ctaHref}
                className="rounded-full bg-noops-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-noops-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-noops-600"
              >
                {section4.cta}
              </a>
              <a
                href={section4.learnMoreHref}
                className="inline-flex cursor-pointer items-center gap-x-2 rounded-full border border-transparent px-4 py-1.5 text-sm text-noops-500 transition hover:border-noops-500/60 hover:bg-noops-600 hover:bg-opacity-10 hover:shadow-lg hover:shadow-noops-400/10 focus-visible:outline focus-visible:outline-noops-500/60"
              >
                {section4.learnMore} <span aria-hidden="true">→</span>
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
              {section5.title}
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-noops-300">
              {section5.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={section5.href}
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

export default DevOps;
