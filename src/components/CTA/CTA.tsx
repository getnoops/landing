import React from "react";

const CTA = () => {
  return (
    <div className="bg-gradient-to-r to-cloud-text-gradient-1 via-cloud-text-gradient-2 from-cloud-text-gradient-3">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8 ">
        <div className="w-full h-full p-8 flex items-center justify-between">
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
              className="bg-gradient-radial to-sky-800 from-sky-600 px-4 py-3 rounded-md relative cursor-pointer group/button"
            >
              <div className="absolute pointer-events-none  bg-gradient-radial to-sky-800 from-sky-600 sky-xl inset-0 blur-lg opacity-60" />
              <div className="absolute pointer-events-none bg-sky-50 rounded-[5px] m-px inset-0 group-hover/button:opacity-0 transition" />
              <span className="relative text-sky-900 font-medium group-hover/button:text-white transition">
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
