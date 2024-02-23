import { SparklesIcon } from "@heroicons/react/24/solid";
import Layout from "@theme/Layout";
import { Footer } from "../components";
import GitHub from "../components/SVGs/GitHub/GitHub";
import Slack from "../components/SVGs/Slack/Slack";
import X from "../components/SVGs/X/X";

export default () => {
	return (
		<Layout
			title="Community"
			description="Join the community and help us build the future of DevOps."
		>
			<div className="flex min-h-screen flex-col justify-between bg-noops-1000">
				<div className="h-full bg-noops-1000">
					<div className="relative">
						<div className="mx-auto w-full max-w-7xl items-center lg:flex">
							<div className="relative mx-auto w-full flex-1 space-y-4 p-8 pt-28 lg:pb-40 lg:pt-28">
								<div className="relative flex h-1 items-center justify-end lg:hidden">
									<SparklesIcon className=" h-48 text-noops-400 blur-[10px] lg:h-96 lg:blur-[20px] xl:h-112" />
									<SparklesIcon className=" absolute h-48 text-noops-300 mix-blend-overlay lg:h-96 xl:h-112" />
								</div>
								<h6 className="pt-4 text-base  font-normal text-noops-300">
									Community
								</h6>
								<h1 className="text-5xl font-bold tracking-tight text-noops-100">
									Get{" "}
									<span className="bg-gradient-to-r from-noops-600 to-accent bg-clip-text py-1 font-extrabold text-transparent">
										involved
									</span>
								</h1>
								<p className="text-2xl text-noops-200">
									Join the community and help us build the future of DevOps
								</p>
							</div>

							<div className="relative mx-auto hidden w-full flex-1 px-4 pb-12 pt-8 lg:flex lg:px-8">
								<div className="relative flex items-center justify-center">
									<SparklesIcon className=" h-48 text-noops-400 blur-[10px] lg:h-96 lg:blur-[20px] xl:h-112" />
									<SparklesIcon className=" absolute h-48 text-noops-300 mix-blend-overlay lg:h-96 xl:h-112" />
								</div>
							</div>
						</div>
					</div>

					<div className="mx-auto max-w-7xl md:mb-24">
						<div className="px-8 pb-12 pt-8">
							<div>
								<h3 className="m-0 text-3xl font-bold tracking-tight text-noops-100 md:text-4xl">
									Our social channels
								</h3>
								<p className="mt-2 text-sm text-noops-200 md:text-base">
									To get Involved, join our community channels
								</p>
							</div>

							<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
								<a
									href="https://join.slack.com/t/getnoops/shared_invite/zt-25fo11ewy-5z5iMXlaDvxRv6sfp8wZHA"
									target="_blank"
									rel="noopener noreferrer"
									className="group relative flex items-center gap-3 overflow-clip rounded-2xl border-2 border-noops-400/20 bg-noops-400/5 p-4 shadow-inner shadow-noops-400/10 hover:no-underline"
								>
									<div className="absolute inset-0 bg-gradient-to-t from-transparent to-noops-400/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
									<Slack className="h-8 text-noops-400" />
									<div className="flex items-center">
										<span className="text-base text-noops-400">
											Join our Slack
										</span>
									</div>
								</a>

								<a
									href="https://x.com/getnoops"
									target="_blank"
									rel="noopener noreferrer"
									className="group relative flex items-center gap-3 overflow-clip rounded-2xl border-2 border-noops-400/20 bg-noops-400/5 p-4 shadow-inner shadow-noops-400/10 hover:no-underline"
								>
									<div className="absolute inset-0 bg-gradient-to-t from-transparent to-noops-400/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
									<X className="h-8 text-noops-400" />
									<div className="flex items-center">
										<span className="text-base text-noops-400">
											Connect on X
										</span>
									</div>
								</a>

								<a
									href="https://github.com/getnoops"
									target="_blank"
									rel="noopener noreferrer"
									className="group relative flex items-center gap-3 overflow-clip rounded-2xl border-2 border-noops-400/20 bg-noops-400/5 p-4 shadow-inner shadow-noops-400/10 hover:no-underline"
								>
									<div className="absolute inset-0 bg-gradient-to-t from-transparent to-noops-400/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
									<GitHub className="h-8 text-noops-400" />
									<div className="flex items-center">
										<span className="text-base text-noops-400">
											View our GitHub
										</span>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</Layout>
	);
};
