import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { motion, Variants } from "framer-motion";
import React from "react";
import { NoOpsSymbol } from "../NoOpsSymbol";

const noOpVariants: Variants = {
  hidden: { opacity: 0, y: 0, scale: 0 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.2, duration: 0.3 },
  },
};

const lineVariants: Variants = {
  hidden: { y: 0, width: "0%" },
  visible: {
    y: 0,
    width: "100%",
    transition: { delay: 0.6, duration: 0.3 },
  },
};

// DevOps Techonlogies
const technologies = [
  [
    {
      name: "Kubernetes",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png",
    },
    {
      name: "Docker",
      logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png.webp",
    },
    {
      name: "Terraform",
      logo: "https://www.datocms-assets.com/2885/1620155116-brandhcterraformverticalcolor.svg",
    },
  ],

  [
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      name: "GCP",
      logo: "https://www.gend.co/hs-fs/hubfs/gcp-logo-cloud.png?width=730&name=gcp-logo-cloud.png",
    },
    {
      name: "Azure",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png",
    },
    {
      name: "Ansible",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/1200px-Ansible_logo.svg.png",
    },
  ],
  [
    {
      name: "Slack",
      logo: "https://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png",
    },
    {
      name: "NoOps",
      logo: "/logo_symbol.svg",
    },
    {
      name: "Jenkins",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png",
    },
  ],
  [
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      name: "GCP",
      logo: "https://www.gend.co/hs-fs/hubfs/gcp-logo-cloud.png?width=730&name=gcp-logo-cloud.png",
    },
    {
      name: "Azure",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png",
    },
    {
      name: "Ansible",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/1200px-Ansible_logo.svg.png",
    },
  ],
  [
    {
      name: "Kubernetes",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png",
    },
    {
      name: "Docker",
      logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png.webp",
    },
    {
      name: "Terraform",
      logo: "https://www.datocms-assets.com/2885/1620155116-brandhcterraformverticalcolor.svg",
    },
  ],
];

const Bridge = () => {
  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <span className="bg-gradient-to-t from-slate-600 to-slate-900 bg-clip-text text-transparent">
            The Bridge
          </span>
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          NoOps acts as a bridge between your application and end-users by
          automating your infrastructure and ensuring your application runs
          <span className="font-medium italic text-noops-600"> smoothly </span>
          and
          <span className="font-medium italic text-noops-600"> securely</span>,
          without the need for a dedicated operations team.
        </p>

        <div>
          <div className="mt-10 flex items-center justify-center text-white">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-100 bg-white bg-gradient-to-br shadow-md sm:h-24 sm:w-24">
              <div className="relative h-full w-full">
                <CodeBracketIcon className="absolute p-1 text-noops-600 opacity-100 blur-md sm:p-5" />
                <CodeBracketIcon className="absolute p-1 text-noops-600 sm:p-5" />
              </div>
            </div>
            <div className="relative h-4 flex-1">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={lineVariants}
                className="absolute right-0 top-0 h-4 w-full bg-gradient-to-r from-noops-300 via-noops-200 to-noops-100"
              />
            </div>

            <motion.div
              initial="visible"
              whileInView="visible"
              variants={noOpVariants}
              viewport={{ once: true }}
              className="flex w-28 items-center justify-around gap-6 rounded-xl bg-gradient-to-br sm:h-96"
            >
              {technologies.map((tech, i) => (
                <div
                  className={classNames(
                    "flex h-full flex-col items-center justify-center gap-6"
                  )}
                >
                  {tech.map((t) => (
                    <div
                      className={classNames(
                        t.name === "NoOps" ? "h-28 w-28" : "h-20 w-20",
                        "relative z-10 flex items-center justify-center rounded-xl border border-slate-100 bg-white text-black shadow-lg"
                      )}
                    >
                      {t.name === "NoOps" && (
                        <img
                          src={t.logo}
                          className="absolute h-full object-contain p-5 opacity-80 blur-md "
                        />
                      )}
                      <img
                        src={t.logo}
                        className=" h-full object-contain p-5"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>

            <div className="relative h-4 flex-1">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={lineVariants}
                className="absolute left-0 top-0 h-4 w-full bg-gradient-to-r from-noops-100 via-noops-200 to-noops-300"
              />
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-100 bg-white bg-gradient-to-br shadow-md sm:h-24 sm:w-24">
              <div className="relative h-full w-full">
                <GlobeAltIcon className="absolute p-1 text-noops-600 opacity-80 blur-md sm:p-5" />
                <GlobeAltIcon className="absolute p-1 text-noops-600 sm:p-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridge;
