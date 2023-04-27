import React from "react";

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-cloud-text-gradient-3 via-cloud-text-gradient-2 to-cloud-text-gradient-1">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 ">
        <div className="flex h-full w-full items-center justify-between p-8">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Still not convinced?
            </h1>
            <h1 className="text-4xl font-bold text-sky-900">
              Try a basic deployment
            </h1>
          </div>

          <div>
            <a
              href="#"
              className="group/button relative cursor-pointer rounded-md bg-gradient-radial from-sky-600 to-sky-800 px-4 py-4"
            >
              <div className="sky-xl pointer-events-none  absolute inset-0 bg-gradient-radial from-sky-600 to-sky-800 opacity-60 blur-lg" />
              <div className="pointer-events-none absolute inset-0 m-px rounded-[5px] bg-sky-50 transition group-hover/button:opacity-0" />
              <span className="relative font-medium text-sky-900 transition group-hover/button:text-white">
                Try a Deployment
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
