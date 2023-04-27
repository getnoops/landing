import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
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

const Bridge = () => {
  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <span className="bg-gradient-to-t from-slate-600 to-slate-900 bg-clip-text text-transparent">
            The Bridge
          </span>
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          NoOps acts as a bridge between your application and end-users by
          automating your infrastructure and ensuring your application runs
          <span className="font-medium italic text-sky-600"> smoothly </span>
          and
          <span className="font-medium italic text-sky-600"> securely</span>,
          without the need for a dedicated operations team.
        </p>

        <div>
          <div className="mt-10 flex items-center justify-center text-white">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gradient-to-br from-gray-600 via-slate-800 to-slate-900 shadow-md sm:h-24 sm:w-24">
              <div className="relative h-full w-full">
                <CodeBracketIcon className="absolute p-1 text-white opacity-100 blur-md sm:p-5" />
                <CodeBracketIcon className="absolute p-1 text-sky-50 sm:p-5" />
              </div>
            </div>
            <div className="relative h-4 flex-1">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={lineVariants}
                className="absolute right-0 top-0 h-4 w-full bg-gradient-to-r from-gray-700 via-gray-400 to-gray-400"
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={noOpVariants}
              viewport={{ once: true }}
              className="flex h-16 w-16 items-center justify-center rounded-md bg-gradient-to-br from-gray-600 via-slate-800 to-slate-900 shadow-md sm:h-24 sm:w-24"
            >
              <NoOpsSymbol className="absolute p-6 text-white opacity-80 blur-md sm:p-5" />
              <NoOpsSymbol className="absolute p-6 text-sky-50 sm:p-5" />
            </motion.div>
            <div className="relative h-4 flex-1">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={lineVariants}
                className="absolute left-0 top-0 h-4 w-full bg-gradient-to-r from-gray-400 via-gray-400 to-gray-700"
              />
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gradient-to-br from-gray-600 via-slate-800 to-slate-900 shadow-md sm:h-24 sm:w-24">
              <div className="relative h-full w-full">
                <GlobeAltIcon className="absolute p-1 text-white opacity-80 blur-md sm:p-5" />
                <GlobeAltIcon className="absolute p-1 text-sky-50 sm:p-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridge;
