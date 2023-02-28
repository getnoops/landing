import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const tabs = [
  {
    name: "Landing (this site)",
    href: "#",
  },
  {
    name: "NoOps Portal",
    href: "#",
  },
  {
    name: "NoOps Documentation",
    href: "#",
  },
];

const Landing = () => {
  return (
    <pre>
      {`id = "bond-buckets"

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "test-bucket" {
  bucket_name = "contextcloud-bond-test-bucket"
}

resource "aws_s3_bucket" "content-bucket" {
  bucket_name = "contextcloud-bond-content-bucket"
}`}
    </pre>
  );
};
const Portal = () => {
  return (
    <pre>
      {`id = "bond-buckets"

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "test-bucket" {
  bucket_name = "contextcloud-bond-test-bucket"
}

resource "aws_s3_bucket" "content-bucket" {
  bucket_name = "contextcloud-bond-content-bucket"
}`}
    </pre>
  );
};
const Docs = () => {
  return (
    <pre>
      {`id = "bond-buckets"

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "test-bucket" {
  bucket_name = "contextcloud-bond-test-bucket"
}

resource "aws_s3_bucket" "content-bucket" {
  bucket_name = "contextcloud-bond-content-bucket"
}`}
    </pre>
  );
};

const DisplayFile = (name: string) => {
  switch (name) {
    case "Landing (this site)":
      return <Landing />;
    case "NoOps Portal":
      return <Portal />;
    case "NoOps Documentation":
      return <Docs />;
    default:
      return <></>;
  }
};

const Skeptic = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
      <div className="relative lg:order-last lg:col-span-5">
        <svg
          className="absolute -top-44 left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-slate-50/5 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e87443c8-56e4-4c20-9111-55b82fa704e3"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M0.5 0V200M200 0.5L0 0.499983" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
          />
        </svg>
      </div>
      <svg
        viewBox="0 0 801 1036"
        aria-hidden="true"
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 w-[50.0625rem] transform-gpu blur-3xl  sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      >
        <path
          fill="url(#bba7d695-d9bb-4e8a-a43b-2b951b4ac9c0)"
          fillOpacity=".3"
          d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.653 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
        />
        <defs>
          <linearGradient
            id="bba7d695-d9bb-4e8a-a43b-2b951b4ac9c0"
            x1="508.179"
            x2="-28.677"
            y1="-116.221"
            y2="1091.63"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#379AE9" />
            <stop offset={1} stopColor="#39A7F1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Still Skeptic?
          </h1>
          <p className="mt-6 text-xl leading-8 text-sky-200">
            At Context Cloud, we don't just provide NoOps solutions, we live and
            breathe it. That's why we trust our own NoOps platform to manage and
            deploy all of our products with ease and efficiency.
          </p>
          <p className="mt-6 text-xl leading-8 text-sky-200">
            Thats right, we use our own NoOps platform to host the very site you
            are using right now, as well as the NoOps Portal and NoOps
            Documentation Site. This way, you can be assured that we stand
            behind our product and use it ourselves for all our offerings.
          </p>
          <p className="mt-6 text-2xl leading-8 text-sky-300">
            Don't believe us? Here are all our Bond descriptor files for NoOps:
          </p>
        </div>

        <div className="w-full mt-12 bg-slate-800 p-2 rounded-xl text-sky-100">
          <div className="flex sm:text-lg">
            {tabs.map((tab, i) => (
              <div
                onClick={() => setSelectedTab(tab)}
                className={classNames(
                  i == 0 &&
                    selectedTab.name !== tab.name &&
                    "hover:rounded-bl-lg",

                  i == 2 &&
                    selectedTab.name !== tab.name &&
                    "hover:rounded-br-lg",

                  selectedTab.name === tab.name
                    ? "bg-slate-900/50"
                    : "hover:bg-slate-900/30",
                  "flex-1 rounded-t-lg  py-3 px-4 transition cursor-pointer text-slate-300 font-medium"
                )}
              >
                {tab.name}
              </div>
            ))}
          </div>
          <div
            className={classNames(
              selectedTab.name != tabs[0].name && "rounded-tl-lg",
              selectedTab.name != tabs[2].name && "rounded-tr-lg",
              "bg-slate-900/50 p-4 rounded-b-lg transition"
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab.name}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-orange-300 overflow-x-auto"
              >
                {DisplayFile(selectedTab.name)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeptic;
