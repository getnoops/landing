import React from "react";
import { Link } from "react-router-dom";

const RoleSelect = () => {
  return (
    <div className="overflow-hidden bg-gray-900">
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
          <div className="my-4 flex items-center justify-center gap-x-16">
            <Link
              to="#"
              className="group/button relative cursor-pointer rounded-md bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3 px-4 py-3"
            >
              <div className="noops-xl pointer-events-none absolute inset-0 bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3 opacity-60 blur-md" />
              <div className="pointer-events-none absolute inset-0 m-px rounded-[5px] bg-noops-50 transition group-hover/button:opacity-0" />
              <span className="relative font-medium text-noops-900 transition group-hover/button:text-white">
                CxO / Head of Application or Engineering
              </span>
            </Link>
            <Link
              to="#"
              className="group/button relative cursor-pointer rounded-md bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3 px-4 py-3"
            >
              <div className="noops-xl pointer-events-none absolute inset-0 bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3 opacity-60 blur-md" />
              <div className="pointer-events-none absolute inset-0 m-px rounded-[5px] bg-noops-50 transition group-hover/button:opacity-0" />
              <span className="relative font-medium text-noops-900 transition group-hover/button:text-white">
                DevOps Engineer
              </span>
            </Link>
            <Link
              to="#"
              className="group/button relative cursor-pointer rounded-md bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3 px-4 py-3"
            >
              <div className="noops-xl pointer-events-none absolute inset-0 bg-gradient-to-br from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3 opacity-60 blur-md" />
              <div className="pointer-events-none absolute inset-0 m-px rounded-[5px] bg-noops-50 transition group-hover/button:opacity-0" />
              <span className="relative font-medium text-noops-900 transition group-hover/button:text-white">
                Software Engineer
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
