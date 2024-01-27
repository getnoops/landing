import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { CommandLineIcon, LinkIcon } from "@heroicons/react/24/outline";
import {
	CloudArrowUpIcon,
	CpuChipIcon,
	SparklesIcon,
} from "@heroicons/react/24/solid";
import Layout from "@theme/Layout";
import { EnvironmentGraphic, Footer } from "../components";
import { HeroGradient, ServicesNew } from "../components/HowItWorks";

// have to do some funky stuff to get the background glow gradient to work.
// basically you have to z index it to get it on the right layer so the hero gradient and the content gradient mix together
// also we have to put all the content sections on the z index 20 because for the deploy one we have a mix blend difference to make it cutout the background gradient and won't work unless its done like this

export default () => {
	return (
		<Layout title="An Overview of our Solution">
			<section className="min-h-screen bg-noops-1000 text-noops-300">
				<HeroGradient />
				<div className="relative z-30 flex h-screen items-center overflow-x-clip">
					<div className="relative mx-auto max-w-2xl py-12 text-center md:py-28">
						<div className="relative">
							<h2 className="m-0 text-5xl font-bold tracking-tight text-white md:text-6xl">
								<span className="bg-gradient-to-b from-noops-900 to-accent bg-clip-text py-1 text-transparent">
									How it works
								</span>
							</h2>
							<p className="mt-6 max-w-lg text-lg font-medium leading-8 text-accent [text-wrap:balance] md:text-lg">
								An overview of our solution
							</p>
						</div>
					</div>
				</div>

				<div className="relative mx-auto max-w-[110rem] overflow-x-clip py-24 md:overflow-visible md:py-36">
					<div className="pointer-events-none absolute -inset-x-20 inset-y-0 z-0 rounded-[100px] bg-noops-400 blur-[44px] md:inset-2"></div>
					<div className="pointer-events-none absolute -inset-x-20 inset-y-0 z-10 rounded-[100px] bg-noops-100 mix-blend-overlay blur-[44px] md:inset-2"></div>
					<div className="relative">
						<section className="relative z-20 px-4 lg:px-8">
							<div className="mx-auto flex max-w-5xl gap-2 md:gap-3">
								<div className="w-[1%] transition-all sm:w-[4%]"></div>
								<div className="w-12 flex-initial sm:w-14 md:w-16">
									<div className="mx-auto flex aspect-square w-full flex-initial items-center justify-center rounded-full bg-gradient-to-br from-accent to-noops-500 text-3xl text-noops-200 shadow-inner shadow-white/50 sm:text-4xl md:text-5xl">
										1
									</div>
									<div className="mx-auto h-24 w-1 bg-gradient-to-b from-noops-500 via-accent"></div>
								</div>
								<div className="flex-1 flex-shrink">
									<h2 className="m-0 text-left text-4xl font-bold tracking-tighter [text-wrap:balance] sm:text-5xl">
										<span className="bg-gradient-to-r from-noops-600 to-accent bg-clip-text py-1 pr-2 text-transparent">
											Connect your AWS account
										</span>
									</h2>
									<p className="mt-2 max-w-lg text-base font-medium text-accent md:text-lg">
										This is where your infrastructure is provisioned
									</p>
								</div>
							</div>

							<div className="mx-auto grid max-w-md grid-cols-1 gap-x-8 gap-y-12 px-4 md:max-w-3xl md:grid-cols-2 lg:mx-auto lg:max-w-4xl lg:grid-cols-2">
								<article className="relative flex flex-col items-start overflow-clip rounded-[28px] border border-noops-1000 bg-noops-1000/95 p-6">
									<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10"></div>
									<div className="relative flex w-full items-center justify-center rounded-xl border border-noops-400/20 bg-noops-400/10 py-6">
										<div className="flex h-28 items-center">
											<img
												src="/logos/AWS.svg"
												className="aspect-square h-[80%] rounded-full border-2 border-accent bg-gradient-to-br from-noops-100 to-accent p-2"
											/>
										</div>
									</div>
									<div className="relative max-w-xl">
										<div className="relative">
											<h3 className="mb-0 mt-5 font-mono text-lg font-semibold leading-6 tracking-wide text-noops-200 transition">
												01 <span className="text-accent">//</span> Have an AWS
												Account
											</h3>
											<p className="mb-0 mt-2 line-clamp-3 text-sm leading-6 text-noops-300">
												Create or bring an existing AWS account
											</p>
										</div>
									</div>
								</article>

								<article className="relative flex flex-col items-start overflow-clip rounded-[28px] border border-noops-1000 bg-noops-1000/95 p-6">
									<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10"></div>
									<div className="relative flex w-full items-center justify-center rounded-xl border border-noops-400/20 bg-noops-400/10 py-6">
										<div className="flex h-28 w-full flex-col items-center gap-4 px-4">
											<div className="flex h-full flex-1 items-center">
												<img
													src="/logos/AWS.svg"
													className="aspect-square h-[80%] rounded-full border-2 border-accent bg-gradient-to-br from-noops-100 to-accent p-2"
												/>
												<div className="h-2 w-4 scale-x-105 bg-accent"></div>
												<div className="rounded-full bg-accent p-1.5">
													<LinkIcon className="h-6 text-white" />
												</div>
												<div className="h-2 w-4 scale-x-105 bg-accent"></div>
												<img
													src="/logo_symbol.svg"
													className="aspect-square h-[80%] rounded-full border-2 border-accent bg-gradient-to-br from-noops-100 to-accent p-2"
												/>
											</div>
										</div>
									</div>
									<div className="relative max-w-xl">
										<div className="relative">
											<h3 className="mb-0 mt-5 font-mono text-lg font-semibold leading-6 tracking-wide text-noops-200 transition">
												02 <span className="text-accent">//</span> Connect to
												No_Ops
											</h3>
											<p className="mb-0 mt-2 line-clamp-3 text-sm leading-6 text-noops-300">
												Follow the 2 step process to connect your account
											</p>
										</div>
									</div>
								</article>
							</div>
						</section>
						{/* Separator */}
						<div className="relative z-20 px-4 lg:px-8">
							<div className="mx-auto flex max-w-5xl gap-2 md:gap-3">
								<div className="w-[1%] transition-all sm:w-[4%]"></div>
								<div className="w-12 flex-initial sm:w-14 md:w-16">
									<div className="mx-auto h-36 w-1 bg-gradient-to-b from-transparent via-accent to-accent md:h-52"></div>
								</div>
							</div>
						</div>

						<section className="relative z-20 px-4 lg:px-8">
							<div className="mx-auto flex max-w-5xl gap-2 md:gap-3">
								<div className="w-[1%] transition-all sm:w-[4%]"></div>
								<div className="w-12 flex-initial sm:w-14 md:w-16">
									<div className="mx-auto flex aspect-square w-full flex-initial items-center justify-center rounded-full bg-gradient-to-br from-accent to-noops-500 text-3xl text-noops-200 shadow-inner shadow-white/50 sm:text-4xl md:text-5xl">
										2
									</div>
									<div className="mx-auto h-24 w-1 bg-gradient-to-b from-noops-500 via-accent"></div>
								</div>
								<div className="flex-1 flex-shrink">
									<h2 className="m-0 text-left text-4xl font-bold tracking-tighter [text-wrap:balance] sm:text-5xl">
										<span className="bg-gradient-to-r from-noops-600 to-accent bg-clip-text py-1 pr-2 text-transparent">
											Create your environments
										</span>
									</h2>
									<p className="mt-2 max-w-lg text-base font-medium text-accent md:text-lg">
										Create any number of environments in your region
									</p>
								</div>
							</div>

							<div className="mx-auto -mt-8 mb-4 max-w-5xl">
								<EnvironmentGraphic />
							</div>
						</section>

						{/* Separator  */}
						<div className="relative z-20 px-4 lg:px-8">
							<div className="mx-auto flex max-w-5xl gap-2 md:gap-3">
								<div className="w-[1%] transition-all sm:w-[4%]"></div>
								<div className="w-12 flex-initial sm:w-14 md:w-16">
									<div className="mx-auto h-36 w-1 bg-gradient-to-b from-transparent via-accent to-accent md:h-52"></div>
								</div>
							</div>
						</div>

						<section className="relative z-20 px-4 lg:px-8">
							<div className="mx-auto flex max-w-5xl gap-2 md:gap-3">
								<div className="w-[1%] transition-all sm:w-[4%]"></div>
								<div className="w-12 flex-initial sm:w-14 md:w-16">
									<div className="mx-auto flex aspect-square w-full flex-initial items-center justify-center rounded-full bg-gradient-to-br from-accent to-noops-500 text-3xl text-noops-200 shadow-inner shadow-white/50 sm:text-4xl md:text-5xl">
										3
									</div>
									<div className="mx-auto h-24 w-1 bg-gradient-to-b from-noops-500 via-accent"></div>
								</div>
								<div className="flex-1 flex-shrink">
									<h2 className="m-0 text-left text-4xl font-bold tracking-tighter [text-wrap:balance] sm:text-5xl">
										<span className="bg-gradient-to-r from-noops-600 to-accent bg-clip-text py-1 pr-2 text-transparent">
											Define your services
										</span>
									</h2>
									<p className="mt-2 max-w-lg text-base font-medium text-accent md:text-lg">
										Define any number of services in your environment
									</p>
								</div>
							</div>

							<div className="mx-auto max-w-5xl">
								<ServicesNew />
							</div>
						</section>

						{/* Separator  */}
						<div className="relative z-20 px-4 lg:px-8">
							<div className="mx-auto flex max-w-5xl gap-2 md:gap-3">
								<div className="w-[1%] transition-all sm:w-[4%]"></div>
								<div className="w-12 flex-initial sm:w-14 md:w-16">
									<div className="mx-auto h-36 w-1 bg-gradient-to-b from-transparent via-accent to-accent md:h-52"></div>
								</div>
							</div>
						</div>

						{/* <section className="relative z-20 px-4 lg:px-8">  */}
						<section className="relative px-4 lg:px-8">
							<div className="relative z-20 mx-auto flex max-w-5xl gap-2 md:gap-3">
								<div className="w-[1%] transition-all sm:w-[4%]"></div>
								<div className="w-12 flex-initial sm:w-14 md:w-16">
									<div className="mx-auto flex aspect-square w-full flex-initial items-center justify-center rounded-full bg-gradient-to-br from-accent to-noops-500 text-3xl text-noops-200 shadow-inner shadow-white/50 sm:text-4xl md:text-5xl">
										4
									</div>
									<div className="mx-auto h-24 w-1 bg-gradient-to-b from-noops-500 via-accent"></div>
								</div>
								<div className="flex-1 flex-shrink">
									<h2 className="m-0 text-left text-4xl font-bold tracking-tighter [text-wrap:balance] sm:text-5xl">
										<span className="bg-gradient-to-r from-noops-600 to-accent bg-clip-text py-1 pr-2 text-transparent">
											Deploy
										</span>
									</h2>
									<p className="mt-2 max-w-lg text-base font-medium text-accent md:text-lg">
										Deliver your product
									</p>
								</div>
							</div>

							<div className="relative mx-auto max-w-5xl">
								<div className="w-full px-16 py-24">
									{/* <div
                className="absolute -inset-0 z-10 mix-blend-normal shadow-[inset_0px_0px_25px_30px_#ae8cf8]"
              >
              </div>
              <div
                className="absolute -inset-0 z-20 mix-blend-overlay shadow-[inset_0px_0px_25px_40px_#ece7fe]"
              >
              </div> */}

									<div className="absolute inset-0 z-0 rounded-[50px] bg-noops-400 mix-blend-difference blur-xl"></div>

									<div className="absolute inset-0 z-10 rounded-[70px] bg-gradient-to-r from-accent/20 via-transparent to-accent/20 blur-sm"></div>

									<div className="relative z-10 mx-auto grid max-w-md grid-cols-1 gap-x-8 gap-y-12 px-4 md:max-w-3xl md:grid-cols-2 lg:mx-auto lg:max-w-[68rem] lg:grid-cols-3">
										<article>
											<div className="relative flex w-full items-center justify-center rounded-xl border border-noops-400/20 bg-noops-400/10 py-6">
												<div className="flex h-28 w-full items-center px-6">
													<div className="flex h-9 w-full gap-x-3 overflow-clip rounded-lg border border-noops-300/30 bg-noops-300/20">
														<div className="flex items-center bg-noops-300/30 p-2 font-mono text-sm text-noops-100">
															<CommandLineIcon className="h-6" />
														</div>
														<div className="flex items-center truncate overflow-ellipsis whitespace-nowrap font-mono">
															$ git push
														</div>
													</div>
												</div>
											</div>
											<div className="relative max-w-xl">
												<div className="relative">
													<h3 className="mb-0 mt-5 inline-flex w-full items-center justify-center gap-x-2 font-mono text-xl font-semibold leading-6 tracking-wide text-noops-200 transition">
														<CloudArrowUpIcon className=" h-7 rounded" />
														Push
													</h3>
												</div>
											</div>
										</article>

										<article>
											<div className="relative flex w-full items-center justify-center rounded-xl border border-noops-400/20 bg-noops-400/10 py-6">
												<div className="flex h-28 w-full flex-col items-start justify-center px-6">
													<div className="flex w-fit items-center gap-x-1 rounded-t-md bg-[#62587d] px-4 py-1 font-mono text-sm text-noops-100">
														<CheckCircleIcon className="h-5" /> Build
													</div>
													<div className="w-full gap-x-3 overflow-clip rounded-lg rounded-tl-none border border-noops-300/30 bg-noops-300/20 py-2">
														<div className="flex flex-col">
															<div className="flex justify-between px-4">
																<span className="text-sm"> Downloading...</span>
																<span className="text-sm opacity-70">3s</span>
															</div>
															<div className="flex justify-between px-4">
																<span className="text-sm"> Compiling...</span>
																<span className="text-sm opacity-70">
																	8m 08s
																</span>
															</div>
															<div className="flex justify-between px-4">
																<span className="text-sm"> Testing...</span>
																<span className="text-sm opacity-70">
																	2m 45s
																</span>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="relative max-w-xl">
												<div className="relative">
													<h3 className="mb-0 mt-5 inline-flex w-full items-center justify-center gap-x-2 font-mono text-xl font-semibold leading-6 tracking-wide text-noops-200 transition">
														<CpuChipIcon className=" h-7 rounded" />
														Build
													</h3>
												</div>
											</div>
										</article>

										<article>
											<div className="relative flex w-full items-center justify-center rounded-xl border border-noops-400/20 bg-noops-400/10 py-6">
												<div className="flex h-28 w-full flex-col items-start justify-center px-6">
													<div className="flex w-full items-center justify-between gap-x-1 rounded-t-md bg-[#62587d] px-4 py-1 font-mono text-xs text-noops-200">
														getnoops.com
														<div className="flex gap-x-1">
															<div className="h-1.5 w-1.5 rounded-full border border-noops-300"></div>
															<div className="h-1.5 w-1.5 rounded-full border border-noops-300"></div>
															<div className="h-1.5 w-1.5 rounded-full border border-noops-300"></div>
														</div>
													</div>
													<div className="relative h-full w-full gap-x-3 overflow-clip rounded-lg rounded-t-none border border-noops-300/30 bg-noops-1000 py-2">
														<div className="pointer-events-none absolute inset-x-0 top-[90%] aspect-square rounded-[90px] bg-noops-400 blur"></div>
														<div className="pointer-events-none absolute inset-x-0 top-[90%] aspect-square rounded-[90px] bg-noops-100 mix-blend-overlay blur"></div>

														<p className="mb-2 mt-3 text-center text-xs font-bold tracking-tight [text-wrap:balance]">
															<span className="bg-gradient-to-b from-noops-100 to-noops-300 bg-clip-text py-1 text-transparent">
																DevOps{" "}
															</span>

															<span className="bg-gradient-to-r from-noops-600 to-accent bg-clip-text py-1 font-extrabold text-transparent">
																slowing{" "}
															</span>

															<span className="bg-gradient-to-b from-noops-100 to-noops-300 bg-clip-text py-1 text-transparent">
																you down?
															</span>
														</p>
														<a
															href="/"
															className="group relative mx-auto block w-fit cursor-pointer rounded-[10px] border border-noops-700 bg-gradient-to-b from-noops-400 to-noops-600 px-1.5 py-px font-medium text-white"
														>
															<div className="absolute inset-px rounded-md bg-noops-600 transition group-hover:opacity-30"></div>

															<div className="relative h-1 w-1 items-center text-[8px]"></div>
														</a>
													</div>
												</div>
											</div>
											<div className="relative max-w-xl">
												<div className="relative">
													<h3 className="mb-0 mt-5 inline-flex w-full items-center justify-center gap-x-2 font-mono text-xl font-semibold leading-6 tracking-wide text-noops-200 transition">
														<SparklesIcon className=" h-7 rounded" />
														Deliver
													</h3>
												</div>
											</div>
										</article>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</section>

			<div className="bg-noops-1000 py-40"></div>
			<Footer />
		</Layout>
	);
};
