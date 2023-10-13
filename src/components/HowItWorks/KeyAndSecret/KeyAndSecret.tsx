import { KeyIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const getRandomString = (length: Number) => {
  let randomString = "";
  for (let i = 0; i < length; i++) {
    if (i === 8 || i === 13) {
      randomString += "-";
      continue;
    }

    randomString += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomString;
};

const KeyAndSecret = () => {
  const length = 18;
  const [randomKey, setRandomKey] = useState(getRandomString(length));
  const [randomSecret, setRandomSecret] = useState(getRandomString(length));

  useEffect(() => {
    const interval = setInterval(() => {
      let key = getRandomString(length);
      let secret = getRandomString(length);

      setRandomKey(key);
      setRandomSecret(secret);
    }, 100); // Update every 1000ms (or 1s)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="flex h-28 w-full flex-col items-center justify-center gap-2 px-4 font-mono">
      <div className="flex h-9 w-full gap-x-3 overflow-clip rounded-lg border border-noops-300/30 bg-noops-300/20">
        <div className="flex w-10 items-center bg-noops-300/30 p-2">
          <KeyIcon />
        </div>
        <div className="flex items-center truncate overflow-ellipsis whitespace-nowrap">
          {randomKey}
        </div>
      </div>
      <div className="flex h-9 w-full gap-x-3 overflow-clip rounded-lg border border-noops-300/30 bg-noops-300/20">
        <div className="flex w-10 items-center bg-noops-300/30 p-2">
          <LockClosedIcon />
        </div>
        <div className="flex items-center truncate overflow-ellipsis whitespace-nowrap">
          {randomSecret}
        </div>
      </div>
    </div>
  );
};

export default KeyAndSecret;
