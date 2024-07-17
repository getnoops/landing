import Link from "@docusaurus/Link";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { LinkIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import Layout from "@theme/Layout";
import classNames from "classnames";
import { Services } from "../components/HowItWorks";

const features = [
	{
		name: "Easy linking",
		description: "It takes just a few clicks to link an AWS account to No_Ops.",
		icon: LinkIcon,
	},
	{
		name: "Unlimited accounts",
		description: "Link as many AWS accounts without any restrictions.",
		icon: UserGroupIcon,
	},
];

const LambdaLogo = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 192 200"
		fill="none"
		{...props}
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={7.748}
			d="M36.376 4.346V47.98h30.758l71.713 147.745h49.248v-43.373h-19.094L97.201 4.346H36.377ZM58.414 81.784l25.66 52.859-27.86 60.713H4.774L58.414 81.784Z"
		/>
	</svg>
);

const S3Logo = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 160 166"
		fill="none"
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="m141.466 91.534 1.133-7.977c10.443 6.254 10.582 8.842 10.579 8.91-.018.017-1.8 1.504-11.712-.933Zm-5.732-1.593c-18.054-5.466-43.196-17-53.374-21.81 0-.04.012-.079.012-.12a7.098 7.098 0 0 0-7.092-7.089c-3.906 0-7.086 3.18-7.086 7.089 0 3.909 3.18 7.089 7.086 7.089 1.717 0 3.275-.64 4.505-1.658 11.97 5.664 36.919 17.033 55.106 22.402l-7.189 50.758c-.02.137-.03.275-.03.413 0 4.472-19.786 12.682-52.115 12.682-32.67 0-52.666-8.21-52.666-12.679 0-.136-.009-.269-.03-.401L7.838 36.856c13.007 8.953 40.982 13.688 67.738 13.688 26.715 0 54.643-4.72 67.673-13.644l-7.514 53.041ZM6.25 25.41C6.463 21.528 28.77 6.3 75.575 6.3c46.799 0 69.11 15.222 69.325 19.11v1.325c-2.566 8.702-31.476 17.915-69.325 17.915-37.913 0-66.838-9.24-69.325-17.957V25.41Zm144.55.065C150.8 15.253 121.495.4 75.575.4 29.655.4.35 15.253.35 25.475l.277 2.224 16.367 119.546c.392 13.369 36.043 18.355 58.563 18.355 27.943 0 57.629-6.425 58.012-18.349l7.068-49.843c3.933.94 7.169 1.422 9.765 1.422 3.493 0 5.853-.856 7.283-2.558a5.75 5.75 0 0 0 1.287-4.897c-.767-4.08-5.611-8.481-15.482-14.113l7.009-49.448.301-2.34Z"
			clipRule="evenodd"
		/>
	</svg>
);

const RDSLogo = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 294 294"
		fill="none"
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="m18.538 11.15 48.556 48.556-7.388 7.388L11.15 18.538v39.637H.7V5.925A5.224 5.224 0 0 1 5.925.7h52.25v10.45H18.538ZM293.3 5.925v52.25h-10.45V18.538l-48.556 48.556-7.388-7.388 48.556-48.556h-39.637V.7h52.25c2.89 0 5.225 2.34 5.225 5.225Zm-10.45 229.9h10.45v52.25a5.223 5.223 0 0 1-5.225 5.225h-52.25v-10.45h39.637l-48.556-48.556 7.388-7.388 48.556 48.556v-39.637Zm-2.612-92.937c0-17.342-20.023-34.475-53.557-45.829l3.35-9.896c38.544 13.047 60.657 33.357 60.657 55.725 0 22.373-22.113 42.688-60.663 55.73l-3.349-9.902c33.539-11.348 53.562-28.476 53.562-45.828Zm-266.183 0c0 16.615 18.742 33.294 50.14 44.621l-3.548 9.829c-36.251-13.079-57.042-32.923-57.042-54.45 0-21.522 20.79-41.366 57.042-54.45l3.547 9.828c-31.397 11.333-50.139 28.012-50.139 44.622Zm53.04 91.406L18.537 282.85h39.637v10.45H5.925A5.224 5.224 0 0 1 .7 288.075v-52.25h10.45v39.637l48.556-48.556 7.388 7.388ZM147 101.469c-37.338 0-57.475-9.645-57.475-13.585C89.525 83.94 109.662 74.3 147 74.3c37.333 0 57.475 9.64 57.475 13.585 0 3.94-20.142 13.585-57.475 13.585Zm.152 40.468c-35.75 0-57.627-9.766-57.627-15.079v-25.399c12.869 7.101 35.697 10.46 57.475 10.46s44.606-3.359 57.475-10.46v25.399c0 5.319-21.762 15.079-57.323 15.079Zm0 39.898c-35.75 0-57.627-9.766-57.627-15.079v-25.702c12.702 7.466 35.227 11.333 57.627 11.333 22.274 0 44.668-3.861 57.323-11.307v25.676c0 5.319-21.762 15.079-57.323 15.079ZM147 217.632c-37.186 0-57.475-9.996-57.475-15.132v-21.548c12.702 7.467 35.227 11.333 57.627 11.333 22.274 0 44.668-3.856 57.323-11.307V202.5c0 5.136-20.288 15.132-57.475 15.132Zm0-153.783c-32.714 0-67.925 7.52-67.925 24.035V202.5c0 16.793 34.172 25.582 67.925 25.582 33.754 0 67.925-8.789 67.925-25.582V87.884c0-16.516-35.211-24.035-67.925-24.035Z"
			clipRule="evenodd"
		/>
	</svg>
);

const APIGatewayLogo = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 362 362"
		fill="none"
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M142.719 281.829h18.931v-13.01h-18.931v13.01Zm31.831 0h19.35v-13.01h-19.35v13.01Zm-77.4-264.47L13.3 58.98v258.718l83.85 28.356V17.36Zm12.9 82.329v169.131h19.35v13.01h-19.35v73.266c0 2.094-1 4.059-2.683 5.282a6.403 6.403 0 0 1-5.818.885l-96.75-32.714c-2.632-.891-4.4-3.376-4.4-6.167V54.927c0-2.472 1.4-4.743 3.606-5.835l96.75-48.02a6.378 6.378 0 0 1 6.251.312 6.517 6.517 0 0 1 3.044 5.522v79.772h19.35v13.01h-19.35Zm96.75 182.141h19.35v-13.01H206.8v13.01Zm.419-182.141h18.931v-13.01h-18.931v13.01Zm-32.25 0H193.9v-13.01h-18.931v13.01Zm-32.25 0h18.931v-13.01h-18.931v13.01ZM348.7 58.979l-83.85-41.62v328.694l83.85-28.356V58.979Zm12.9 263.402c0 2.791-1.767 5.276-4.399 6.167l-96.75 32.714a6.412 6.412 0 0 1-5.818-.885 6.53 6.53 0 0 1-2.683-5.282v-73.266h-12.481v-13.01h12.481V99.688h-12.481v-13.01h12.481V6.906a6.515 6.515 0 0 1 3.044-5.522 6.375 6.375 0 0 1 6.25-.313l96.75 48.02a6.516 6.516 0 0 1 3.606 5.835v267.455ZM199.924 141.053l-12.048-4.67-32.25 84.565 12.048 4.671 32.25-84.566Zm43.686 41.294c2.522-2.543 2.522-6.661 0-9.198l-25.8-26.02-9.12 9.198 21.24 21.421-21.24 21.421 9.12 9.198 25.8-26.02Zm-99.42 26.02-25.8-26.02c-2.522-2.543-2.522-6.661 0-9.198l25.8-26.02 9.12 9.198-21.24 21.421 21.24 21.421-9.12 9.198Z"
			clipRule="evenodd"
		/>
	</svg>
);

const services = [
	{
		name: "Lambda",
		description: "Run code without thinking about servers",
		icon: LambdaLogo,
		colours: "from-orange-400 to-orange-700",
		bg: "from-orange-100",
	},
	{
		name: "S3",
		description: "Store and retrieve any amount of data",
		icon: S3Logo,
		colours: "from-lime-500 to-green-800",
		bg: "from-lime-100",
	},
	{
		name: "RDS",
		description: "Managed relational database service",
		icon: RDSLogo,
		colours: "from-blue-400 to-blue-800",
		bg: "from-blue-100",
	},
	{
		name: "API Gateway",
		description: "Create, maintain, monitor, and secure APIs",
		icon: APIGatewayLogo,
		colours: "from-red-500 to-red-800",
		bg: "from-red-100",
	},
];

const DockerLogo = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 406 282"
		fill="none"
		{...props}
	>
		<path
			stroke="currentColor"
			strokeWidth={38}
			d="M230 111h42m-92 0h42m-91 0h42m-91 0h41m-91 0h42m8-46h41m8 0h42m7 0h42m-42-46h42"
		/>
		<path
			fill="currentColor"
			d="M406 113s-18-17-55-11c-4-29-35-46-35-46s-29 35-8 74c-6 3-16 7-31 7H2c-5 19-5 145 133 145 99 0 173-46 208-130 52 4 63-39 63-39Z"
		/>
	</svg>
);

export default () => {
	return (
		<Layout title="AWS Services" description="Start using AWS now, not later">
			<div className="min-h-[100dvh] overflow-x-clip bg-noops-50">
				<div className="relative  h-full  flex-col  ">
					<div className="relative mx-auto flex max-w-7xl flex-col">
						<div className="relative mx-auto flex  w-full items-end pt-[calc(5dvh)] lg:pt-[calc(20dvh)] ">
							<div className="relative mx-auto w-full max-w-6xl flex-1 text-center lg:pb-16">
								<div className="absolute inset-0 flex items-center justify-center overflow-visible bg-gradient-radial from-noops-100 via-transparent via-60% to-transparent"></div>

								<div className="relative">
									<h6 className="text-base font-normal text-noops-500">
										Services
									</h6>
									<h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
										<span className="bg-gradient-to-b from-noops-600 to-noops-900 bg-clip-text py-1 text-transparent">
											Start using AWS now, not later
										</span>
									</h1>
									<p className="mx-auto max-w-3xl text-balance text-2xl text-noops-600">
										We've built the patterns, you bring the code
									</p>
								</div>
							</div>
						</div>

						<div className="my-24 grid gap-[2%] px-4 sm:grid-cols-2 lg:grid-cols-4">
							{services.map((service) => (
								<div
									className={classNames(
										"relative  min-h-40 overflow-clip rounded-2xl border border-white border-t-white bg-gradient-to-bl via-white to-white p-4 shadow-lg shadow-noops-200/70 ring-1 ring-noops-100",
										service.bg,
									)}
								>
									<div className="pointer-events-none absolute inset-0 rounded-[15px] shadow-inner shadow-noops-50"></div>

									<div className="pointer-events-none absolute inset-y-2 right-2 flex  items-center ">
										<service.icon className="size-full text-neutral-800 mix-blend-color-burn" />
									</div>

									<div className="relative flex h-full flex-col justify-between gap-[5%]">
										<div className="flex flex-1">
											<div
												className={classNames(
													"flex size-14 items-center justify-center rounded-lg bg-gradient-to-br shadow-lg",
													service.colours,
												)}
											>
												<service.icon className="size-8 text-white" />
											</div>
										</div>

										<div>
											<h3 className="m-0 bg-gradient-to-b from-slate-500  to-slate-900 bg-clip-text text-lg font-semibold  tracking-tighter text-transparent">
												{service.name}
											</h3>
											<p className="m-0 text-sm text-slate-500 md:line-clamp-1">
												{service.description}
											</p>
										</div>
									</div>
								</div>
							))}

							<div className="col-span-full m-0 mx-auto my-6 rounded-full border border-noops-200 bg-noops-100 px-0 py-1.5 leading-none tracking-tight text-noops-600 sm:my-10 lg:my-12">
								<div className="flex items-center gap-x-1">
									<InformationCircleIcon className="ml-2 size-6" />
									<p className="m-0 text-sm sm:text-base">
										Learn more about supported services
									</p>
									<Link
										to="/docs"
										className="group relative ml-2 mr-2 inline-block rounded-full border border-noops-600/50 border-t-noops-500 bg-noops-600 px-3 py-0.5 text-sm text-white shadow-md shadow-noops-1000/30 ring-1 ring-noops-700 transition hover:border-t-noops-400 hover:bg-noops-500 hover:text-white hover:no-underline hover:ring-noops-600"
									>
										View docs
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="relative z-20 mx-auto mb-24 mt-20  max-w-7xl gap-1 px-4 sm:gap-2 md:gap-3 md:px-6">
					<div className="flex-1 flex-shrink">
						<h2 className="my-3 text-left text-3xl font-bold tracking-tighter [text-wrap:balance] sm:text-4xl">
							<span className=" bg-gradient-to-b from-noops-600 to-noops-900 bg-clip-text py-1 pr-2 text-transparent">
								Deploy in under 5 minutes
							</span>
						</h2>
					</div>

					<div className="flex flex-col items-center gap-y-8 sm:gap-x-[2%]   md:flex-row">
						<div className="relative col-span-3 flex aspect-square  h-64 shrink-0 items-center justify-center overflow-clip rounded-2xl border border-white border-t-white bg-gradient-to-br from-blue-100 via-white to-white p-4 shadow-lg shadow-noops-200/70 ring-1 ring-noops-100 md:h-64 lg:h-80 xl:h-96">
							<DockerLogo className="w-[90%] text-[#1D63ED]" />
						</div>

						<div className="col-span-7">
							<h2 className="text-noops-700">
								Write it. Docker it. Deploy it.
							</h2>

							<p className="m-0  text-slate-500">
								Getting your application ready for deployment is
								straightforward.
								<br /> <br />
								Just Dockerize your application, and it's ready to be deployed
								with ease on No_Ops. No complex setup or tedious configurations
								– just chuck it in a container and its ready to go.
								<br /> <br />
								No need to change your workflow, you can keep using your
								favourite tools and technologies.
								<br /> <br />
								{/* You can view our guide on Dockerizing your application below. */}
								View our docs to get started.
							</p>

							<Link
								to="/docs"
								className="group relative mt-4 inline-block rounded-full border border-noops-600/50 border-t-noops-500 bg-noops-600 px-3 py-0.5 text-sm text-white shadow-md shadow-noops-1000/30 ring-1 ring-noops-700 transition hover:border-t-noops-400 hover:bg-noops-500 hover:text-white hover:no-underline hover:ring-noops-600"
							>
								View docs
							</Link>
						</div>
					</div>
				</div>

				<div className="relative z-20 mx-auto my-24  max-w-7xl gap-1 px-4 sm:gap-2 md:gap-3 md:px-6">
					<div className="flex-1 flex-shrink">
						<h2 className="my-3 text-center text-4xl font-bold tracking-tighter [text-wrap:balance] sm:text-left sm:text-4xl">
							<span className=" bg-gradient-to-b from-noops-600 to-noops-900 bg-clip-text py-1 pr-2 text-transparent">
								Deploy into multiple environments
							</span>
						</h2>
						<p className="mt-1 text-center text-sm font-medium text-noops-600 sm:text-left md:text-lg">
							Deploy into as many environments as you need. Development,
							staging, testing, and production? No worries.
						</p>
					</div>

					<div className="relative mx-auto mb-32  max-w-7xl overflow-clip">
						<div className="relative overflow-clip rounded-[18px] bg-noops-100/40 p-1.5 leading-[0]  ring-1 ring-noops-100   sm:rounded-[28px] sm:p-4">
							<div className="overflow-clip rounded-xl border border-noops-200 shadow-lg shadow-noops-200">
								<img
									src="/product/portal_deployments_page.png"
									alt="App screenshot"
									width={2432}
									height={1442}
									className="size-full "
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="relative z-20 mx-auto my-24  max-w-7xl gap-1 px-4 sm:gap-2 md:gap-3 md:px-6">
					<div className="flex-1 flex-shrink">
						<h2 className="my-3 text-center text-4xl font-bold tracking-tighter [text-wrap:balance] sm:text-left sm:text-4xl">
							<span className=" bg-gradient-to-b from-noops-600 to-noops-900 bg-clip-text py-1 pr-2 text-transparent">
								Configure your services with YAML
							</span>
						</h2>
					</div>

					<div className="relative mx-auto mb-32 max-w-7xl">
						<div className="">
							<Services />
						</div>
					</div>
				</div>

				<div className="relative mx-auto mb-24 mt-12 max-w-6xl">
					<div className="absolute -inset-4 rounded-[32px] border border-noops-200/50 bg-noops-600 bg-opacity-5"></div>

					<div className="relative isolate w-full overflow-hidden rounded-2xl border border-noops-100 bg-noops-1000 px-5 py-10 opacity-100 shadow-lg shadow-noops-200 sm:px-8 sm:py-28">
						<div className="flex flex-col justify-between gap-6 sm:flex-row">
							<div className="text-center sm:text-left">
								<h2 className=" m-0 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-4xl">
									Ready to deploy fast?
								</h2>
							</div>

							<div className="flex flex-row items-center  justify-center gap-4 sm:flex-col sm:gap-2">
								<a
									href="/sign-up"
									className="group relative inline-block rounded-[10px] border-2 border-noops-700 bg-gradient-to-b from-noops-400 to-noops-600 px-4 py-2 text-sm font-medium text-white hover:text-white"
								>
									<div className="absolute inset-0.5 rounded-md bg-noops-600 transition group-hover:opacity-30" />

									<div className="relative inline-flex w-full items-center gap-x-1">
										Get started
									</div>
								</a>

								<a
									href="https://savvycal.com/noops/intro"
									target="_blank"
									className="group relative inline-block rounded-[10px] border-2 border-noops-300 bg-gradient-to-b from-white to-noops-200 px-4 py-2 text-sm font-medium text-noops-975 hover:text-noops-975"
								>
									<div className="absolute inset-0.5 rounded-md bg-noops-200 transition group-hover:opacity-30" />

									<div className="relative inline-flex w-full items-center gap-x-1">
										Book demo
									</div>
								</a>
							</div>
						</div>

						<div className="absolute left-1/2 top-[77%] aspect-square  w-[250%] -translate-x-1/2 scale-[95%] rounded-full bg-noops-200 blur-2xl sm:top-[80%] md:top-[60%] "></div>
						<div className="absolute left-1/2 top-[77%] aspect-square  w-[250%] -translate-x-1/2 scale-[100%] rounded-full  bg-noops-600 mix-blend-overlay blur-2xl sm:top-[80%] md:top-[60%] "></div>
						<div className="absolute left-1/2 top-[77%] aspect-square  w-[250%] -translate-x-1/2 scale-[92%] rounded-full  bg-white mix-blend-overlay blur-xl   sm:top-[80%] md:top-[60%]"></div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
