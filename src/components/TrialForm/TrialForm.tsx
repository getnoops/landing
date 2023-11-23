import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useCreateTrialUser } from "../../api/service";
import { QueryProviderHOC } from "../QueryProviderHOC";
import { SelectMenu } from "../SelectMenu";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

const schema = yup
  .object({
    name: yup.string().required("Name is Required"),
    email: yup
      .string()
      .email("Must be a valid Email")
      .required("Email is Required"),
    company: yup.string().required("Company is Required"),
    company_size: yup.string().required("Company Size is Required"),
  })
  .required();

const TrialForm = () => {
  const [conditionsAccepted, setConditionsAccepted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      company_size: "",
    },
  });
  const { mutateAsync, isLoading } = useCreateTrialUser();

  const onSubmit = async (data: any) => {
    await mutateAsync(
      {
        data: {
          name: data.name,
          email: data.email,
          company: data.company,
          company_size: data.company_size,
        },
      },
      {
        onSuccess: () => {
          // store email in localstorage
          localStorage.setItem("signup-email", data.email);
          // redirect to email quick links page
          window.location.href = "/check-email";
        },
      },
    );
  };

  const options = [
    {
      value: "",
      name: "Select your company size",
      hidden: true,
    },
    {
      value: "1-10",
      name: "1-10",
      hidden: false,
    },
    {
      value: "11-50",
      name: "11-50",
      hidden: false,
    },
    {
      value: "51-100",
      name: "51-100",
      hidden: false,
    },
    {
      value: "101-250",
      name: "101-250",
      hidden: false,
    },
    {
      value: "250+",
      name: "250+",
      hidden: false,
    },
  ];

  return (
    <div className="relative mx-auto my-4 max-w-lg rounded-3xl border border-noops-400/30 bg-[#140b23]  p-6 text-noops-200">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-noops-600/5 via-transparent to-noops-600/5"></div>

      <div className="pointer-events-none absolute inset-0 border-4 border-noops-600/50 blur-xl"></div>
      <img src="/logo_smile.svg" className="relative mx-auto my-8 h-16" />

      <form
        id="alpha-signup-form"
        className="relative space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-noops-400"
          >
            Name
            {errors.name && (
              <span className="font-medium text-red-600">
                {" "}
                - {errors.name?.message}
              </span>
            )}
          </label>
          <div className="mt-2">
            <input
              id="name"
              type="name"
              autoComplete="off"
              {...register("name")}
              className="block w-full rounded-md border-0 bg-noops-300/5 px-3 py-1.5 text-accent outline-0 ring-1 ring-noops-300/20 transition focus:bg-noops-1000 focus:ring-2 focus:ring-accent  "
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-noops-400"
          >
            Email address{" "}
            {errors.email && (
              <span className="font-medium text-red-600">
                {" "}
                - {errors.email?.message}
              </span>
            )}
          </label>
          <div className="mt-2">
            <input
              id="email"
              autoComplete="email"
              {...register("email")}
              className="block w-full rounded-md border-0 bg-noops-300/5 px-3 py-1.5 text-accent outline-0 ring-1 ring-noops-300/20 transition focus:bg-noops-1000 focus:ring-2 focus:ring-accent   "
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium leading-6 text-noops-400"
          >
            Company{" "}
            {errors.company && (
              <span className="font-medium text-red-600">
                {" "}
                - {errors.company?.message}
              </span>
            )}
          </label>
          <div className="mt-2">
            <input
              id="company"
              type="company"
              autoComplete="company"
              {...register("company")}
              className="block w-full rounded-md border-0 bg-noops-300/5 px-3 py-1.5 text-accent outline-0 ring-1 ring-noops-300/20 transition focus:bg-noops-1000 focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-noops-400">
            Company Size{" "}
            {errors.company_size && (
              <span className="font-medium text-red-600">
                {" "}
                - {errors.company_size?.message}
              </span>
            )}
          </label>

          <div>
            <Controller
              name="company_size"
              control={control}
              render={({ field: { value, onChange } }) => (
                <SelectMenu
                  value={value}
                  onChange={onChange}
                  options={options}
                  defaultValueMessage={"Select your Company Size"}
                />
              )}
            />
          </div>
        </div>

        {/* <div className="flex gap-x-2 rounded-lg border border-noops-500/30 bg-noops-500/20 p-3 text-lg text-noops-300">
          <InformationCircleIcon className=" h-8 text-noops-400" />
          <div className="flex-1">
            In order to try No_Ops, you will need to connect an existing AWS
            Account
          </div>
        </div> */}

        <div className="flex flex-row-reverse justify-between">
          <button
            type="submit"
            className="group relative  inline-block rounded-[10px] border-2 border-noops-700 bg-gradient-to-b from-noops-400 to-noops-600 px-6 py-2 font-medium text-noops-300 outline-0 transition focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-noops-1000"
          >
            <div className="absolute inset-0.5 rounded-md bg-noops-600 transition group-hover:opacity-30" />
            {/* <div className="pointer-events-none absolute -inset-3 rounded-2xl border border-noops-700/30 bg-noops-900/30 "></div> */}

            <div className="relative inline-flex w-full items-center gap-x-1 text-white">
              {isLoading ? "Submitting" : "Try No_Ops"}
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default QueryProviderHOC(TrialForm);
