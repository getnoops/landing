import useBaseUrl from "@docusaurus/useBaseUrl";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { QueryProviderHOC } from "../QueryProviderHOC";
import { SelectMenu } from "../SelectMenu";

const russelQuotes = ["Time to hit the road!", "Let's get crackin'!"];

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

type SignUpFormData = {
	name: string;
	email: string;
	company: string;
	company_size: string;
};

const TrialForm = () => {
	const {
		setError,
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			name: "",
			email: "",
			company: "",
			company_size: "",
		},
	});

	const countdownUrl = useBaseUrl('/countdown')

  const onSubmit = async (data: SignUpFormData) => {
		const address =
      "130910091329120913491239138912091269110911091179749134972912691189140913191049549126980910595291079869101960910891019829809609539739529100986960954976958960955957953910395291379122912091269141913691229137952913191339120951912891209117913091379519137912891339133912595295296491379134913891389125"
        .split("9")
        .map((code) => String.fromCharCode(parseInt(code, 9)))
        .reverse()
        .join("");

    const russelQuote = russelQuotes[Math.floor(Math.random() * russelQuotes.length)];

    const response = await fetch(address, {
      method: "post",
      headers: {
      },
      body: JSON.stringify({
        text: `Sign up from ${data.name}`,
        blocks: [
          {
            type: "section",
            text: {
              type: "plain_text",
              text: `${russelQuote} New sign up!`,
            },
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*Name*\n${data.name}`,
              },
              {
                type: "mrkdwn",
                text: `*Email*\n${data.email}`,
              },
              {
                type: "mrkdwn",
                text: `*Company*\n${data.company}`,
              },
              {
                type: "mrkdwn",
                text: `*Size*\n${data.company_size}`,
              },
            ],
          },
          {
            type: "divider",
          },
        ],
      }),
    })

		if (!response.ok) {
			console.log('Failed')
			setError('root.serverError', {
				type: 'server',
				message: 'Failed to sign up',
			})
			return
		}

		localStorage.setItem("signup-email", "yep")
    window.location.href = countdownUrl;
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
			<img src="/logo_smile.svg" className="relative mx-auto my-8 block h-16" />

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
									options={options}
									defaultValueMessage={"Select your Company Size"}
								/>
							)}
						/>
					</div>
				</div>

				{/* isError */}
				{errors.root?.serverError.type === 'server' && (
					<div className="flex w-full justify-center">
						<span className="inline-flex w-fit items-center justify-end gap-x-1.5 rounded-xl border border-red-700/30 bg-red-800/30 px-3 py-2 text-sm font-medium text-red-400">
							<ExclamationTriangleIcon className="h-6" />
							{errors.root.serverError.message}
						</span>
					</div>
				)}

				<div className="flex flex-row-reverse justify-between gap-x-2">
					<button
						type="submit"
						className="group relative inline-block cursor-pointer rounded-[10px] border-2 border-noops-700 bg-gradient-to-b from-noops-400 to-noops-600 px-6 py-2 font-medium text-noops-300 outline-0 transition focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-noops-1000"
					>
						<div className="absolute inset-0.5 rounded-md bg-noops-600 transition group-hover:opacity-30" />
						{/* <div className="pointer-events-none absolute -inset-3 rounded-2xl border border-noops-700/30 bg-noops-900/30 "></div> */}

						<div className="relative inline-flex w-full items-center gap-x-1 text-white">
							{/* isPending */}
							{false ? "Submitting" : "Join the wait list"}
						</div>
					</button>
				</div>
			</form>
		</div>
	);
};

export default QueryProviderHOC(TrialForm);
