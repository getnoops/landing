import Layout from "@theme/Layout";
import {
	Footer,
	Founders,
	OurStory,
	StarryBackground,
	Values,
} from "../components";

export default () => {
	return (
		<Layout title="About Us - No_Ops">
			<div className="bg-noops-1000">
				<div className="relative flex h-full min-h-[calc(100vh-8rem)] items-center justify-center bg-noops-1000">
					<div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-full">
						<StarryBackground />
					</div>
					<div className="relative">
						<div className="relative mx-auto w-full max-w-7xl items-center lg:flex">
							<div className="relative mx-auto w-full max-w-5xl flex-1 text-center lg:pb-16">
								<h6 className="text-base font-normal text-noops-400">
									Our Mission
								</h6>
								<h1 className="mb-4 mt-2 text-5xl font-bold tracking-tight text-white md:text-6xl">
									<span className="bg-gradient-to-b from-noops-100 to-noops-300 bg-clip-text py-1 text-transparent">
										Bridging Developers to the Cloud
									</span>
								</h1>
								<p className="mx-auto max-w-3xl text-balance text-2xl text-noops-300">
									No_Ops bridges developers to the cloud, enhancing the
									development experience for accelerated and cost-effective
									product delivery
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<OurStory />

			<Values />

			<Founders />

			<Footer />
		</Layout>
	);
};
