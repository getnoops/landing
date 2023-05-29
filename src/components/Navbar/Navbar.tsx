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
import classNames from "classnames";
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
        href: "#",
        icon: ChartPieIcon,
        start: "from-green-500",
        end: "to-noops-800",
      },
      {
        name: "DevOps Engineer",
        description:
          "Responsible for DevOps environments used by developers and engineers",
        href: "#",
        icon: CursorArrowRaysIcon,
        start: "from-pink-500",
        end: "to-purple-800",
      },
      {
        name: "Software Engineer",
        description:
          "Responsible for building, maintaining, and delivering software",
        href: "#",
        icon: FingerPrintIcon,
        start: "from-amber-500",
        end: "to-orange-800",
      },
      {
        name: "Dev",
        description: "Dev",
        href: "#",
        icon: SquaresPlusIcon,
        start: "from-red-500",
        end: "to-red-800",
      },
    ],
  },
  {
    name: "Pricing",
    dropdown: false,
    href: "#",
  },
  {
    name: "FAQ",
    dropdown: false,
    href: "#",
  },
];

interface DropdownProps {
  open: null;
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
      enter="transition ease-out duration-200"
      enterFrom="blur-xl"
      enterTo="opacity-100 "
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100"
      leaveTo="blur-xl"
    >
      <div
        ref={ref}
        className=" top-full mx-2 mt-3 rounded-3xl border border-white/30 bg-white bg-opacity-10 py-4  shadow-lg ring-1 ring-gray-900/5 backdrop-blur-lg transition-all sm:mx-4 md:mx-6 lg:mx-12 "
      >
        <h2 className="mx-auto max-w-7xl px-3 text-xl font-bold text-neutral-400">
          Solutions
        </h2>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-4 sm:pb-6 sm:pt-4 lg:grid-cols-4 lg:gap-8">
          {/* {item.solutions &&
      item.solutions.map((solution: any) => (
        <div
          key={solution.name}
          className={classNames(
            solution.start,
            solution.end,
            "group relative -mx-3 flex h-36 cursor-pointer justify-end gap-6 rounded-xl bg-gradient-to-br  p-3 text-sm leading-6 shadow-lg transition sm:flex-col sm:p-6"
          )}
        >
          <div className="absolute inset-y-0 right-0 transition-all group-hover:right-2">
            <solution.icon
              className="h-full w-full text-white/10  transition group-hover:text-white/20"
              aria-hidden="true"
            />
          </div>
          <div className="relative">
            <a href={solution.href} className="font-semibold text-white">
              {solution.name}
              <span className="absolute inset-0" />
            </a>
            <p className="mt-1 text-white opacity-80 ">
              {solution.description}
            </p>
          </div>
        </div>
      ))} */}
        </div>
      </div>
    </Transition>
  );
};

const Navbar = () => {
  const [dropdown, setDropdown] = useState<null | any>(null);

  return (
    <header className="fixed z-50 w-full py-4 ">
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
              <a aria-label="Home" href="/#" className="relative">
                <img
                  src="/logo_smile.svg"
                  alt="Logo"
                  className="ml-3 mt-0.5 h-6 w-auto"
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
                      if (dropdown === item) return;
                      console.log("yo");
                      setDropdown(item);
                    }}
                    className="inline-flex cursor-pointer items-center gap-x-2 rounded-lg px-4 py-1.5 text-sm text-noops-500 transition hover:bg-slate-100 hover:text-slate-800"
                  >
                    {item.name}
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="inline-flex cursor-pointer items-center gap-x-2 rounded-lg px-4 py-1.5 text-sm text-noops-500 transition hover:bg-slate-100 hover:text-slate-800"
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
                className="inline-block rounded-lg px-4 py-1.5 text-sm text-slate-400 transition hover:bg-slate-100 hover:text-slate-800"
                href="/login"
              >
                Sign in
              </a>
            </div>
            <a
              className="group inline-flex items-center justify-center rounded-full bg-noops-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-noops-600 hover:text-noops-50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-noops-500 active:bg-noops-800 active:text-noops-100"
              href="/register"
            >
              Start deploying
            </a>
          </div>
        </nav>
      </div>

      <Dropdown open={dropdown} setOpen={setDropdown} />
    </header>
  );
};

export default Navbar;
