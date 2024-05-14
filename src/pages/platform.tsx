import { LockClosedIcon } from "@heroicons/react/24/solid";
import Layout from "@theme/Layout";

export default () => {
	return (
		<Layout title="Platform - No_Ops" description="A look at our platform.">
			<div className=" bg-noops-1000">
				<div className="relative  h-full min-h-[100dvh] flex-col bg-noops-50 ">
					<div className="relative mx-auto flex max-w-7xl flex-col">
						<div className="relative mx-auto flex  w-full items-end pt-[calc(5dvh)] lg:pt-[calc(20dvh)] ">
							<div className="relative mx-auto w-full max-w-5xl flex-1 text-center lg:pb-16">
								<div className="absolute inset-0 flex items-center justify-center overflow-visible bg-gradient-radial from-noops-100 via-transparent via-60% to-transparent"></div>

								<div className="relative">
									<h6 className="text-base font-normal text-noops-500">
										Platform
									</h6>
									<h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
										<span className="bg-gradient-to-b from-noops-600 to-noops-900 bg-clip-text py-1 text-transparent">
											Bridging developers to the cloud
										</span>
									</h1>
									<p className="mx-auto max-w-3xl text-balance text-2xl text-noops-600">
										See how we're making it easier for developers to deploy
									</p>
								</div>
							</div>
						</div>

						<div className="m-4 overflow-clip rounded-[28px] bg-noops-100/40  p-4 leading-[0]   ring-1 ring-noops-100">
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
									src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
									alt="App screenshot"
									width={2432}
									height={1442}
									className="size-full  "
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
