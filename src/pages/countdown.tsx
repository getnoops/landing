import Layout from "@theme/Layout";
import { Fireworks } from "fireworks-js";
import { useEffect, useState } from "react";
import { CountdownText, Footer, StarryBackground } from "../components";
import { cn } from "../lib/utils";

export default () => {
	const [countDownComplete, setCountDownComplete] = useState(false);

	useEffect(() => {
		if (countDownComplete) {
			const container = document.getElementById("container");

			const fireworks = new Fireworks(container, {
				traceSpeed: 2,
				hue: {
					min: 250,
					max: 270,
				},
				delay: {
					min: 50,
					max: 60,
				},
				rocketsPoint: {
					min: 25,
					max: 75,
				},
			});
			fireworks.start();

			setTimeout(() => {
				fireworks.waitStop();
			}, 5500);
		}
	}, [countDownComplete]);

	const email =
		typeof window !== "undefined" ? localStorage.getItem("signup-email") : "";

	useEffect(() => {
		if (email) {
			// remove email from localStorage
			localStorage.removeItem("signup-email");
		}
	});

	return (
		<Layout title="Launch Countdown">
			<div className="relative flex h-[calc(100vh-6.813rem)] flex-col items-center bg-noops-1000">
				<div
					id="container"
					className="pointer-events-none absolute inset-0 z-50 select-none"
				></div>

				<div
					className={cn(
						countDownComplete ? "h-0" : "h-[5%]",
						"w-full transition-all duration-1000",
					)}
				></div>
				<div
					className={cn(
						countDownComplete
							? "h-full w-full rounded-none border-noops-400/[0%] shadow-none"
							: "h-[85%] w-[95%] rounded-[32px] border border-noops-400/10 shadow-lg md:w-[80%]",
						"relative flex   items-center justify-center overflow-clip border shadow-noops-400/10 transition-all duration-1000 ease-in-out",
					)}
				>
					<img
						src="/images/noops_bg.webp"
						alt="noops-bg"
						className="pointer-events-none absolute bottom-0 z-0 w-full translate-y-[65%] select-none"
						draggable={false}
					/>
					<div
						className={cn(
							countDownComplete
								? "rounded-none opacity-0"
								: "rounded-[31px] opacity-100",
							"pointer-events-none absolute inset-0  shadow-inner shadow-noops-400/10",
						)}
					></div>
					<div className="pointer-events-none absolute top-0 h-[82%] w-full">
						<StarryBackground />
					</div>

					{email && (
						<div
							className={cn(
								!countDownComplete ? "opacity-100" : "opacity-0",
								"absolute top-4 mx-4 rounded-2xl border border-noops-300/5 bg-noops-300/5 p-4 text-center transition duration-1000 lg:top-8",
							)}
						>
							<span className="font-medium text-noops-200">
								Thanks for signing up!
							</span>{" "}
							<br />
							<span className="text-noops-300">
								We haven't launched yet, but we'll send you an email when we do
							</span>
						</div>
					)}

					<CountdownText
						countDownComplete={countDownComplete}
						setCountDownComplete={setCountDownComplete}
					/>
				</div>

				<div
					className={cn(
						countDownComplete ? "bottom-1/4" : "bottom-0",
						"absolute  flex h-[10%] items-center transition-all duration-1000",
					)}
				>
					<div className="group/container relative flex items-center gap-x-2 overflow-clip rounded-[18px] border border-noops-300/5 bg-noops-300/5 p-2 text-sm">
						<div className="absolute inset-0 overflow-clip rounded-[17px]">
							<div className="absolute left-full h-full w-1/2 translate-x-0 bg-noops-400 opacity-0 blur-lg transition-all duration-500 group-hover/container:-translate-x-1/2 group-hover/container:opacity-100"></div>
							<div className="absolute left-full h-full w-1/4 translate-x-0 bg-noops-200 opacity-0 mix-blend-overlay blur-lg transition-all duration-500 group-hover/container:-translate-x-1/2 group-hover/container:opacity-100"></div>
						</div>

						<p className="m-0 cursor-default pl-1 font-medium text-noops-200">
							{!countDownComplete
								? "Don't feel like waiting?"
								: "We've officially launched!"}
						</p>

						<a
							href={!countDownComplete ? "/contact" : "/login"}
							className="group relative cursor-pointer rounded-[10px] border-2 border-noops-700 bg-gradient-to-b from-noops-400 to-noops-600 px-4 py-1.5 font-medium text-noops-300 outline-0 transition hover:no-underline focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-noops-1000"
						>
							<div className="absolute inset-0.5 rounded-md bg-noops-600 transition group-hover:opacity-30" />

							<div className="relative flex w-full items-center gap-x-1 text-white">
								{!countDownComplete ? "Contact Us" : "Try Now"}
							</div>
						</a>
					</div>
				</div>
			</div>

			<Footer />
		</Layout>
	);
};
