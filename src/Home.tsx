import { motion } from "framer-motion";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  Bridge,
  CTA,
  FAQ,
  Features,
  Navbar,
  Pricing,
  RoleSelect,
  Skeptic,
  Steps,
} from "./components";
import {
  BeakerIcon,
  CodeBracketIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

function App() {
  return (
    <div>
      <Navbar />

      <main className="">
        {/* Hero */}
        <div className="relative pt-28 sm:pt-40">
          <div className="py-24 sm:py-32 relative">
            <div className="absolute inset-x-0 top-10 md:-top-10 lg:-top-36 -z-10 flex transform-gpu justify-center overflow-hidden blur-xl scale-y-150 sm:scale-y-100 sm:blur-3xl">
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
            </div>
            <div className="relative mx-auto max-w-7xl px-2 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-6xl md:leading-[4rem]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-t from-slate-600 to-slate-900">
                    Focus on{" "}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3">
                    your product,{" "}
                  </span>{" "}
                  <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-t from-slate-600 to-slate-900">
                    not{" "}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3">
                    your infrastructure
                  </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-700">
                  NoOps allows you to stop worrying about the complexities of
                  infrastructure management so you can focus on creating a
                  product that truly stands out.
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3 px-4 py-3 rounded-md relative cursor-pointer group/button"
                  >
                    <div className="absolute pointer-events-none bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3 blue-xl inset-0 blur-lg opacity-60" />
                    <div className="absolute pointer-events-none bg-sky-50 rounded-[5px] m-px inset-0 group-hover/button:opacity-0 transition" />
                    <span className="relative text-sky-900 font-medium group-hover/button:text-white transition">
                      Experience NoOps
                    </span>
                  </a>

                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-slate-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Bridge />

        {/* Relevant Page */}
        {/* <RoleSelect /> */}

        {/* TODO: Add a clickable link to learn more about Bond */}
        <Steps />

        <Features />

        {/* Testimonials */}

        {/* Heard enough? */}

        {/* Pricing */}
        <Pricing />

        {/* 
          Potential Section: 
            - Still Skeptic?
                This site is deployed with NoOps.
                Here is the bond file.
              */}
        <Skeptic />
        {/* TODO: add a learn more about bond button below skeptic */}

        {/* FAQ? */}
        <FAQ />

        {/* CTA */}
        <CTA />

        {/* Need a footer */}
      </main>
    </div>
  );
}

export default App;
