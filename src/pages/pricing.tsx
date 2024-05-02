import Layout from "@theme/Layout";
import { PricingComponent, StarryBackground } from "../components";

export default () => {
	return (
		<Layout
			title="No_Ops pricing"
			description="A simple, transparent pricing model that scales with you."
		>
			<div className="flex min-h-screen flex-col justify-between bg-noops-1000">
				<div className="relative h-full bg-noops-1000">
					<div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-full">
						<StarryBackground />
					</div>
					<div className="relative pt-12">
						<div className="relative mx-auto w-full max-w-7xl items-center lg:flex">
							<div className="relative mx-auto w-full flex-1 space-y-4 p-8 pt-28 lg:pb-16">
								<h6 className="text-base font-normal text-noops-300">
									Pricing
								</h6>
								<h1 className="text-5xl font-bold tracking-tight text-noops-100">
									Platform{" "}
									<span className="bg-gradient-to-r from-noops-600 to-accent bg-clip-text py-1 font-extrabold text-transparent">
										pricing
									</span>
								</h1>
								<p className="text-2xl text-noops-200">
									A simple, transparent pricing model that scales with you
								</p>
							</div>
						</div>
					</div>

					<div className="mx-auto max-w-7xl md:mb-24">
						<div className="px-8 pb-12 pt-4">
							<PricingComponent />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
