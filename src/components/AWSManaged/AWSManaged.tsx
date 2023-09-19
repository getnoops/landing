import React from "react";

const AWSManaged = () => {
  return (
    <section className="relative overflow-x-clip px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          <span className="bg-gradient-to-t from-slate-600 to-slate-900 bg-clip-text text-transparent">
            AWS{" "}
          </span>
          <span className="bg-gradient-to-r from-noops-600 to-accent bg-clip-text text-transparent">
            Supercharged
          </span>
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          We handle AWS intricacies and complexity for you, ensuring optimal
          performance and security.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl">
        {/* <div className="absolute -inset-4  rounded-[32px] border border-noops-200 bg-noops-600 bg-opacity-5"></div> */}
        <div className=" absolute -inset-[20%] bg-gradient-to-r from-accent/20 via-transparent to-accent/20 blur-3xl"></div>

        {/* <div className="relative w-full overflow-clip rounded-2xl border border-noops-100 bg-noops-1000 p-6 opacity-100  shadow-lg shadow-noops-200"> */}

        <div className="relative grid grid-cols-2 gap-4 text-noops-300 sm:grid-cols-3 sm:gap-8"></div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default AWSManaged;
