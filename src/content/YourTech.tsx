import { YourTechGraphic } from "../components";

export const YourTech = () => {
	return (
		<section className="relative overflow-x-clip px-6 py-24 sm:py-32 lg:px-8">
			<div className="mx-auto max-w-5xl text-center">
				<h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
					<span className="bg-gradient-to-t from-slate-600 to-slate-900 bg-clip-text text-transparent">
						Use{" "}
					</span>
					<span className="bg-gradient-to-r from-noops-600 to-accent bg-clip-text text-transparent">
						your tech{" "}
					</span>
				</h2>
				<p className="mt-6 text-lg leading-8 text-slate-600">
					Use your favourite tools and technologies
				</p>
			</div>

			<YourTechGraphic />
		</section>
	);
};
