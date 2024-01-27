import { ArrowRightIcon } from "@heroicons/react/20/solid";
import GitHub from "../SVGs/GitHub/GitHub";
import Slack from "../SVGs/Slack/Slack";
import X from "../SVGs/X/X";
import Blob from "./Blob/Blob";

const Links = [
	{
		title: "PRODUCT",
		links: [
			{
				title: "Home",
				href: "/",
			},
			{
				title: "Who We Help",
				href: "/who-we-help",
			},
			{
				title: "How It Works",
				href: "/how-it-works",
			},
			{
				title: "Pricing",
				href: "/pricing",
			},
		],
	},
	{
		title: "COMPANY",
		links: [
			{
				title: "Contact Us",
				href: "/contact",
			},
			{
				title: "Community",
				href: "/community",
			},
		],
	},
];

const Socials = [
	{
		name: "Slack",
		href: "https://join.slack.com/t/getnoops/shared_invite/zt-25fo11ewy-5z5iMXlaDvxRv6sfp8wZHA",
		logo: <Slack className="h-4 " />,
	},
	{
		name: "X",
		href: "https://x.com/getnoops",
		logo: <X className="h-4 " />,
	},
	{
		name: "GitHub",
		href: "https://github.com/getnoops",
		logo: <GitHub className="h-4 " />,
	},
];

const Footer = () => {
	return (
		<div className="overflow-clip bg-noops-1000">
			<div className="relative    mx-auto min-h-[20rem]  text-white">
				<div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-16 py-20 sm:grid-cols-4 sm:gap-4">
					<div className=" flex flex-col items-start justify-between">
						<img
							src="/logo_smile.svg"
							alt="logo"
							className=" h-10 "
							draggable={false}
						/>
						<div className="hidden gap-4 sm:flex">
							{Socials.map((social) => (
								<a
									key={social.href}
									href={social.href}
									className="text-noops-300 transition hover:text-noops-100"
								>
									{social.logo}
								</a>
							))}
						</div>
					</div>
					<div className="col-span-3 grid grid-cols-2 gap-8 sm:gap-4 lg:grid-cols-3">
						{Links.map((link) => (
							<div key={link.title}>
								<div>
									<h6 className="m-0 text-sm font-normal uppercase tracking-[0.25rem] text-noops-300">
										{link.title}
									</h6>
									<div className="mt-1 h-px w-full max-w-[200px] bg-noops-300"></div>
								</div>

								<div className="space-y-4">
									{link.links.map((l) => (
										<a
											key={l.href}
											href={l.href}
											className="group mt-4 flex max-w-fit items-center gap-x-2 text-sm tracking-wide text-noops-200 transition hover:text-noops-400 hover:no-underline"
										>
											{l.title}
											<ArrowRightIcon className="h-5 text-noops-200 opacity-0 transition group-hover:text-noops-400 group-hover:opacity-100" />
										</a>
									))}
								</div>
							</div>
						))}
					</div>

					<div className="col-span-3 flex justify-end gap-4 sm:hidden">
						{Socials.map((social) => (
							<a
								key={social.href}
								href={social.href}
								className="text-noops-300 transition hover:text-noops-100"
							>
								{social.logo}
							</a>
						))}
					</div>
				</div>
				{/* BLOB */}
				<div className="absolute inset-0 ">
					<div className="absolute -left-[80%] top-[80%] flex h-144 w-full items-center justify-center sm:-left-[20%] sm:top-[60%] lg:-left-[5%] lg:top-1/2">
						{/* b980fa for a more pink-ish look
                ae8cf8 for a more blue-ish look
             */}
						<Blob
							className="absolute left-0  h-[100%] blur-[120px]"
							fill="#ae8cf8"
						/>
						<Blob
							className="absolute left-0 h-[100%] mix-blend-overlay blur-[120px]"
							fill="#cab6fc"
						/>
						<Blob
							className="absolute left-0  h-[50%] mix-blend-overlay blur-[120px]"
							fill="#ece7fe"
						/>

						{/* <div className="absolute -inset-[100%] bg-black opacity-10  mix-blend-overlay"></div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
