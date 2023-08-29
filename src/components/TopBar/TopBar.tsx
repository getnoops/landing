import {
  DocumentDuplicateIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const TopBar = () => {
  return (
    <div className="absolute inset-x-0 top-0 z-50 mx-auto flex h-16 w-full max-w-7xl justify-between px-4 py-4 sm:px-8">
      <a href="/" className="max-h-full">
        <img src="/logo_smile.svg" className="h-full" />
      </a>
      <div className="flex items-center gap-x-4">
        <a
          className="inline-flex items-center gap-x-1 text-noops-300 transition hover:text-noops-400"
          href="https://hub.getnoops.com"
        >
          <DocumentDuplicateIcon className="h-6" />
          Docs
        </a>
        <a
          className="inline-flex items-center gap-x-1 text-noops-300 transition hover:text-noops-400"
          href="https://portal.getnoops.com/login"
        >
          <ArrowLeftOnRectangleIcon className="h-6" />
          Login
        </a>
      </div>
    </div>
  );
};

export default TopBar;