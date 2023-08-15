import { ArrowRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import Blob from "./Blob/Blob";

const Links = [
  {
    title: "PRODUCT",
    links: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Leaders",
        href: "/leaders",
      },
    ],
  },
  {
    title: "INFO",
    links: [
      {
        title: "Docs",
        href: "https://hub.getnoops.com/",
      },
      {
        title: "Pricing",
        href: "/pricing",
      },
    ],
  },
  {
    title: "COMPANY",
    links: [
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-noops-1000 overflow-clip">
      <div className="min-h-[28rem]   mx-auto relative text-white ">
        <div className="relative z-10 grid sm:grid-cols-4 px-16 py-24 gap-8 sm:gap-4">
          <div className="">
            <img
              src="/logo_smile.svg"
              alt="logo"
              className=" h-10"
              draggable={false}
            />
          </div>
          <div className="col-span-3 gap-8 sm:gap-4 grid grid-cols-2 lg:grid-cols-3">
            {Links.map((link) => (
              <div className="">
                <div>
                  <h6 className="text-base  text-noops-300 tracking-[0.25rem] UPPERCASE">
                    {link.title}
                  </h6>
                  <div className="w-full max-w-[200px] mt-1 h-px bg-noops-300"></div>
                </div>

                <div className="space-y-4">
                  {link.links.map((l) => (
                    <a
                      href={l.href}
                      className="mt-4 text-base flex group items-center gap-x-2 tracking-wide text-noops-200 transition hover:text-noops-400 max-w-fit"
                    >
                      {l.title}
                      <ArrowRightIcon className="h-5 opacity-0 transition group-hover:opacity-100 text-noops-200 group-hover:text-noops-400" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* BLOB */}
        <div className="absolute inset-0 ">
          <div className="absolute w-full h-144 top-[80%] -left-[80%] sm:top-[60%] sm:-left-[20%] lg:top-1/2 lg:-left-[5%] flex items-center justify-center">
            <Blob
              className="absolute blur-[120px]  h-[100%] left-0"
              fill="#ae8cf8"
            />
            <Blob
              className="absolute blur-[120px] mix-blend-overlay h-[100%] left-0"
              fill="#cab6fc"
            />
            <Blob
              className="absolute blur-[120px]  h-[50%] mix-blend-overlay left-0"
              fill="#ece7fe"
            />

            {/* <div className="absolute -inset-[100%] bg-black opacity-10  mix-blend-overlay"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
