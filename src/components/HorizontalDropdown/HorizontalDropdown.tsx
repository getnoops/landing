import Link from "@docusaurus/Link";
import { Popover } from "@headlessui/react";

import { Transition } from "@headlessui/react";
import { ChevronDownIcon, CloudIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect } from "react";

// other pages aren't done yet.
const solutions = [
	// {
	// 	name: "Platform",
	// 	description: "A general overview of our platform and its features",
	// 	href: "/platform",
	// 	icon: ComputerDesktopIcon,
	// },
	{
		name: "AWS & Environments",
		description: "Create and manage AWS environments",
		href: "/aws-environments",
		icon: CloudIcon,
	},
	// {
	// 	name: "Services",
	// 	description: "View supported AWS services and resources",
	// 	href: "#",
	// 	icon: ServerStackIcon,
	// },
	// {
	// 	name: "Deploy and Observe",
	// 	description: "View metrics for your services and environments",
	// 	href: "#",
	// 	icon: ChartBarSquareIcon,
	// },
];

const PopoverContent = ({
	close,
	open,
}: {
	close: () => void;
	open: boolean;
}) => {
	// this closes the dropdown when the navbar is hidden
	useEffect(() => {
		let targetElement = document.querySelector('nav[aria-label="Main"]');

		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (
					mutation.target instanceof Element &&
					mutation.target.classList.contains(
						"navbarHidden_node_modules-@docusaurus-theme-classic-lib-theme-Navbar-Layout-styles-module",
					)
				) {
					if (open) {
						close();
					}
				}
			});
		});

		if (targetElement) {
			observer.observe(targetElement, {
				attributes: true, // Monitor the changes in attributes
			});
		}

		return () => {
			observer.disconnect(); // Clean up the observer when the component is unmounted
		};
	}, []);

	return (
		<>
			<div className="mx-auto grid max-w-7xl grid-cols-1  gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
				{solutions.map((item) => (
					<div
						key={item.name}
						className="group relative -mx-3 flex gap-3 rounded-[20px] border border-transparent p-3 text-sm leading-6 transition hover:border-noops-300/5 hover:border-t-noops-300/10 hover:bg-noops-300/5"
					>
						<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-noops-300/5 bg-noops-300/5">
							<item.icon
								className="h-6 w-6 text-noops-200 transition group-hover:text-noops-300"
								aria-hidden="true"
							/>
						</div>
						<div>
							<Link
								to={item.href}
								className="font-semibold text-noops-200 group-hover:text-noops-300 hover:no-underline"
							>
								{item.name}
								<span className="absolute inset-0" />
							</Link>
							<p className="mb-0 mt-0 text-sm text-noops-300 transition ">
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

const HorizontalDropdown = () => {
	return (
		<Popover className="isolate z-50">
			<div className="">
				<div className="mx-auto max-w-7xl">
					<Popover.Button
						as="a"
						className="navbar__item navbar__link inline-flex cursor-pointer items-center gap-x-1 bg-transparent"
					>
						Solutions
						<ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
					</Popover.Button>
				</div>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 -translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 -translate-y-1"
			>
				<Popover.Panel className="absolute inset-x-0 top-[60px] -z-10 bg-noops-1000 shadow-lg ring-1 ring-noops-300/5">
					{({ open, close }) => <PopoverContent close={close} open={open} />}
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

export default HorizontalDropdown;
