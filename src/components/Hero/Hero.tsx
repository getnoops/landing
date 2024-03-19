import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { StarryBackground } from "..";

interface HomeProps {
	description?: string;
}

const Hero = ({ description }: HomeProps) => {
	return (
		<>
			<div className="relative bg-noops-1000 pt-14 sm:pt-28">
				<div className="absolute inset-x-0 top-0 z-10 h-[750px] sm:h-[900px]">
					<StarryBackground />
				</div>
				<div className="relative py-28 sm:py-40">
					<div className="relative z-10 mx-auto max-w-7xl px-2 lg:px-8">
						<div className="relative mx-auto text-center ">
							<h1 className="text-6xl font-bold tracking-tight [text-wrap:balance]  sm:text-7xl md:leading-[5rem]">
								<span className="bg-gradient-to-b from-noops-100 to-noops-300 bg-clip-text py-1 text-transparent">
									DevOps{" "}
								</span>

								<span className="bg-gradient-to-r from-noops-600 to-accent  bg-clip-text py-1 font-extrabold text-transparent">
									slowing{" "}
								</span>

								<span className="bg-gradient-to-b from-noops-100 to-noops-300 bg-clip-text py-1 text-transparent ">
									you down?
								</span>
							</h1>
							<p className=" mt-6 text-xl leading-8 text-noops-200 [text-wrap:balance]">
								Deploy your projects faster than ever while keeping best
								practices and security in mind
							</p>

							<a
								href="/sign-up"
								className="group relative mt-9 inline-block rounded-[10px] border-2 border-noops-700 bg-gradient-to-b from-noops-400 to-noops-600 px-6 py-2 font-medium text-white hover:text-white"
							>
								<div className="absolute inset-0.5 rounded-md bg-noops-600 transition group-hover:opacity-30" />
								<div className="pointer-events-none absolute -inset-3 rounded-2xl border border-noops-700/30 bg-noops-900/30 "></div>

								<div className="relative inline-flex w-full items-center gap-x-1">
									Get started <ArrowLongRightIcon className="h-6" />
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="relative h-[1066px] overflow-hidden bg-noops-1000">
					<img
						className="absolute inset-0 h-full w-full object-cover object-center"
						src="/images/noops_bg.webp"
						draggable={false}
						alt=""
					/>
				</div>
			</div>
		</>
	);
};

export default Hero;
