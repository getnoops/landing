import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const docsSidebar: SidebarsConfig = {
	docsSidebar: [
		"introduction",
		{
			type: "category",
			label: "Getting started",
			collapsed: false,
			items: [
				"getting-started/concepts",
				"getting-started/connect-aws-account",
				"getting-started/create-environment",
				"getting-started/create-first-compute",
			],
		},
		{
			type: "category",
			label: "Deploying",
			items: [
				"deploying/learn-cli",
				"deploying/ci-cd-cli",
				"deploying/promoting-deployments",
			],
		},
		{
			type: "category",
			label: "Edge",
			items: ["edge/add-domain", "edge/add-edge"],
		},
		{
			type: "category",
			label: "Resources",
			items: [
				{
					type: "category",
					label: "Compute",
					items: [
						"resources/compute/container",
						"resources/compute/database",
						"resources/compute/queue",
					],
				},
				{
					type: "category",
					label: "Storage",
					items: ["resources/storage/rds"],
				},
				{
					type: "category",
					label: "Integration",
					items: ["resources/integration/notification"],
				},
			],
		},

		{
			type: "category",
			label: "Administration",
			items: [
				"administration/create-organisation",
				"administration/invite-team-members",
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
