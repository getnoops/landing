import React from "react";

interface CTAProps {
  line1: string;
  line2: string;

  cta: string;
}

const CTA = ({ line1, line2, cta }: CTAProps) => {
  return (
    <div className="bg-gradient-to-r from-noops-500  to-noops-700">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 ">
        <div className="flex h-full w-full items-center justify-between p-8">
          <div>
            <h1 className="text-4xl font-bold text-white">{line1}</h1>
            <h1 className="text-4xl font-bold text-noops-900">{line2}</h1>
          </div>

          <div>
            <a
              href="#"
              className="group/button relative cursor-pointer rounded-md bg-gradient-radial from-noops-600 to-noops-800 px-4 py-4"
            >
              <div className="noops-xl pointer-events-none  absolute inset-0 bg-gradient-radial from-noops-600 to-noops-800 opacity-60 blur-lg" />
              <div className="pointer-events-none absolute inset-0 m-px rounded-[5px] bg-noops-50 transition group-hover/button:opacity-0" />
              <span className="relative font-medium text-noops-900 transition group-hover/button:text-white">
                {cta}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
