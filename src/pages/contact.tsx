import Layout from "@theme/Layout";
import { ContactUsForm, Footer, TopBar } from "../components";
import Curve from "../components/SVGs/Curve/Curve";

export default () => {
	return (
		<Layout title="Contact Us">
			<div className="flex flex-col justify-between bg-noops-1000">
				<TopBar />

				<div className="bg-noops-1000">
					<div className="relative min-h-screen overflow-clip pt-10">
						<div className="absolute -bottom-0 -right-0 h-1/3 w-[1679px] blur-2xl md:h-1/2 md:blur-[80px] xl:h-2/3 2xl:h-[70%]">
							<Curve fill="#ae8cf8" className="absolute right-0 h-full " />
						</div>
						<div className="absolute -bottom-0 -right-0 h-1/3 w-[1679px] mix-blend-overlay blur-2xl md:h-1/2 md:blur-[80px] xl:h-2/3 2xl:h-[70%]">
							<Curve fill="#cab6fc" className="absolute right-0 h-full " />
						</div>

						<div className="mx-auto w-full max-w-7xl items-center lg:flex">
							<div className="relative mx-auto w-full flex-1 space-y-4 p-8 pt-20 lg:pb-40 lg:pt-28">
								<h6 className="text-noops-300">Contact Us</h6>
								<h1 className="text-5xl font-bold tracking-tight text-noops-100 [text-wrap:balance]">
									Whatever's on your mind,
									<span className="bg-gradient-to-r from-noops-600 to-accent bg-clip-text py-1 font-extrabold text-transparent">
										let us know
									</span>
								</h1>
								<p className="text-2xl text-noops-200">
									We can't wait to hear from you
								</p>
							</div>

							<div className="relative mx-auto w-full flex-1 px-4 pb-12 pt-8 lg:px-8 lg:pb-40 lg:pt-32">
								<ContactUsForm />
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</Layout>
	);
};
