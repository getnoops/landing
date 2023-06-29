import { Popover, Transition } from "@headlessui/react";
import {
  ChartPieIcon,
  ChevronDownIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { CodeBracketIcon, ServerStackIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import React, { Fragment, useEffect, useRef, useState } from "react";

const nav = [
  {
    name: "Solutions",
    dropdown: true,
    solutions: [
      {
        name: "CxO / Head of Application or Engineering",
        description:
          "For those that manage efficiencies and costs of a team or group",
        href: "/solutions/cxo",
        icon: ChartPieIcon,
        start: "from-green-500",
        end: "to-noops-800",
      },
      {
        name: "DevOps Engineer",
        description:
          "Responsible for DevOps environments used by developers and engineers",
        href: "/solutions/devops",
        icon: ServerStackIcon,
        start: "from-pink-500",
        end: "to-purple-800",
      },
      {
        name: "Software Engineer",
        description:
          "Responsible for building, maintaining, and delivering software",
        href: "/solutions/software-engineer",
        icon: CodeBracketIcon,
        start: "from-amber-500",
        end: "to-orange-800",
      },
    ],
  },
  {
    name: "Values",
    dropdown: false,
    href: "#",
  },
  {
    name: "Contact",
    dropdown: false,
    href: "#",
  },
];

interface DropdownProps {
  open: null | any;
  setOpen: React.Dispatch<React.SetStateAction<null>>;
}

const Dropdown = ({ open, setOpen }: DropdownProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(null);
      }
    }

    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  return (
    <Transition
      show={open != null}
      enter="transition-all ease-out duration-200"
      enterFrom="opacity-0 -translate-y-2"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-2"
      className="mt-3 max-w-7xl rounded-3xl backdrop-blur-lg transition-all duration-1000"
    >
      <div
        ref={ref}
        className=" max-h-144 overflow-y-auto  rounded-3xl border border-accent/30 bg-accent bg-opacity-[0.15] shadow-lg shadow-accent/10 ring-1 ring-gray-900/5 "
      >
        <AnimatePresence>
          {open?.solutions && (
            <motion.div exit={{ opacity: 0 }} className="p-5">
              <h2 className="mx-auto max-w-7xl text-xl font-bold text-noops-400">
                {open?.name}
              </h2>
              <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 pt-2 sm:grid-cols-2 lg:grid-cols-3">
                {open?.solutions.map((solution: any) => (
                  <a
                    key={solution.name}
                    href={solution.href}
                    onClick={() => setOpen(null)}
                    className={classNames(
                      solution.start,
                      solution.end,
                      "group relative flex h-36 cursor-pointer items-center gap-6 rounded-xl bg-gradient-to-br p-3  text-sm leading-6 shadow-lg transition sm:flex-col sm:justify-end sm:p-6"
                    )}
                  >
                    <div className="absolute inset-y-0 right-0 transition-all group-hover:right-2">
                      <solution.icon
                        className="h-full w-full text-white/10  transition group-hover:text-white/20"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="relative">
                      <h5 className="font-semibold text-white">
                        {solution.name}
                      </h5>
                      <p className="mt-1 text-white opacity-80 ">
                        {solution.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Transition>
  );
};

const Navbar = () => {
  const [dropdown, setDropdown] = useState<null | any>(null);

  return (
    <header className="absolute z-50 w-full  py-4 ">
      <div
        className="mx-2 rounded-full border border-noops-500/30 bg-noops-600 bg-opacity-10 px-1.5 py-1.5 backdrop-blur-lg transition-all duration-1000 sm:mx-4 md:mx-6 lg:mx-12"
        id="header"
      >
        {/* <div className="absolute inset-0 bg-noops-600 opacity-5 blur-md"></div> */}
        <nav className="  z-50 flex items-center justify-between lg:grid lg:grid-cols-3">
          <div className="bottom-0 flex flex-shrink-0 items-center">
            <div className="relative z-50">
              {/* <div className="absolute -bottom-1/2 -right-1/4 select-none rounded-full bg-noops-200 px-3 text-sm text-noops-500 opacity-70">
                alpha
              </div> */}
              <a aria-label="Home" href="/" className="relative">
                <img
                  src="/logo_smile.svg"
                  alt="Logo"
                  className="ml-3 mt-0.5 h-6 w-auto "
                />
              </a>
            </div>
          </div>
          <div className="hidden flex-grow justify-center md:flex md:gap-x-3 lg:gap-x-6">
            {nav.map((item) => (
              <React.Fragment key={item.name}>
                {item.dropdown ? (
                  <button
                    onClick={() => {
                      setDropdown(item);
                    }}
                    className="inline-flex cursor-pointer items-center gap-x-2 rounded-full border border-transparent px-4 py-1.5 text-sm text-noops-500 transition hover:border-noops-500/60 hover:bg-noops-600 hover:bg-opacity-10 hover:shadow-lg hover:shadow-noops-400/10 focus-visible:outline focus-visible:outline-noops-500/60"
                  >
                    {item.name}
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="inline-flex cursor-pointer items-center gap-x-2 rounded-full border border-transparent px-4 py-1.5 text-sm text-noops-500 transition hover:border-noops-500/60 hover:bg-noops-600 hover:bg-opacity-10 hover:shadow-lg hover:shadow-noops-400/10 focus-visible:outline focus-visible:outline-noops-500/60"
                  >
                    {item.name}
                  </a>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-shrink items-center justify-end gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <a
                className="inline-flex cursor-pointer items-center gap-x-2 rounded-full border border-transparent px-4 py-1.5 text-sm text-neutral-100 transition hover:border-white/60 hover:bg-white hover:bg-opacity-30 hover:shadow-lg hover:shadow-white/10 focus-visible:outline focus-visible:outline-white/60"
                href="/login"
              >
                Sign in
              </a>
            </div>

            <button className="mr-0.5 inline-flex cursor-pointer items-center gap-x-2 rounded-full border border-transparent p-1.5 text-sm text-neutral-100 transition hover:border-white/60 hover:bg-white hover:bg-opacity-30 hover:shadow-lg hover:shadow-white/10 focus-visible:outline focus-visible:outline-white/60 md:hidden">
              <Bars3Icon className="h-7" />
            </button>
          </div>
        </nav>
      </div>

      <div className="flex w-full justify-center px-2 transition-all duration-1000 sm:px-4 md:px-6 lg:px-12">
        <Dropdown open={dropdown} setOpen={setDropdown} />
      </div>
    </header>
  );
};

export default Navbar;
