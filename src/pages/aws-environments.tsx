import {
	LinkIcon,
	LockClosedIcon,
	UserGroupIcon,
} from "@heroicons/react/24/solid";
import Layout from "@theme/Layout";

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

export default () => {
	return (
		<Layout
			title="AWS Environments - No_Ops"
			description="Simple Dev Environments"
		>
			<div className="min-h-[100dvh] overflow-x-clip bg-noops-50">
				<div className="relative  h-full  flex-col  ">
					<div className="relative mx-auto flex max-w-7xl flex-col">
						<div className="relative mx-auto flex  w-full items-end pt-[calc(5dvh)] lg:pt-[calc(20dvh)] ">
							<div className="relative mx-auto w-full max-w-6xl flex-1 text-center lg:pb-16">
								<div className="absolute inset-0 flex items-center justify-center overflow-visible bg-gradient-radial from-noops-100 via-transparent via-60% to-transparent"></div>

								<div className="relative">
									<h6 className="text-base font-normal text-noops-500">
										AWS & Environments
									</h6>
									<h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
										<span className="bg-gradient-to-b from-noops-600 to-noops-900 bg-clip-text py-1 text-transparent">
											Truly Simple Environment Management
										</span>
									</h1>
									<p className="mx-auto max-w-3xl text-balance text-2xl text-noops-600">
										Easiest way to deploy new environments
									</p>
								</div>
							</div>
						</div>

						<div className="relative m-1 overflow-clip rounded-[18px] bg-noops-100/40 p-1.5 leading-[0]  ring-1 ring-noops-100 sm:m-4   sm:rounded-[28px] sm:p-4">
							<div className="overflow-clip rounded-xl border border-noops-200 shadow-lg shadow-noops-200">
								<div className="flex justify-between  bg-noops-100 px-4 py-1 text-sm font-medium leading-normal text-noops-800">
									<div className="flex items-center gap-x-1">
										<LockClosedIcon className="size-4" />
										portal.getnoops.com
									</div>
									<div className="flex items-center gap-x-1">
										<div className="size-3 rounded-full border border-noops-300 transition hover:border-red-600 hover:bg-red-600" />
										<div className="size-3 rounded-full border border-noops-300 transition hover:border-yellow-600 hover:bg-yellow-600" />
										<div className="size-3 rounded-full border border-noops-300 transition hover:border-green-600 hover:bg-green-600" />
									</div>
								</div>
								<img
									src="/product/portal_aws_accounts.png"
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
						<h2 className="my-3 text-left text-3xl font-bold tracking-tighter [text-wrap:balance] sm:text-4xl">
							<span className=" bg-gradient-to-b from-noops-600 to-noops-900 bg-clip-text py-1 pr-2 text-transparent">
								Connect your AWS Accounts
							</span>
						</h2>
						{/* <p className="mt-1 max-w-lg text-sm font-medium text-noops-500 md:text-lg">
							Link as many AWS accounts as you need to No_Ops
						</p> */}
					</div>

					<div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-9 sm:gap-4">
						<div className="size-full overflow-clip rounded-[16px] bg-noops-100/40 p-2  leading-[0] ring-1   ring-noops-100 sm:col-span-6">
							<div className="size-full overflow-clip rounded-lg border border-noops-200 shadow-lg shadow-noops-200">
								<img
									src="/product/portal_connect_aws_account.png"
									className="size-full scale-[210%] object-cover"
								/>
							</div>
						</div>

						<div className="size-full overflow-clip  rounded-[16px] bg-noops-100/40 p-2  leading-[0] ring-1   ring-noops-100 sm:col-span-3">
							<div className=" size-full max-h-72 overflow-clip rounded-lg border border-noops-200 shadow-lg shadow-noops-200 sm:max-h-max">
								<img
									src="/product/portal_aws_account_panel.png"
									className="size-full object-cover object-top"
								/>
							</div>
						</div>
					</div>

					<div className="">
						<p className="mt-8 text-center text-lg leading-8 text-slate-600">
							Link as many AWS accounts as you like to No_Ops, allowing you to
							manage all your environments from a single location.
						</p>
						<dl className="mt-6 flex max-w-xl flex-wrap items-center justify-center gap-x-8 text-base leading-7 text-slate-500 sm:mt-4 lg:max-w-none">
							{features.map((feature) => (
								<div key={feature.name} className="relative pl-9">
									<dt className="inline font-semibold text-noops-600">
										<feature.icon
											className="absolute left-1 top-1 h-5 w-5 text-noops-700"
											aria-hidden="true"
										/>
										{feature.name}
									</dt>{" "}
									<dd className="m-0">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>

				<div className="relative z-20 mx-auto my-24  max-w-7xl gap-1 px-4 sm:gap-2 md:gap-3 md:px-6">
					<div className="flex-1 flex-shrink">
						<h2 className="my-3 text-center text-4xl font-bold tracking-tighter [text-wrap:balance] sm:text-left sm:text-4xl">
							<span className=" bg-gradient-to-b from-noops-600 to-noops-900 bg-clip-text py-1 pr-2 text-transparent">
								New environments in minutes, not weeks
							</span>
						</h2>
						{/* <p className="mt-1 max-w-lg text-sm font-medium text-noops-500 md:text-lg">
							Link as many AWS accounts as you need to No_Ops
						</p> */}
					</div>

					<div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-8 sm:gap-[1%]">
						<div className="flex h-full flex-col-reverse justify-between gap-4 sm:col-span-3 sm:flex-col sm:gap-0">
							<div className="overflow-clip rounded-[16px] bg-noops-100/40 p-2  leading-[0] ring-1   ring-noops-100">
								<div className=" overflow-clip rounded-lg border border-noops-200 shadow-lg shadow-noops-200">
									<img
										src="/product/portal_create_env.png"
										className="h-full object-cover"
									/>
								</div>
							</div>

							<div className="mt-4 text-balance text-center">
								<h4 className="mb-2  text-base font-semibold leading-none text-noops-700 sm:text-lg">
									1. Create Environments
								</h4>
								<p className="mb-0   text-sm text-slate-500 sm:text-base/6">
									Easy to use interface to create new environments in seconds
								</p>
							</div>
						</div>

						<div className="flex h-full flex-col-reverse justify-between gap-4 sm:col-span-5 sm:flex-col  sm:gap-0">
							<div className=" overflow-clip rounded-[16px] bg-noops-100/40 p-2  leading-[0] ring-1   ring-noops-100 sm:col-span-2">
								<div className=" overflow-clip rounded-lg border border-noops-200 shadow-lg shadow-noops-200">
									<img
										src="/product/portal_manage_envs.png"
										className="object-cover"
									/>
								</div>
							</div>

							<div className="mt-4 text-balance text-center">
								<h4 className="mb-2  text-base font-semibold leading-none text-noops-700 sm:text-lg">
									2. Environment Management
								</h4>
								<p className="mb-0   text-sm text-slate-500 sm:text-base/6">
									Manage environments according to your pipeline process
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-0 text-center">
					<h4 className="mb-2  text-base font-semibold leading-none text-noops-700 sm:text-lg">
						3. Ready for Deployment
					</h4>
					<p className="mb-0   text-sm text-slate-500 sm:text-base/6">
						In minutes, you can have a new environment ready for deployment
					</p>
				</div>
				<div className="relative mx-auto mb-32 max-h-[36rem] max-w-7xl overflow-clip">
					<div className="absolute inset-x-0 -bottom-px z-10 h-1/4 bg-gradient-to-b from-transparent to-noops-50"></div>
					<div className="relative m-1 overflow-clip rounded-[18px] bg-noops-100/40 p-1.5 leading-[0]  ring-1 ring-noops-100 sm:m-4   sm:rounded-[28px] sm:p-4">
						<div className="overflow-clip rounded-xl border border-noops-200 shadow-lg shadow-noops-200">
							<img
								src="/product/portal_deployment_dashboard_pre_redesign.png"
								alt="App screenshot"
								width={2432}
								height={1442}
								className="size-full "
							/>
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
								<p className=" m-0 mt-2 max-w-xl text-base leading-none text-noops-100 sm:mt-4">
									Try now for free or book a demo to see how we can help you
								</p>
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
