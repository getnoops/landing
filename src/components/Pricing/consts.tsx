export const plans: {
	id: "free" | "pro" | "enterprise";
	name: string | JSX.Element;
	description: string;
	href: string;
}[] = [
	{
		id: "free",
		name: (
			<>
				Free, <i>forever</i>
			</>
		),
		description: "The essentials to discover No_Ops",
		href: "#",
	},
	{
		id: "pro",
		name: "Pro",
		description: "Get support and pay only for what you need",
		href: "#",
	},
	{
		id: "enterprise",
		name: "Enterprise",
		description:
			"Tailored for big businesses, get in contact to see how we can help you",
		href: "#",
	},
];
