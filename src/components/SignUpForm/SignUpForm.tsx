import {
	BuildingOffice2Icon,
	ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignUpUser } from "@site/src/api/authGalaxy";
import { cn } from "@site/src/lib/utils";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { EmailQuickLinks } from "..";
import { QueryProviderHOC } from "../QueryProviderHOC";
import { SelectMenu } from "../SelectMenu";
import { slackSignup } from "./slack-signup";

const BASE_AUTH_GALAXY_URL =
	process.env.NODE_ENV === "development"
		? "http://localhost:8080"
		: "https://account.getnoops.com";

const COMPANY_OPTIONS = [
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

const schema = yup
	.object({
		first_name: yup.string().required("First name is required"),
		last_name: yup.string().required("Last name is required"),
		email: yup
			.string()
			.email("Must be a valid email")
			.required("Email is required"),
		company: yup.string().required("Company is required"),
		company_size: yup.string().required("Size is required"),
		org_name: yup.string().required("Required"),
		org_code: yup
			.string()
			.matches(
				new RegExp("^[a-zA-Z0-9-]*$"),
				"Can only contain alphanumeric characters and dashes",
			)
			.required("Required"),
	})
	.required();

export type SignUpFormData = typeof schema.__outputType;

const TrialForm = () => {
	const [loading, setLoading] = useState(false);
	const [signedUp, setSignedUp] = useState(false);

	const {
		setError,
		register,
		handleSubmit,
		formState: { errors },
		control,
		watch,
		setValue,
		trigger,
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			first_name: "",
			last_name: "",
			email: "",
			company: "",
			company_size: "",
			org_name: "",
			org_code: "",
		},
	});

	const orgNameField = watch("org_name");
	useEffect(() => {
		setValue("org_code", orgNameField.toLowerCase().replace(/ /g, "-"));
		if (orgNameField !== "") {
			trigger("org_code");
		}
	}, [orgNameField]);

	const { mutateAsync: signUpUserMutateAsync } = useSignUpUser({
		mutation: {
			onError: (err) => {
				setLoading(false);

				setError("root.serverError", {
					type: "server",
					message:
						err.response.status === 409
							? "Organisation already exists"
							: err.message,
				});
			},
		},
	});

	const onSubmit = async (data: SignUpFormData) => {
		setLoading(true);

		await signUpUserMutateAsync({
			data: {
				company: data.company,
				email: data.email,
				first_name: data.first_name,
				last_name: data.last_name,
				company_size: data.company_size,
				organisation_name: data.org_name,
				organisation_code: data.org_code,
			},
		});

		const slackRes = await slackSignup(data);
		if (!slackRes.ok) {
			setError("root.serverError", {
				type: "server",
				message: "Failed to sign up",
			});
			return;
		}

		setSignedUp(true);
		setLoading(false);
	};

	return (
		<div className="relative mx-auto my-4 max-w-lg rounded-3xl border border-noops-400/30 bg-[#140b23] p-6 text-noops-200">
			<div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-noops-600/5 via-transparent to-noops-600/5" />

			<div className="pointer-events-none absolute inset-0 border-4 border-noops-600/50 blur-xl" />
			{!signedUp && (
				<img
					src="/logo_smile.svg"
					className="relative mx-auto my-8 block h-16"
				/>
			)}

			{signedUp ? (
				<div className="w-full max-w-[464px]">
					<div className="flex flex-col items-center justify-center">
						<h2 className="mb-1 text-3xl font-bold tracking-tight">
							<span className="bg-gradient-to-r from-noops-600 to-noops-accent bg-clip-text py-1 font-extrabold text-transparent">
								Welcome to No_Ops!
							</span>
						</h2>

						<p className="text-base text-noops-500 dark:text-noops-200 sm:text-sm">
							Please check your inbox and click the provided link to login
						</p>
					</div>

					<EmailQuickLinks />
				</div>
			) : (
				<form
					id="alpha-signup-form"
					className="relative mt-10 space-y-6"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div>
						<label
							htmlFor="first_name"
							className="block text-sm font-medium leading-6 text-noops-400"
						>
							First Name
							{errors.first_name && (
								<span className="font-medium text-red-600">
									{" "}
									- {errors.first_name?.message}
								</span>
							)}
						</label>
						<div className="mt-2">
							<input
								id="name"
								type="name"
								autoComplete="off"
								{...register("first_name")}
								className="block w-full rounded-md border-0 bg-noops-300/5 px-3 py-1.5 text-base text-accent outline-0 ring-1 ring-noops-300/20 transition focus:bg-noops-1000 focus:ring-2 focus:ring-accent  "
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor="last_name"
							className="block text-sm font-medium leading-6 text-noops-400"
						>
							Last Name
							{errors.last_name && (
								<span className="font-medium text-red-600">
									{" "}
									- {errors.last_name?.message}
								</span>
							)}
						</label>
						<div className="mt-2">
							<input
								id="name"
								type="name"
								autoComplete="off"
								{...register("last_name")}
								className="block w-full rounded-md border-0 bg-noops-300/5 px-3 py-1.5 text-base text-accent outline-0 ring-1 ring-noops-300/20 transition focus:bg-noops-1000 focus:ring-2 focus:ring-accent  "
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
								className="block w-full rounded-md border-0 bg-noops-300/5 px-3 py-1.5 text-base text-accent outline-0 ring-1 ring-noops-300/20 transition focus:bg-noops-1000 focus:ring-2 focus:ring-accent   "
							/>
						</div>
					</div>

					<div className="flex space-x-5">
						<div className="w-full">
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
									className="block w-full rounded-md border-0 bg-noops-300/5 px-3 py-1.5 text-base text-accent outline-0 ring-1 ring-noops-300/20 transition focus:bg-noops-1000 focus:ring-2 focus:ring-accent"
								/>
							</div>
						</div>

						<div className="w-full">
							<label className="block text-sm font-medium leading-6 text-noops-400">
								Company size{" "}
								{errors.company_size && (
									<span className="font-medium text-red-600">
										{" "}
										- {errors.company_size?.message}
									</span>
								)}
							</label>

							<div className="w-full">
								<Controller
									name="company_size"
									control={control}
									render={({ field: { value, onChange } }) => (
										<SelectMenu
											value={value}
											onChange={onChange}
											options={COMPANY_OPTIONS}
											defaultValueMessage="Select a size"
										/>
									)}
								/>
							</div>
						</div>
					</div>

					<div className="rounded-2xl border border-noops-300/10 border-t-noops-300/20 bg-noops-300/5 p-4 shadow-md shadow-noops-1000/50">
						{/* <div className="pt-2">
							<RadioGroup.Root className="w-full gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-accent/80">
								<RadioGroup.Item
									value="create"
									className="relative w-full rounded-full bg-transparent px-2.5 py-1.5 font-semibold text-white transition"
								>
									<div className="absolute inset-0 z-0 h-full w-full rounded-full bg-gradient-to-r from-noops-600 to-accent/90 shadow-inner shadow-noops-300" />

									<span className="relative">Create your organisation</span>
								</RadioGroup.Item>
							</RadioGroup.Root>
						</div> */}

						<div className="mb-2 flex items-center gap-x-2">
							<div className="flex items-center rounded-md border border-noops-300/5 border-t-noops-300/10 bg-noops-300/5 p-2 shadow shadow-noops-1000/30">
								<BuildingOffice2Icon className="size-6" />
							</div>

							<div className="flex flex-col">
								<h5 className="m-0 text-base font-normal leading-none text-noops-200">
									Create your organisation
								</h5>
							</div>
						</div>

						<div className="flex justify-between space-x-5">
							<div className="w-full">
								<label
									htmlFor="org_name"
									className="block text-sm font-medium leading-6 text-noops-400"
								>
									Organisation name
									{errors.org_name && (
										<span className="font-medium text-red-600">
											{" "}
											- {errors.org_name.message}
										</span>
									)}
								</label>
								<div className="mt-2">
									<input
										id="org_name"
										autoComplete="off"
										{...register("org_name")}
										className="block w-full rounded-md border-0 bg-noops-300/5 px-3 py-1.5 text-base text-accent outline-0 ring-1 ring-noops-300/20 transition focus:bg-noops-1000 focus:ring-2 focus:ring-accent  "
									/>
								</div>
							</div>

							<div className="w-full">
								<label
									htmlFor="org_code"
									className="block text-sm font-medium leading-6 text-noops-400"
								>
									Organisation code
								</label>
								<div className="mt-2">
									<input
										id="org_code"
										autoComplete="off"
										{...register("org_code")}
										className="block w-full rounded-md border-0 bg-noops-300/5 px-3 py-1.5 text-base text-accent outline-0 ring-1 ring-noops-300/20 transition focus:bg-noops-1000 focus:ring-2 focus:ring-accent  "
									/>
								</div>
								{errors.org_code && (
									<span className="pt-5 text-sm font-medium text-red-600">
										{errors.org_code.message}
									</span>
								)}
							</div>
						</div>
						{errors.root?.serverError.type === "server" && (
							<div className="flex w-full justify-center">
								<span className="inline-flex w-fit items-center justify-end gap-x-1.5 rounded-xl border border-red-700/30 bg-red-800/30 px-3 py-2 text-sm font-medium text-red-400">
									<ExclamationTriangleIcon className="h-6" />
									{errors.root.serverError.message}
								</span>
							</div>
						)}
					</div>

					<div className="flex flex-row-reverse justify-between gap-x-2">
						<button
							type="submit"
							className="group relative inline-block cursor-pointer rounded-[10px] border-2 border-noops-700 bg-gradient-to-b from-noops-400 to-noops-600 px-6 py-2 font-medium text-noops-300 outline-0 transition focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-noops-1000 disabled:pointer-events-none disabled:opacity-50"
							disabled={loading}
						>
							<div className="absolute inset-0.5 rounded-md bg-noops-600 transition group-hover:opacity-30" />

							<div className="relative inline-flex w-full items-center gap-x-1 text-white">
								<div className={cn(loading && "invisible")}>Sign up</div>

								<LoaderCircle
									className={cn(
										"absolute bottom-0 left-0 right-0 top-0 m-auto size-4",
										!loading && "invisible",
										loading && "animate-spin",
									)}
								/>
							</div>
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default QueryProviderHOC(TrialForm);

/** https://lucide.dev/icons/loader-circle */
const LoaderCircle = ({ className }: { className?: string }) => (
	<svg
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M21 12a9 9 0 1 1-6.219-8.56" />
	</svg>
);
