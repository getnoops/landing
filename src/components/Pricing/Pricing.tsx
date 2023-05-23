import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { motion } from "framer-motion";
import React, { useState } from "react";

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "#",
    price: { monthly: "$12", annually: "$120" },
    description: "Everything you need to get started with your project.",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    featured: false,
    cta: "Purchase",
  },
  {
    name: "Scale",
    id: "tier-scale",
    href: "#",
    price: { monthly: "$25", annually: "$250" },
    description: "Everything you need to scale your project to the next level.",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    featured: false,
    cta: "Purchase",
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: "Get in touch",
    description: "Got a large team? We can help you scale your project.",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
      "Feature 5",
      "Feature 6",
    ],
    featured: true,
    cta: "Contact",
  },
];

const Pricing = () => {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute -left-1/2 bottom-1/2 right-1/2 top-0 -rotate-45 rounded-full bg-gradient-to-r from-noops-600 to-noops-800 opacity-50 blur-3xl" />
      <div className="absolute -right-1/2 bottom-0 left-1/2 top-1/2 -rotate-45 rounded-full bg-gradient-to-r from-noops-800 to-noops-600 opacity-50 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-noops-600">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
              Transparent Pricing that Scales with You
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600">
            We offer a range of pricing options that cater to individual
            developers and enterprises of all sizes.
          </p>
          <div className="mt-16 flex justify-center">
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
          </div>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "border-slate-900 bg-slate-900"
                    : "border-slate-100 bg-white bg-opacity-50 backdrop-blur-md ",
                  "rounded-3xl border p-8 xl:p-10"
                )}
              >
                <p className="mb-6 flex items-baseline gap-x-1 font-mono">
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
                </p>

                <h3
                  id={tier.id}
                  className={classNames(
                    tier.featured ? "text-white" : "text-slate-800",
                    "text-lg font-semibold leading-8"
                  )}
                >
                  {tier.name}
                </h3>

                <p
                  className={classNames(
                    tier.featured ? "text-slate-300" : "text-slate-600",
                    "mt-4 leading-6"
                  )}
                >
                  {tier.description}
                </p>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
