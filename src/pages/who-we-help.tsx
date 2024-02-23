import {
	BriefcaseIcon,
	CubeIcon,
	CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import Layout from "@theme/Layout";
import { Footer } from "../components";
import {
	Enterprise,
	MediumLargeBusiness,
	StartUp,
} from "../components/WhoWeHelp";

const sizes = [
	{
		name: "Startup",
		href: "#startup",
		description:
			"You're a small team with big dreams. You need to get your product to market fast, and you need to do it right. We can help you get there.",
		Icon: CubeTransparentIcon,
	},
	{
		name: "Medium / Large Business",
		href: "#medium-large-business",
		description:
			"You're a medium to large business with a lot of moving parts. You need to get your product to market fast, and you need to do it right. We can help you get there.",
		Icon: CubeIcon,
	},
	{
		name: "Enterprise",
		href: "#enterprise",
		description:
			"You're a large enterprise with a lot of moving parts. You need to get your product to market fast, and you need to do it right. We can help you get there.",
		Icon: BriefcaseIcon,
	},
];

export default () => {
	return (
		<Layout
			title="Who we help"
			description="Whether you're a startup or a large enterprise, we can help you streamline your DevOps pipeline."
		>
			<section className="min-h-screen bg-noops-1000 pt-24 text-noops-300">
				<div className="overflow-x-clip px-6 py-14">
					<div className="relative mx-auto mt-12 max-w-2xl text-center md:mt-28">
						<div className="pointer-events-none absolute -inset-[325%] flex items-center justify-center">
							<div className="absolute mx-auto aspect-square h-full -rotate-6 scale-y-[30%] rounded-full blur-2xl">
								<div className="absolute -inset-[80px] rounded-full border-[250px] border-noops-400 md:-inset-[280px] md:border-[280px]"></div>
							</div>
							<div className="absolute mx-auto aspect-square h-full -rotate-6 scale-y-[30%] rounded-full mix-blend-overlay blur-2xl">
								<div className="absolute -inset-[80px] rounded-full border-[250px] border-noops-200 md:-inset-[280px] md:border-[280px]"></div>
							</div>
							<div className="absolute mx-auto aspect-square h-full -rotate-6 scale-y-[30%] rounded-full mix-blend-overlay blur-2xl">
								<div className="absolute -inset-[-7.5px] rounded-full border-[75px] border-noops-50 md:-inset-[190px] md:border-[100px]"></div>
							</div>
						</div>

						<div className="relative">
							<h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
								<span className="bg-gradient-to-b from-noops-100 to-noops-300 bg-clip-text py-1 text-transparent">
									Who we help
								</span>
							</h1>
							<p className="mt-6 text-lg leading-8 text-noops-200 [text-wrap:balance]">
								Whether you're a startup or a large enterprise, we can help you
								streamline your DevOps pipeline
							</p>
						</div>
					</div>
				</div>

				<div className="mx-auto mt-72 max-w-6xl py-24">
					{/* titles  */}
					<div className="px-4">
						<h3 className="text-4xl font-bold tracking-tight text-noops-100">
							Built for your needs
						</h3>
						<p className="mt-2 text-noops-200">
							Select the size of your business to see how we can help you
						</p>
					</div>
					<div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-x-8 gap-y-12 px-4 md:max-w-3xl md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{sizes.map((size) => (
							<a href={size.href}>
								<article className="group relative flex cursor-pointer flex-col items-start justify-between rounded-[28px] border border-noops-300/10 bg-noops-300/5 p-6">
									<div className="pointer-events-none absolute -inset-px overflow-clip rounded-[28px] opacity-0 transition group-hover:opacity-100">
										<div className="absolute -inset-full bg-gradient-to-b from-noops-600 to-accent group-hover:animate-spin " />
										<div className="absolute inset-0.5 rounded-[26px] bg-[#261c38]" />
									</div>

									<div className="relative flex w-full items-center justify-center rounded-xl bg-noops-400/10 py-6">
										<size.Icon className=" h-36 " />
									</div>
									<div className="max-w-xl">
										<div className=" relative">
											<h3 className="mt-3 text-lg font-semibold leading-6 text-noops-200 transition group-hover:text-noops-50">
												<span className="absolute inset-0" />
												{size.name}
											</h3>
											<p className="mt-1.5 line-clamp-3 text-sm leading-6 text-noops-300">
												{size.description}
											</p>
										</div>
									</div>
								</article>
							</a>
						))}
					</div>
				</div>

				<StartUp />
				<MediumLargeBusiness />
				<Enterprise />
			</section>

			<Footer />
		</Layout>
	);
};
