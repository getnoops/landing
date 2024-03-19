import {
	ArrowTopRightOnSquareIcon,
	MinusIcon,
	PlusIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const emailProviders = [
	{
		name: "Gmail",
		img: "./emails/gmail.png",
		domain: "https://mail.google.com",
	},
	{
		name: "Outlook",
		img: "./emails/outlook.png",
		domain: "https://outlook.live.com",
	},
	{
		name: "ProtonMail",
		img: "./emails/proton.png",
		domain: "https://mail.protonmail.com",
	},
	{
		name: "Yahoo",
		img: "./emails/yahoo.png",
		domain: "https://mail.yahoo.com",
	},
	{
		name: "iCloud",
		img: "./emails/icloud.png",
		domain: "https://www.icloud.com/mail",
	},
];

const EmailProvider = ({
	provider,
}: {
	provider: (typeof emailProviders)[0];
}) => {
	const [account, setAccount] = useState(0);

	const domain =
		provider.name === "Gmail" && account > 0
			? provider.domain + "/mail/u/" + account
			: provider.domain;

	return (
		<li className="group my-2 flex w-full items-center justify-between rounded-xl border border-noops-400/30 bg-noops-800/10 shadow-inner  shadow-noops-400/20 transition  hover:bg-noops-600/20">
			<a
				href={domain}
				key={provider.name}
				target="_blank"
				rel="noreferrer"
				className="flex-1 hover:no-underline"
			>
				<div className="flex items-center gap-x-2 p-4">
					<img
						src={provider.img}
						alt={provider.name}
						className="h-12 w-12 rounded-md object-contain"
					/>

					<div className="flex flex-col">
						<h2 className="mb-0 text-base font-medium text-noops-300 transition group-hover:text-noops-50">
							{provider.name}
						</h2>

						<p className="mb-0 text-sm text-noops-400 transition group-hover:text-noops-300">
							{domain}
						</p>
					</div>
				</div>
			</a>

			<div className="flex h-full flex-initial items-center gap-x-1 pr-4">
				{provider.name === "Gmail" && (
					<div className="flex items-center transition">
						<button
							onClick={() => {
								setAccount(account > 0 ? account - 1 : account);
							}}
							className="cursor-pointer bg-transparent p-0 text-sm text-noops-300 opacity-0 transition group-hover:opacity-100 hover:text-noops-50 focus-visible:opacity-100"
						>
							<MinusIcon className="h-5" />
						</button>

						<button
							onClick={() => {
								setAccount(account < 10 ? account + 1 : account);
							}}
							className="cursor-pointer bg-transparent p-0 text-sm text-noops-300 opacity-0 transition group-hover:opacity-100 hover:text-noops-50 focus-visible:opacity-100"
						>
							<PlusIcon className="h-5" />
						</button>
					</div>
				)}

				<a href={domain} key={provider.name} target="_blank" rel="noreferrer">
					<ArrowTopRightOnSquareIcon className="h-6 w-6 text-noops-300 transition group-hover:text-noops-50" />
				</a>
			</div>
		</li>
	);
};

const EmailQuickLinks = () => {
	return (
		<div className="relative mx-auto max-w-lg">
			<ul className="pl-0">
				{emailProviders.map((provider) => (
					<EmailProvider key={provider.name} provider={provider} />
				))}
			</ul>

			<div className="mt-6">
				<div className="text-center text-sm text-noops-300">
					If you don't see the email, please check your spam folder
				</div>
			</div>
		</div>
	);
};

export default EmailQuickLinks;
