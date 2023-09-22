import { motion, Variants } from "framer-motion";
import React from "react";
import AWSGraphic from "./AWSGraphic/AWSGraphic";

const variants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(0px)",
  },
  animate: {
    opacity: [0, 1, 1, 0],
    filter: [
      "blur(20px)",
      "blur(20px)",
      "blur(10px)",
      "blur(5px)",
      "blur(0px)",
    ],
    transition: {
      duration: 2.5,
      opacity: {
        duration: 3,
      },
    },
  },
};

const AWSManaged = () => {
  return (
    <section className="relative -mt-[40rem] overflow-x-clip px-6 py-24 sm:py-32 md:-mt-144 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          <span className="bg-gradient-to-t from-slate-600 to-slate-900 bg-clip-text text-transparent">
            AWS{" "}
          </span>
          <span className="bg-gradient-to-r from-noops-600 to-accent bg-clip-text text-transparent">
            Supercharged
          </span>
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          We handle AWS intricacies and complexity for you, ensuring optimal
          performance and security.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl ">
        <div className="absolute -inset-4  rounded-[32px] border border-noops-200 bg-noops-600 bg-opacity-5"></div>
        {/* maybe */}
        {/* <div className="absolute inset-x-0 top-1/2 h-1/2 bg-gradient-to-r from-noops-600 to-accent blur-3xl"></div> */}

        <div className="relative w-full overflow-clip rounded-2xl border border-noops-100 bg-noops-1000 px-4 py-6 opacity-100 shadow-lg shadow-noops-200  md:px-6 md:py-16">
          <div className=" pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20"></div>
          <div className="relative mx-auto md:w-[80%]">
            <motion.div
              variants={variants}
              initial="hidden"
              // animate="animate"
              className="absolute top-[46.2%] aspect-square w-[12.5%] overflow-hidden rounded-[12%] bg-accent blur-md"
            >
              <motion.div className="absolute inset-0 "></motion.div>
            </motion.div>
            <AWSGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AWSManaged;
