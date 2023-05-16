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
import React, { Fragment, useState } from "react";

const nav = [
  {
    name: "Solutions",
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
  },
  {
    name: "FAQ",
  },
];

const NavItem = ({ item }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover key={item.name} className="z-50">
      <div className="mx-auto px-2">
        <Popover.Button className="inline-flex cursor-pointer items-center gap-x-2 rounded-lg px-4 py-1.5 text-sm text-noops-700 transition hover:bg-slate-100 hover:text-slate-900">
          {item.name}
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute left-0 top-full w-screen cursor-pointer bg-white py-4 shadow-lg ring-1 ring-gray-900/5">
          <h2 className="mx-auto max-w-7xl px-3 text-xl font-bold text-slate-900">
            Solutions
          </h2>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-4 sm:pb-6 sm:pt-4 lg:grid-cols-4 lg:gap-8">
            {item.solutions &&
              item.solutions.map((solution: any) => (
                <div
                  key={solution.name}
                  className={classNames(
                    solution.start,
                    solution.end,
                    "group relative -mx-3 flex h-36 justify-end gap-6 rounded-xl bg-gradient-to-br  p-3 text-sm leading-6 shadow-lg transition sm:flex-col sm:p-6"
                  )}
                >
                  <div className="absolute inset-y-0 right-0 transition-all group-hover:right-2">
                    <solution.icon
                      className="h-full w-full text-white/10  transition group-hover:text-white/20"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="relative">
                    <a
                      href={solution.href}
                      className="font-semibold text-white"
                    >
                      {solution.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-white opacity-80 ">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

const Navbar = () => {
  return (
    <header className="fixed z-50 w-full bg-opacity-5 py-5  backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className=" z-50 flex justify-between">
          <div className="bottom-0 flex items-center md:gap-x-12">
            <div className="relative z-50">
              <div className="absolute -bottom-1/2 -right-1/4 select-none rounded-full bg-noops-200 px-3 text-sm text-noops-500">
                alpha
              </div>
              <a aria-label="Home" href="/#" className="relative">
                <img src="/logo_smile.svg" alt="Logo" className="h-8 w-auto" />
              </a>
            </div>

            <div className="hidden md:flex md:gap-x-6">
              {nav.map((item) => (
                <NavItem item={item} />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <a
                className="inline-block rounded-lg px-4 py-1.5 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
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
    </header>
  );
};

export default Navbar;
