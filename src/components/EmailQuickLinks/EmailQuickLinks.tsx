import {
	ArrowTopRightOnSquareIcon,
	EnvelopeOpenIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";

const emailProviders = [
	{
		name: "Gmail",
		img: "/emails/gmail.png",
		domain: "https://mail.google.com",
	},
	{
		name: "Outlook",
		img: "/emails/outlook.png",
		domain: "https://outlook.live.com",
	},
	{
		name: "ProtonMail",
		img: "/emails/proton.png",
		domain: "https://mail.protonmail.com",
	},
	{
		name: "Yahoo",
		img: "/emails/yahoo.png",
		domain: "https://mail.yahoo.com",
	},
	{
		name: "iCloud",
		img: "/emails/icloud.png",
		domain: "https://www.icloud.com/mail",
	},
];

const EmailQuickLinks = () => {
	// load email from localStorage
	const email = localStorage.getItem("signup-email");

	useEffect(() => {
		if (!email) {
			// redirect to sign up page if email is not found
			window.location.href = "/sign-up";
		}

		if (email) {
			// remove email from localStorage
			localStorage.removeItem("signup-email");
		}
	});

	return (
		<div className="relative mx-auto max-w-lg">
			<div className="relative mx-auto max-w-lg rounded-3xl border border-noops-400/30 bg-noops-300/5 text-noops-200">
				<div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-noops-600/5 via-transparent to-noops-600/5"></div>

				<div className="absolute inset-0 border-4 border-noops-600/50 blur-xl"></div>
				<div className="relative mx-4 my-10 flex items-center justify-center">
					<img src="/logo_smile.svg" className="h-16" draggable="false" />
				</div>

				<div className="relative px-6">
					<div>
						<h1 className="text-2xl font-semibold text-noops-200">
							Please check your Email
						</h1>
						<p className="text-noops-300">
							We have sent an email to{" "}
							<span className="font-medium italic">{email}</span>
						</p>
					</div>
					<div className="my-6">
						<h2 className="inline-flex gap-x-1.5 text-lg text-noops-300">
							<EnvelopeOpenIcon className="h-6 w-6" />
							Quick Links
						</h2>
						<ul>
							{emailProviders.map((provider) => (
								<a
									href={provider.domain}
									key={provider.name}
									target="_blank"
									rel="noreferrer"
									className="group  transition "
								>
									<li className="my-2 flex w-full items-center justify-between rounded-lg border border-noops-400/30 bg-noops-800/20 p-4 transition group-hover:bg-noops-400/20">
										<div className="flex items-center gap-x-2">
											<img
												src={provider.img}
												alt={provider.name}
												className="h-12 w-12 rounded-md object-contain "
											/>
											<div className="flex flex-col">
												<h2 className="font-medium  text-noops-300 transition group-hover:text-noops-50">
													{provider.name}
												</h2>
												<p className="text-sm text-noops-400 transition group-hover:text-noops-300">
													{provider.domain}
												</p>
											</div>
										</div>

										<ArrowTopRightOnSquareIcon className="h-6 w-6 text-noops-300 transition group-hover:text-noops-50" />
									</li>
								</a>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="mt-6">
				<div className="text-center text-sm text-noops-300">
					If you don't see the email, please check your spam folder.
				</div>
			</div>
		</div>
	);
};

export default EmailQuickLinks;
