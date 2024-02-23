import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const docsSidebar: SidebarsConfig = {
	docsSidebar: [
		"introduction",
		{
			type: "category",
			label: "Getting starting",
			items: [
				"getting-starting/setup-organisation",
				"getting-starting/link-aws-account",
				"getting-starting/create-first-service",
				"getting-starting/invite-team-members",
			],
		},
		{
			type: "category",
			label: "Reference",
			items: [
				"reference/organisations",
				"reference/folders",
				"reference/compute",
				"reference/storage",
				"reference/integration",
				{
					type: "category",
					label: "Routing",
					items: ["reference/routing/domains", "reference/routing/edges"],
				},
			],
		},
	],
};

export default docsSidebar;
