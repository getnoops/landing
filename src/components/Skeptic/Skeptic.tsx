import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const tabs = [
	{
		name: "Landing (this site)",
		href: "#",
	},
	{
		name: "NoOps Portal",
		href: "#",
	},
	{
		name: "NoOps Documentation",
		href: "#",
	},
];

const Landing = () => {
	return (
		<pre>
			{`id = "bond-buckets"

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "test-bucket" {
  bucket_name = "contextcloud-bond-test-bucket"
}

resource "aws_s3_bucket" "content-bucket" {
  bucket_name = "contextcloud-bond-content-bucket"
}`}
		</pre>
	);
};
const Portal = () => {
	return (
		<pre>
			{`id = "bond-buckets"

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "test-bucket" {
  bucket_name = "contextcloud-bond-test-bucket"
}

resource "aws_s3_bucket" "content-bucket" {
  bucket_name = "contextcloud-bond-content-bucket"
}`}
		</pre>
	);
};
const Docs = () => {
	return (
		<pre>
			{`id = "bond-buckets"

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "test-bucket" {
  bucket_name = "contextcloud-bond-test-bucket"
}

resource "aws_s3_bucket" "content-bucket" {
  bucket_name = "contextcloud-bond-content-bucket"
}`}
		</pre>
	);
};

const DisplayFile = (name: string) => {
	switch (name) {
		case "Landing (this site)":
			return <Landing />;
		case "NoOps Portal":
			return <Portal />;
		case "NoOps Documentation":
			return <Docs />;
		default:
			return <></>;
	}
};

interface SkepticProps {
	title: string;
	description?: string;
	prompt: string;
	cta: string;
}

const Skeptic = ({ title, description, prompt, cta }: SkepticProps) => {
	const [selectedTab, setSelectedTab] = useState(tabs[0]);

	return (
		<div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
			<div className="relative lg:order-last lg:col-span-5">
				<svg
					className="absolute -top-44 left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-slate-50/5 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
					aria-hidden="true"
				>
					<defs>
						<pattern
							id="e87443c8-56e4-4c20-9111-55b82fa704e3"
							width={200}
							height={200}
							patternUnits="userSpaceOnUse"
						>
							<path d="M0.5 0V200M200 0.5L0 0.499983" />
						</pattern>
					</defs>
					<rect
						width="100%"
						height="100%"
						strokeWidth={0}
						fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
					/>
				</svg>
			</div>
			<svg
				viewBox="0 0 801 1036"
				aria-hidden="true"
				className="absolute -top-80 left-[max(6rem,33%)] -z-10 w-[50.0625rem] transform-gpu blur-3xl  sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
			>
				<path
					fill="url(#bba7d695-d9bb-4e8a-a43b-2b951b4ac9c0)"
					fillOpacity=".3"
					d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.653 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
				/>
				<defs>
					<linearGradient
						id="bba7d695-d9bb-4e8a-a43b-2b951b4ac9c0"
						x1="508.179"
						x2="-28.677"
						y1="-116.221"
						y2="1091.63"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#af84fb" />
						<stop offset={1} stopColor="#6f22ce" />
					</linearGradient>
				</defs>
			</svg>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto lg:mx-0">
					<h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						{title}
					</h1>
					<p className="whitespace- mt-6 text-xl leading-8 text-noops-200">
						{/* {description} */}
						We don't just provide NoOps solutions, we live and breathe it.
						<br />
						That's why we trust our own NoOps platform to manage and deploy all
						of our products with ease and efficiency.
					</p>
					<p className="mt-6 text-2xl leading-8 text-noops-300">{prompt}</p>
				</div>
				<div className="mt-12 w-full rounded-xl bg-slate-800 p-2 text-noops-100">
					<div className="flex sm:text-lg">
						{tabs.map((tab, i) => (
							<div
								key={i}
								onClick={() => setSelectedTab(tab)}
								className={cn(
									i == 0 &&
										selectedTab.name !== tab.name &&
										"hover:rounded-bl-lg",

									i == 2 &&
										selectedTab.name !== tab.name &&
										"hover:rounded-br-lg",

									selectedTab.name === tab.name
										? "bg-slate-900/50"
										: "hover:bg-slate-900/30",
									"flex-1 cursor-pointer  rounded-t-lg px-4 py-3 font-medium text-slate-300 transition",
								)}
							>
								{tab.name}
							</div>
						))}
					</div>
					<div
						className={cn(
							selectedTab.name != tabs[0].name && "rounded-tl-lg",
							selectedTab.name != tabs[2].name && "rounded-tr-lg",
							"rounded-b-lg bg-slate-900/50 p-4 transition",
						)}
					>
						<AnimatePresence mode="wait">
							<motion.div
								key={selectedTab.name}
								exit={{ opacity: 0 }}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.2 }}
								className="overflow-x-auto text-orange-300"
							>
								{DisplayFile(selectedTab.name)}
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
				<div className="mt-8 flex justify-center">
					<a
						href="#"
						className="inline-flex cursor-pointer items-center gap-x-2 rounded-full border border-transparent px-4 py-1.5 text-sm font-medium text-white transition hover:border-white/60 hover:bg-white hover:bg-opacity-10 hover:shadow-lg hover:shadow-white/10 focus-visible:outline focus-visible:outline-white/60"
					>
						{cta} <span aria-hidden="true">→</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Skeptic;
