import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import React from "react";
import { NoOpsSymbol } from "../NoOpsSymbol";

const Bridge = () => {
  return (
    <section className="py-24 px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-slate-600 to-slate-900">
            The Bridge
          </span>
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          NoOps acts as a bridge between your application and end-users by
          automating your infrastructure and ensuring your application runs
          <span className="italic font-medium text-sky-600"> smoothly </span>
          and
          <span className="italic font-medium text-sky-600"> securely</span>,
          without the need for a dedicated operations team.
        </p>

        <div>
          <div className="mt-10 flex items-center justify-center text-white">
            <div className="w-16 h-16 sm:w-24 sm:h-24 flex shadow-md items-center justify-center bg-gradient-to-br from-gray-600 via-slate-800 to-slate-900 rounded-md">
              <div className="relative w-full h-full">
                <CodeBracketIcon className="absolute p-1 sm:p-5 blur-md opacity-100 text-white" />
                <CodeBracketIcon className="absolute p-1 sm:p-5 text-blue-50" />
              </div>
            </div>
            <div className="flex-1 relative h-4">
              <div className="absolute h-4 top-0 right-0 w-full bg-gradient-to-r from-gray-700 via-gray-400 to-gray-400"></div>
            </div>
            <div className="w-16 h-16 sm:w-24 sm:h-24 flex shadow-md items-center justify-center bg-gradient-to-br from-gray-600 via-slate-800 to-slate-900 rounded-md">
              <NoOpsSymbol className="absolute p-6 sm:p-5 blur-md opacity-80 text-white" />
              <NoOpsSymbol className="absolute p-6 sm:p-5 text-blue-50" />
            </div>
            <div className="flex-1 relative h-4">
              <div className="absolute h-4 top-0 left-0 w-full bg-gradient-to-r from-gray-400 via-gray-400 to-gray-700"></div>
            </div>
            <div className="w-16 h-16 sm:w-24 sm:h-24 flex shadow-md items-center justify-center bg-gradient-to-br from-gray-600 via-slate-800 to-slate-900 rounded-md">
              <div className="relative w-full h-full">
                <GlobeAltIcon className="absolute p-1 sm:p-5 blur-md opacity-80 text-white" />
                <GlobeAltIcon className="absolute p-1 sm:p-5 text-blue-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridge;
