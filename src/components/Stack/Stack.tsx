import React from "react";

interface StackProps {
	title: string | JSX.Element;
	description: string;
	href: string;
}

const Stack = ({ title, description, href }: StackProps) => {
	return (
		<div className="relative overflow-hidden bg-noops-1000 shadow-2xl shadow-noops-600/40">
			<div className="absolute inset-0 top-1/4 aspect-square rounded-full bg-gradient-radial from-noops-600/10 to-accent/10 blur-3xl"></div>
			<div className="relative isolate mx-auto max-w-7xl overflow-hidden py-24 sm:px-6 sm:py-32 lg:px-8">
				<div className="relative px-6 py-24 text-center sm:px-16">
					<h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
						{title}
					</h2>

					<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-noops-300">
						{description}
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href={href}
							className="inline-flex cursor-pointer items-center gap-x-2 rounded-full border border-transparent px-4 py-1.5 text-sm font-medium text-noops-500 transition hover:border-noops-500/60 hover:bg-noops-600 hover:bg-opacity-10 hover:shadow-lg hover:shadow-noops-400/10 focus-visible:outline focus-visible:outline-noops-500/60"
						>
							Learn more
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stack;
