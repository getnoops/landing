import React from "react";
import {
  ArrowPathIcon,
  BeakerIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import {
  ClockIcon,
  CloudIcon,
  CodeBracketSquareIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Automatically deploy changes to your application as soon as they are ready, with no downtime and no manual intervention required.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Advanced security.",
    description:
      "Protect your application and data with modern industry security standards.",
    icon: FingerPrintIcon,
  },
  {
    name: "24/7 monitoring and alerting.",
    description:
      "Monitor your application's performance and health around the clock, with real-time alerts and notifications to keep you informed.",
    icon: ClockIcon,
  },
  {
    name: "Automated backups and disaster recovery.",
    description:
      "Protect your data and ensure business continuity with automated backups and disaster recovery features.",
    icon: ServerIcon,
  },
  {
    name: "Automated testing and quality assurance.",
    description:
      "Ensure code quality and prevent issues with automated testing and quality assurance features, including unit tests and integration tests.",
    icon: BeakerIcon,
  },
  {
    name: "Multi-region deployment.",
    description:
      " Deploy your application to multiple regions and data centers around the world, for increased availability and reduced latency.",
    icon: GlobeAltIcon,
  },
];

const Features = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 w-full rounded-full bg-gradient-to-r from-noops-900  to-noops-900 opacity-20 blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-noops-400">
              What about Ops?
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Painless Operations Management
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Gone are the days of manual infrastructure management. Rest easy
              knowing that your infrastructure is being managed automatically
            </p>
          </div>
        </div>
        <div className="relative mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-slate-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-noops-500"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="block">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
