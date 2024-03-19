import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreatePlaygroundUser } from "@site/src/api/authGalaxy";
import { cn } from "@site/src/lib/utils";
import { useState } from "react";
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
		name: yup.string().required("Name is required"),
		email: yup
			.string()
			.email("Must be a valid email")
			.required("Email is required"),
		company: yup.string().required("Company is required"),
		company_size: yup.string().required("Company size is required"),
	})
	.required();

export type SignUpFormData = {
	name: string;
	email: string;
	company: string;
	company_size: string;
};

const TrialForm = () => {
	const [loading, setLoading] = useState(false);
	const [signedUp, setSignedUp] = useState(false);

	const {
		setError,
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

	const { mutateAsync: createPlaygroundUserMutationAsync } =
		useCreatePlaygroundUser({
			request: {
				baseURL: BASE_AUTH_GALAXY_URL,
				headers: {
					"Content-Type": "application/json",
				},
			},
			mutation: {
				onError: (err) => {
					setError("root.serverError", {
						type: "server",
						message: err.message,
					});
				},
			},
		});

	const onSubmit = async (data: SignUpFormData) => {
		setLoading(true);

		await createPlaygroundUserMutationAsync({
			data: {
				company: data.company,
				email: data.email,
				name: data.name,
				company_size: data.company_size,
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
				<div className="w-[464px]">
					<div className="flex flex-col items-center justify-center">
						<h2 className="mb-1 text-3xl font-bold tracking-tight">
							<span className="to-noops-accent bg-gradient-to-r from-noops-600 bg-clip-text py-1 font-extrabold text-transparent">
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
								className="block w-full rounded-md border-0 bg-noops-300/5 px-3 py-1.5 text-base text-accent outline-0 ring-1 ring-noops-300/20 transition focus:bg-noops-1000 focus:ring-2 focus:ring-accent"
							/>
						</div>
					</div>

					<div>
						<label className="block text-sm font-medium leading-6 text-noops-400">
							Company size{" "}
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
										options={COMPANY_OPTIONS}
										defaultValueMessage={"Select your Company Size"}
									/>
								)}
							/>
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

					<div className="flex flex-row-reverse justify-between gap-x-2 py-4">
						<button
							type="submit"
							className="group relative inline-block cursor-pointer rounded-[10px] border-2 border-noops-700 bg-gradient-to-b from-noops-400 to-noops-600 px-6 py-2 font-medium text-noops-300 outline-0 transition focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-noops-1000 disabled:pointer-events-none disabled:opacity-50"
							disabled={loading}
						>
							<div className="absolute inset-0.5 rounded-md bg-noops-600 transition group-hover:opacity-30" />
							<div className="pointer-events-none absolute -inset-[6px] rounded-2xl border border-noops-700/30 bg-noops-900/30 " />

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
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="M21 12a9 9 0 1 1-6.219-8.56" />
	</svg>
);
