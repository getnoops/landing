import React, { useState } from "react";
import { NoOpsSymbol } from "../components";
import { Colours, Logo, Typography } from "../components/Style";

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="mx-auto max-w-7xl py-16">
        <div className="flex">
          <div className="flex-1">
            <h2 className="text-5xl font-black uppercase text-cloud-blue">
              Style Guide
            </h2>
            <p className="text-lg text-slate-600">
              This is a style guide for the NoOps website. It is a work in
              progress.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center ">
            <NoOpsSymbol className="text-cloud-blue " />
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <Logo />

        <Colours />

        <Typography />
      </div>
    </div>
  );
};

export default StyleGuide;
