import { cn } from "@site/src/lib/utils";
import React, { useState } from "react";

// write type for steps
interface StepsType {
	title: string;
	subject: string;
	description: string;
	cta?: React.ReactNode;
}

interface StepsProps {
	title?: string;
	description?: string;
	steps?: StepsType[];
}

const Steps = ({ title, description, steps }: StepsProps) => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<section className="px-6 py-24 sm:py-32 lg:px-8">
			<div className="mx-auto max-w-7xl text-center">
				<div className="space-y-6">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						<span className="bg-gradient-to-t from-noops-700 to-noops-400 bg-clip-text text-transparent">
							{title}
						</span>
					</h2>
					<p className="text-slate-600">{description}</p>
				</div>

				<div className="my-16 grid select-none grid-cols-3 gap-x-8">
					{steps &&
						steps.map((step, index) => (
							<div
								onClick={() => setSelectedIndex(index)}
								key={index}
								className={cn(
									index != selectedIndex && "opacity-80",
									"group relative cursor-pointer text-left transition",
								)}
							>
								<div className="absolute inset-0 scale-90 rounded-md bg-transparent transition group-hover:scale-100 group-hover:bg-slate-50" />
								<div className="relative space-y-2 p-3">
									<div
										className={cn(
											index == selectedIndex ? "bg-noops-500" : "bg-slate-400",
											" flex h-8 w-8 items-center justify-center rounded-md font-medium text-white transition",
										)}
									>
										{index + 1}
									</div>
									<h5
										className={cn(
											index == selectedIndex
												? "text-noops-700"
												: "text-slate-500",
											"text-sm font-medium transition",
										)}
									>
										{step.subject}
									</h5>
									<h3
										className={cn(
											index == selectedIndex
												? "text-slate-800"
												: "text-slate-700",
											" text-xl transition",
										)}
									>
										{step.title}
									</h3>
									<p
										className={cn(
											index == selectedIndex
												? "text-slate-600"
												: "text-slate-500",
											"text-sm transition",
										)}
									>
										{step.description}
										{step?.cta && step.cta}
									</p>
								</div>
							</div>
						))}
				</div>

				{/* <div className="my-10 bg-slate-50 rounded-md w-full border border-slate-100 p-4 overflow-hidden">
          <div className="flex p-1">
            <div className="h-96 w-[52rem] rounded-xl bg-white shadow shadow-slate-200"></div>
            <div className="h-96 w-[52rem] rounded-xl bg-white shadow shadow-slate-200"></div>
            <div className="h-96 w-[52rem] rounded-xl bg-white shadow shadow-slate-200"></div>
          </div>
        </div> */}
			</div>
		</section>
	);
};

export default Steps;
