import { CheckCircleIcon } from "@heroicons/react/24/solid";
import * as RadioGroup from "@radix-ui/react-radio-group";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FC, PropsWithChildren, useState } from "react";
import { Slider } from "../Slider";
import { plans } from "./consts";
import CurvedShape from "./CurvedShape";
import Grid from "./Grid";

const Pricing = () => {
  const [frequency, setFrequency] = useState<"monthly" | "annually">("monthly");
  const [microservices, setMicroservices] = useState<number>(10);
  const [databaseClusters, setDatabaseClusters] = useState<number>(2);

  const proPrice =
    300 + (microservices - 10) * 50 + (databaseClusters - 2) * 50;

  return (
    <>
      <div className="flex items-end justify-between ">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-noops-100 md:text-4xl">
            Plan
          </h1>
          <p className="mt-2 text-sm text-noops-200 md:text-base">
            Start for free, upgrade when you want, with only the features you
            need.
          </p>
        </div>
      </div>

      <div className="my-10 text-white">
        <div className="flex justify-center">
          <RadioGroup.Root
            value={frequency}
            onValueChange={(newFrequency: any) =>
              setFrequency(newFrequency as "monthly" | "annually")
            }
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-accent/80"
          >
            {["monthly", "annually"].map((option) => (
              <RadioGroup.Item
                key={option}
                value={option}
                className={classNames(
                  "relative cursor-pointer rounded-full px-2.5 py-1 transition",
                  option === frequency && "text-white",
                  option !== frequency && "text-accent/80",
                )}
              >
                {option === frequency && (
                  <motion.div
                    className="absolute left-0 top-0 z-0 h-full w-full rounded-full bg-gradient-to-r from-noops-600 to-accent shadow-inner shadow-noops-300"
                    layoutId="planFrequency"
                  />
                )}

                <span className="relative z-10">
                  {option === "monthly" ? "Monthly" : "Annually"}
                </span>
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>
        </div>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {plans.map(({ id, name, description, href }) => (
            <div
              key={id}
              className={classNames(
                id === "free" && "",
                "relative  overflow-clip  rounded-3xl bg-noops-1000 p-8 xl:p-10",
              )}
            >
              {id === "pro" && (
                <>
                  {/* TOP */}
                  <CurvedShape
                    fill="#cab6fc"
                    className="absolute right-0 top-0 w-full origin-top-right scale-75 blur-xl   "
                    flipped
                  />
                  <CurvedShape
                    fill="#8335e9"
                    className="absolute right-0 top-0 w-full origin-top-right scale-125 mix-blend-overlay  blur-xl"
                    flipped
                  />
                  <CurvedShape
                    fill="#ffffff"
                    className="absolute right-0 top-0 w-full origin-top-right  scale-[50%] mix-blend-overlay  blur-2xl "
                    flipped
                  />

                  {/* BOTTOM */}
                  <CurvedShape
                    fill="#cab6fc"
                    className="absolute bottom-0 left-0 w-full origin-bottom-left scale-[60%] blur-xl  "
                  />
                  <CurvedShape
                    fill="#8335e9"
                    className="absolute bottom-0 left-0 w-full origin-bottom-left scale-[100%] mix-blend-overlay  blur-lg"
                  />
                  <CurvedShape
                    fill="#ffffff"
                    className="absolute bottom-0 left-0 w-full origin-bottom-left  scale-[40%] mix-blend-overlay  blur-xl "
                  />
                </>
              )}

              {id === "enterprise" && (
                <>
                  {/* 
                  <CurvedShape
                  fill="#fff4ce"
                  className="absolute right-0 top-0 w-full origin-top-right scale-75 blur-xl    "
                  flipped
                  />
                  <CurvedShape
                  fill="#eeaa5b"
                  className="absolute right-0 top-0 w-full origin-top-right scale-125 mix-blend-overlay blur-xl  "
                  flipped
                  />
                  <CurvedShape
                  fill="#ffeaae"
                  className="absolute right-0 top-0 w-full origin-top-right scale-[50%]  mix-blend-overlay blur-2xl   "
                  flipped
                /> */}

                  <div className="absolute inset-x-0 -top-1/2 mx-auto h-[200%] w-24 rotate-[60deg] bg-[#fff4ce] blur-2xl grayscale  lg:rotate-[31deg]"></div>
                  <div className="absolute inset-x-0 -top-1/2 mx-auto h-[200%] w-48 rotate-[60deg] bg-[#eeaa5b] mix-blend-overlay blur-2xl grayscale  lg:rotate-[31deg]"></div>

                  <div className="absolute inset-0">
                    <Grid className="mx-auto h-full w-full opacity-10 " />
                  </div>
                </>
              )}

              {id === "free" && (
                <>
                  <div className="absolute left-0 top-[90%] h-full w-full rounded-full bg-accent blur-3xl" />
                  <div className="absolute left-0 top-[90%] h-full w-full rounded-full bg-accent mix-blend-overlay blur-3xl" />
                </>
              )}

              {id === "free" && <></>}
              <div className="relative flex items-center justify-between gap-x-4">
                <h3
                  id={id}
                  className={classNames(
                    id === "pro" ? "text-accent" : "",
                    "text-xl font-bold leading-8",
                  )}
                >
                  {name}
                </h3>
              </div>

              <p className="relative mt-4 text-sm leading-6">{description}</p>

              <p className="relative mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tabular-nums tracking-tight">
                  {id === "enterprise"
                    ? " "
                    : id === "free"
                    ? "AU$0"
                    : `AU$${proPrice * (frequency === "annually" ? 10 : 1)}`}
                </span>
                <span className="text-sm font-semibold leading-6">
                  {id !== "enterprise" &&
                    (frequency === "annually" ? "/year" : "/month")}
                </span>
              </p>

              {id === "pro" && (
                <button className="group relative mt-6 inline-block w-full rounded-[10px] border-2 border-noops-700 bg-gradient-to-b from-noops-500 to-noops-600 px-6 py-2 tracking-wide text-white shadow-inner shadow-noops-100/50">
                  <div className="absolute inset-0.5 rounded-md bg-noops-600 shadow-inner shadow-white/20 transition group-hover:opacity-30" />

                  <div className="relative inline-flex  items-center justify-center gap-x-1">
                    Select this plan
                  </div>
                </button>
              )}
              {id === "free" && (
                <button className="group relative mt-6 inline-block w-full rounded-[10px] border-2 border-purple-700 bg-gradient-to-b from-purple-500 to-purple-600 px-6 py-2 tracking-wide text-white shadow-inner shadow-purple-100/50">
                  <div className="absolute inset-0.5 rounded-md bg-purple-600 shadow-inner shadow-white/20 transition group-hover:opacity-30" />

                  <div className="relative inline-flex  items-center justify-center gap-x-1">
                    Select this plan
                  </div>
                </button>
              )}
              {id === "enterprise" && (
                <a
                  href="/contact"
                  className="group relative mt-6 block w-full  rounded-[10px] border-2 border-noops-300 bg-gradient-to-b from-noops-100 to-noops-200 px-6 py-2 text-center tracking-wide text-white shadow-inner shadow-noops-300/20"
                >
                  <div className="absolute inset-0.5 rounded-md bg-noops-200 shadow-inner shadow-noops-300/20 transition group-hover:opacity-30" />

                  <div className="relative inline-flex  items-center justify-center gap-x-1 font-medium text-noops-500">
                    Contact Us
                  </div>
                </a>
              )}

              {id === "pro" && (
                <div className="mt-4">
                  <label className="text-sm" htmlFor="numberOfMicroservices">
                    Add extra micro-services:
                  </label>

                  <Slider
                    className="mb-4 mt-1 cursor-pointer"
                    id="numberOfMicroservices"
                    noopsColor
                    min={10}
                    max={100}
                    step={5}
                    value={[microservices]}
                    onValueChange={([newMicroservices]: any) =>
                      setMicroservices(newMicroservices)
                    }
                  />

                  <label className="text-sm" htmlFor="numberOfDatabaseClusters">
                    Add extra database clusters:
                  </label>

                  <Slider
                    className="mb-4 mt-1 cursor-pointer"
                    id="numberOfDatabaseClusters"
                    noopsColor
                    min={2}
                    max={30}
                    value={[databaseClusters]}
                    onValueChange={([newDatabaseClusters]: any) =>
                      setDatabaseClusters(newDatabaseClusters)
                    }
                  />
                </div>
              )}

              {id !== "enterprise" && (
                <ul className="relative mt-6 space-y-3 text-sm leading-6">
                  <Feature id={id}>
                    {id === "free" ? 5 : microservices} micro-services
                  </Feature>

                  <Feature id={id}>
                    {id === "free" ? 1 : databaseClusters} database cluster
                    {id === "pro" && databaseClusters > 1 ? "s" : ""}
                  </Feature>

                  <Feature id={id}>
                    {id === "free" ? 15 : microservices * 3} S3 buckets
                  </Feature>

                  <Feature id={id}>
                    {id === "free" ? 5 : databaseClusters * 5} databases
                  </Feature>

                  <Feature id={id}>
                    {id === "free" ? "1 environment" : "3 environments"}
                  </Feature>

                  <Feature id={id}>Unlimited developers</Feature>
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

interface FeatureProps {
  id: string;
  children: React.ReactNode;
}

const Feature = ({ id, children }: FeatureProps) => (
  <li className="flex gap-x-3">
    <CheckCircleIcon
      className={classNames(
        id === "free" && "text-accent",
        id === "pro" && "text-accent",
        id === "enterprise" && "text-slate-500",
        "h-6 w-5 flex-none text-noops-500",
      )}
      aria-hidden="true"
    />
    {children}
  </li>
);

export default Pricing;
