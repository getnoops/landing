import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import { Variants, motion } from "framer-motion";

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

const devTech = [
  {
    name: "Svelte",
    logo: "logos/svelte.png",
  },
  {
    name: "NextJS",
    logo: "logos/nextjs.svg",
  },
  {
    name: "Nuxt",
    logo: "logos/nuxt.png",
  },
];

const cloudTech = [
  {
    name: "GCP",
    logo: "logos/gcp.webp",
  },
  {
    name: "AWS",
    logo: "logos/aws.png",
  },
  {
    name: "Azure",
    logo: "logos/azure.png",
  },
];

// - mt because we want to move the section up as there is a transition gradient element above this one that we want to go over.

interface BridgeProps {
  title?: string;
  description?: string;
}

const Bridge = ({ title, description }: BridgeProps) => {
  return (
    <section className="relative -mt-[40rem] px-6 py-24 sm:py-32 md:-mt-144 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <span className="bg-gradient-to-t from-slate-600 to-slate-900 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>

        <div>
          <div className="mt-10 flex items-center justify-center text-white">
            <div className="relative flex items-center justify-around gap-2 rounded-xl bg-gradient-to-br sm:h-96 sm:gap-1 md:gap-4 lg:gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-100 bg-white bg-gradient-to-br shadow-md sm:h-24 sm:w-24">
                <div className="relative h-full w-full transition hover:scale-105">
                  <CodeBracketIcon className="absolute p-2 text-noops-600 opacity-100 blur-md sm:p-5" />
                  <CodeBracketIcon className="absolute p-2 text-noops-600 sm:p-5" />
                </div>
              </div>

              <div className="absolute left-20 flex h-full flex-col items-center justify-center gap-2 sm:left-32 sm:gap-1 md:gap-4 lg:gap-6">
                {devTech.map(({ name, logo }) => (
                  <div className="relative z-10 flex aspect-square h-12 items-center justify-center rounded-xl border border-slate-100 bg-white text-black shadow-lg transition hover:scale-105 sm:h-16 md:h-20">
                    <img
                      className="h-full object-contain p-3 sm:p-5"
                      key={name}
                      alt={name}
                      src={logo}
                    />
                  </div>
                ))}
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
              className="relative flex items-center justify-around gap-2 rounded-xl bg-gradient-to-br sm:h-96 sm:gap-1 md:gap-4 lg:gap-6"
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 sm:gap-1 md:gap-4 lg:gap-6">
                <div className="relative z-10 flex aspect-square h-16 items-center justify-center rounded-xl border border-slate-100 bg-white text-black shadow-lg transition hover:scale-110 sm:h-20 md:h-28">
                  <img
                    src="/logo_symbol.svg"
                    className="absolute h-full object-contain p-1 opacity-80 blur-md sm:p-5"
                  />

                  <img
                    src="/logo_symbol.svg"
                    className=" h-full object-contain p-3 sm:p-5"
                  />
                </div>
              </div>
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

            <div className="relative flex items-center justify-around gap-2 rounded-xl bg-gradient-to-br sm:h-96 sm:gap-1 md:gap-4 lg:gap-6">
              <div className="absolute right-20 flex h-full flex-col items-center justify-center gap-2 sm:right-32 sm:gap-1 md:gap-4 lg:gap-6">
                {cloudTech.map(({ name, logo }) => (
                  <div className="relative z-10 flex aspect-square h-12 items-center justify-center rounded-xl border border-slate-100 bg-white text-black shadow-lg transition hover:scale-105 sm:h-16 md:h-20">
                    <img
                      className="h-full object-contain p-3 sm:p-5"
                      key={name}
                      alt={name}
                      src={logo}
                    />
                  </div>
                ))}
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-100 bg-white bg-gradient-to-br shadow-md sm:h-24 sm:w-24">
                <div className="relative h-full w-full transition hover:scale-105">
                  <GlobeAltIcon className="absolute p-2 text-noops-600 opacity-80 blur-md sm:p-5" />
                  <GlobeAltIcon className="absolute p-2 text-noops-600  sm:p-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridge;
