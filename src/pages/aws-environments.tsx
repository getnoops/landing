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
		<Layout title="Platform - No_Ops" description="A look at our platform.">
			<div className="min-h-[100dvh] bg-noops-50">
				<div className="relative  h-full  flex-col  ">
					<div className="relative mx-auto flex max-w-7xl flex-col">
						<div className="relative mx-auto flex  w-full items-end pt-[calc(5dvh)] lg:pt-[calc(20dvh)] ">
							<div className="relative mx-auto w-full max-w-5xl flex-1 text-center lg:pb-16">
								<div className="absolute inset-0 flex items-center justify-center overflow-visible bg-gradient-radial from-noops-100 via-transparent via-60% to-transparent"></div>

								<div className="relative">
									<h6 className="text-base font-normal text-noops-500">
										AWS & Environments
									</h6>
									<h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
										<span className="bg-gradient-to-b from-noops-600 to-noops-900 bg-clip-text py-1 text-transparent">
											Example text about AWS
										</span>
									</h1>
									<p className="mx-auto max-w-3xl text-balance text-2xl text-noops-600">
										Something something AWS environments
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
								Connect many AWS Accounts
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
						<p className="mt-8 text-lg leading-8 text-slate-600">
							You can link as many AWS accounts as you like to No_Ops, allowing
							you to manage all your environments from a single location.
						</p>
						<dl className="mt-6 flex max-w-xl flex-wrap items-center gap-x-8 text-base leading-7 text-slate-500 sm:mt-4 lg:max-w-none">
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
						<h2 className="my-3 text-left text-3xl font-bold tracking-tighter [text-wrap:balance] sm:text-4xl">
							<span className=" bg-gradient-to-b from-noops-600 to-noops-900 bg-clip-text py-1 pr-2 text-transparent">
								New environments in minutes, not weeks
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
						<p className="mt-8 text-lg leading-8 text-slate-600">
							You can link as many AWS accounts as you like to No_Ops, allowing
							you to manage all your environments from a single location.
						</p>
						<dl className="mt-6 flex max-w-xl flex-wrap items-center gap-x-8 text-base leading-7 text-slate-500 sm:mt-4 lg:max-w-none">
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
			</div>

		</Layout>
	);
};
