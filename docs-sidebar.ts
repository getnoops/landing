import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const docsSidebar: SidebarsConfig = {
	docsSidebar: [
		"introduction",
		{
			type: "category",
			label: "Getting started",
			items: [
				{
					type: "category",
					label: "Setup organisation",
					items: [
						"getting-started/setup-organisation/create-organisation",
						"getting-started/setup-organisation/invite-team-members",
					],
				},
				"getting-started/connect-aws-account",
				"getting-started/create-environment",
				"getting-started/add-domain",
				"getting-started/add-edge",
				"getting-started/create-first-compute",
				{
					type: "category",
					label: "CLI",
					items: [
						"getting-started/cli/ci-cd-cli",
						"getting-started/cli/learn-cli",
					],
				},
				"getting-started/promoting-deployments",
			],
		},
		// TODO: Reference
		// {
		// 	type: "category",
		// 	label: "Reference",
		// 	items: [
		// 		"reference/organisations",
		// 		"reference/folders",
		// 		"reference/compute",
		// 		"reference/storage",
		// 		"reference/integration",
		// 		{
		// 			type: "category",
		// 			label: "Routing",
		// 			items: ["reference/routing/domains", "reference/routing/edges"],
		// 		},
		// 	],
		// },
	],
};

export default docsSidebar;
