import React from "react";
import Path from "./Path";

const Deploy = () => {
  return (
    <div className="relative flex flex-1 justify-center  ">
      <div className="relative w-full overflow-clip rounded-2xl border-2 border-accent/80 bg-noops-1050 px-4 py-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20"></div>

        <div className="relative flex justify-center">
          <div className="h-16 w-72 rounded-lg border border-noops-300/30 bg-gradient-to-b from-noops-400/20 to-noops-600/20 shadow-inner shadow-noops-200/20"></div>
          <div className="flex h-36 pt-8">
            <Path />
          </div>
          <div className="h-16 w-72 rounded-lg border border-noops-300/30 bg-gradient-to-b from-noops-400/20 to-noops-600/20 shadow-inner shadow-noops-200/20"></div>
        </div>

        <div className="group relative mx-auto flex h-40  w-72 items-center justify-center rounded-xl border-2 border-dashed  border-transparent bg-gradient-to-b from-noops-400/20 to-noops-600/20 opacity-70 shadow-inner shadow-noops-200/10">
          <div className="absolute -inset-0.5 rounded-xl border-2 border-dashed border-noops-400/50 transition-opacity  group-hover:opacity-0"></div>
          <div className="absolute -inset-0.5 rounded-xl border-2 border-noops-400/50 opacity-0 transition-opacity  group-hover:opacity-100"></div>
          <div>Waiting for Deployment</div>
        </div>
      </div>
    </div>
  );
};

export default Deploy;
