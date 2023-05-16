import React from "react";
import { NoOpsSymbol } from "../..";

const Logo = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-4 rounded-lg bg-white p-4 shadow-lg sm:p-6 lg:p-8">
      <div className="">
        <h4 className="mb-3 text-3xl font-bold text-slate-800">Logo</h4>

        <h5 className="mb-2 text-2xl font-bold text-slate-800">Wordmark</h5>
        <div className="my-4 grid grid-cols-3">
          <div className="flex items-center justify-center rounded-lg bg-white py-8">
            <img src="/logo_smile.svg" className="" />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white py-8">
            <img src="/logo_smile_black.svg" className="" />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-black py-8">
            <img src="/logo_smile_white.svg" className="" />
          </div>
        </div>

        <h5 className="mb-2 text-2xl font-bold text-slate-800">Logomark</h5>
        <div className="my-4 grid grid-cols-3">
          <div className="flex items-center justify-center">
            <NoOpsSymbol className="text-noops-600 " />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white py-8">
            <NoOpsSymbol className="text-black " />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-black py-8">
            <NoOpsSymbol className="text-white " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
