import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

const TrialForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="mx-auto my-4 max-w-lg rounded-xl border border-noops-400/30 bg-noops-300/5 p-6 text-noops-200">
      <img src="/logo_smile.svg" className="mx-auto my-8 h-16" />

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-noops-400"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              type="name"
              autoComplete="off"
              {...register("name")}
              className="block w-full rounded-md border-0 bg-noops-300/5 px-3 py-1.5 text-accent outline-0 ring-1 ring-noops-300/20 transition focus:bg-noops-1000 focus:ring-2 focus:ring-accent  "
            />
            <p>{errors.name?.message}</p>
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-noops-400"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
              className="block w-full rounded-md border-0 bg-noops-300/5 px-3 py-1.5 text-accent outline-0 ring-1 ring-noops-300/20 transition focus:bg-noops-1000 focus:ring-2 focus:ring-accent   "
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="group relative  inline-block rounded-[10px] border-2 border-noops-700 bg-gradient-to-b from-noops-400 to-noops-600 px-6 py-2 font-medium text-noops-300 outline-0 transition focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-noops-1000"
          >
            <div className="absolute inset-0.5 rounded-md bg-noops-600 transition group-hover:opacity-30" />
            {/* <div className="pointer-events-none absolute -inset-3 rounded-2xl border border-noops-700/30 bg-noops-900/30 "></div> */}

            <div className="relative inline-flex w-full items-center gap-x-1 text-white">
              Try No_Ops
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrialForm;
