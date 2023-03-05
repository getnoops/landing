import React from "react";
import { Link } from "react-router-dom";

const RoleSelect = () => {
  return (
    <div className="bg-gray-900 overflow-hidden">
      <div className="relative mx-auto max-w-7xl py-24 sm:px-6 sm:py-24 lg:px-8">
        <div className=" isolate overflow-hidden px-6 text-center sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get information relevant to your role
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            To see more information about the product, select your role below
          </p>
          <p className="mx-auto mt-2 max-w-xl text-lg leading-8 text-gray-300">
            I am a...
          </p>
          <div className="flex my-4 items-center justify-center gap-x-16">
            <Link
              to="#"
              className="bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3 px-4 py-3 rounded-md relative cursor-pointer group/button"
            >
              <div className="absolute pointer-events-none bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3 blue-xl inset-0 blur-md opacity-60" />
              <div className="absolute pointer-events-none bg-sky-50 rounded-[5px] m-px inset-0 group-hover/button:opacity-0 transition" />
              <span className="relative text-sky-900 font-medium group-hover/button:text-white transition">
                Developer
              </span>
            </Link>
            <Link
              to="#"
              className="bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3 px-4 py-3 rounded-md relative cursor-pointer group/button"
            >
              <div className="absolute pointer-events-none bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3 blue-xl inset-0 blur-md opacity-60" />
              <div className="absolute pointer-events-none bg-sky-50 rounded-[5px] m-px inset-0 group-hover/button:opacity-0 transition" />
              <span className="relative text-sky-900 font-medium group-hover/button:text-white transition">
                Developer
              </span>
            </Link>
            <Link
              to="#"
              className="bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3 px-4 py-3 rounded-md relative cursor-pointer group/button"
            >
              <div className="absolute pointer-events-none bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3 blue-xl inset-0 blur-md opacity-60" />
              <div className="absolute pointer-events-none bg-sky-50 rounded-[5px] m-px inset-0 group-hover/button:opacity-0 transition" />
              <span className="relative text-sky-900 font-medium group-hover/button:text-white transition">
                Developer
              </span>
            </Link>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6"></div>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Or... continue scrolling to see more general information
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelect;
