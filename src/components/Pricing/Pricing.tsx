import { RadioGroup } from "@headlessui/react";
import { ClockIcon } from "@heroicons/react/20/solid";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  CubeIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { motion } from "framer-motion";
import React, { useState } from "react";

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];

const tiers = [
  {
    name: "Free Tier >",
    id: "tier-free",
    href: "#",
    price: { monthly: "$??", annually: "$??" },
    description: "A free playground to experience zero-effort deployments in your development workflow.",
    description2: "A free playground to try our platform and its features for 30 days.",
    description3: "Get hooked on our platform in 30 days for free.",
    descriptionLong: "TBC",
    features: [
      "No commitments, no Credit Cards",
      "Limited resource types available",
      "Limited number of resources can be provisioned",
      "Limited to 30 days",
      "Not suitable for Production workloads",
      "Full knowledge base access",
      "Best-effort online support"
    ],
    featured: false,
    cta: "Start Deploying",

    iconBg: "bg-noops-200",
    iconBorder: "border-noops-300",
    iconColor: "text-noops-600",
    Icon: CubeTransparentIcon,
  },
  {
    name: "Starter >",
    id: "tier-starter",
    href: "#",
    price: { monthly: "$??", annually: "$??" },
    description: "Everything you need to run Production workloads in the Cloud. Best suited for Startups and SMBs.",
    features: [
      "Zero-trust security",
      "No minimum resource commitments", 
      "Online support via ServiceDesk",
      "Backup/restore",
      "DR",
      "Access to NoOps Marketplace"
    ],
    featured: false,
    cta: "Sign Up",

    iconBg: "bg-noops-200",
    iconBorder: "border-noops-300",
    iconColor: "text-noops-600",
    Icon: CubeIcon,
  },
  {
    name: "Scale-Up >",
    id: "tier-scale",
    href: "#",
    price: { monthly: "$??", annually: "$??" },
    description: "All Starter feaures plus extras, needed for larger organisations. By committing to run 20 resources monthly you get a discounted management fee.",
    features: [
      "SSO",
      "Infrastructure Scheduler. Turn your infra on/off and save",
      "Advanced cost reporting and forecasts",
      "Multi-region environments",
      "Sell on NoOps Marketplace"
    ],
    featured: false,
    cta: "Sign Up",

    iconBg: "bg-noops-200",
    iconBorder: "border-noops-300",
    iconColor: "text-noops-600",
    Icon: CubeIcon,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: "Get in touch",
    description: "All Scale-up features plus additional compliance and audit controls.",
    features: [
      "Multi-cloud features",
      "Advanced networking (connectivity with on-prem/DC)",
      "Advanced compliance controls and reporting",
      "9/7 phone support"
    ],
    featured: false,
    cta: "Contact",

    iconBg: "bg-slate-800",
    iconBorder: "border-slate-400",
    iconColor: "text-slate-400",
    Icon: BriefcaseIcon,
  },
];

interface PricingProps {
  title: string;
  subtitle: string;
}

const Pricing = ({ title, subtitle }: PricingProps) => {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div
        className="absolute inset-0 transform-gpu blur-3xl"
        aria-hidden="true"
      >
        <div
          className="h-full w-full bg-gradient-to-r from-noops-600 to-accent opacity-25"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        ></div>
      </div>

      <div
        className="absolute inset-0 transform-gpu blur-3xl"
        aria-hidden="true"
      >
        <div
          className="h-full w-full rotate-12 bg-gradient-to-r from-blue-600  opacity-25"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-base font-semibold leading-7 text-noops-600">
              {subtitle}
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
              {title}
            </p>
          </div>


          <div className="mx-auto mt-6 flex max-w-3xl items-center gap-x-2 rounded-xl border border-noops-500/30 bg-noops-600 bg-opacity-10 p-4 text-noops-800">
            <div className="flex-initial">
              <ExclamationTriangleIcon className="h-14 w-14 " />
            </div>
            <div className="flex-1 sm:text-lg">
              Our pricing model is still Work in Progress, but it will
              look something like this:
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600">
            We pass on the Cloud cost to you as-is. <br/>
            We charge a small management fee on top of it and it gets cheaper as you grow.
          </p>

          {/* <div className="mt-16 flex justify-center">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-slate-200"
            >
              <RadioGroup.Label className="sr-only">
                Payment frequency
              </RadioGroup.Label>
              {frequencies.map((option) => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({ checked }) =>
                    classNames(
                      checked ? "text-white" : "text-slate-500",
                      "relative cursor-pointer rounded-full px-2.5 py-1 transition"
                    )
                  }
                >
                  {({ checked }) => (
                    <>
                      {checked && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-noops-600"
                          layoutId="checked_bg"
                        />
                      )}
                      <span className="relative">{option.label}</span>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
            </div> */}


          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "border-slate-900 bg-slate-900"
                    : "border-slate-200/50 bg-white bg-opacity-50 shadow-lg shadow-slate-100 backdrop-blur-md ",
                  "rounded-3xl border p-8 xl:p-10"
                )}
              >
                {/* <p className="mb-6 flex items-baseline gap-x-1 font-mono">
                  <span
                    className={classNames(
                      tier.featured ? "text-white" : "text-slate-800",
                      "text-4xl font-bold tracking-tight"
                    )}
                  >
                    {typeof tier.price === "string"
                      ? tier.price
                      : tier.price[frequency.value as "monthly" | "annually"]}
                  </span>
                  {typeof tier.price !== "string" ? (
                    <span
                      className={classNames(
                        tier.featured ? "text-slate-300" : "text-slate-600",
                        "text-sm font-semibold leading-6"
                      )}
                    >
                      {frequency.priceSuffix}
                    </span>
                  ) : null}
                </p> */}

                <h3
                  id={tier.id}
                  className={classNames(
                    tier.featured ? "text-white" : "text-slate-800",
                    "text-2xl font-semibold leading-8"
                  )}
                >
                  {tier.name}
                </h3>

                {/* <div
                  className={classNames(
                    tier.iconBg,
                    tier.iconBorder,
                    "my-3 flex items-center justify-center rounded-xl border border-opacity-20 bg-opacity-60 p-4"
                  )}
                >
                  <tier.Icon
                    className={classNames(
                      tier.iconColor,
                      "h-1/2 w-1/2 text-opacity-30"
                    )}
                  />
                </div> */}

                <p
                  className={classNames(
                    tier.featured ? "text-slate-300" : "text-slate-600",
                    "mt-4 leading-6"
                  )}
                >
                  {tier.description}
                </p>
                
                <ul
                  role="list"
                  className={classNames(
                    tier.featured ? "text-slate-300" : "text-slate-600",
                    "mt-8 space-y-3 text-sm leading-6 xl:mt-10"
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon
                        className={classNames(
                          tier.featured ? "text-white" : "text-noops-600",
                          "h-6 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul> 

                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.featured
                      ? "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
                      : "bg-noops-500 text-white shadow-sm hover:bg-noops-400 focus-visible:outline-noops-500",
                    "mt-6 block rounded-full px-3 py-2 text-center text-sm font-semibold leading-6 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  )}
                >
                  {tier.cta}
                </a> 

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
