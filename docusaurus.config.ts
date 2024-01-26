import type { Options, ThemeConfig } from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import dotenv from "dotenv";
import { themes } from "prism-react-renderer";
import { env, exit } from "process";

dotenv.config();

const theme = themes.github;
const darkTheme = themes.dracula;

const DOMAIN = env.DOMAIN;
const PLAUSIBLE_SCRIPT_SRC = env.PLAUSIBLE_SCRIPT_SRC;

[DOMAIN].forEach((value) => {
	if (!value) {
		console.error(`Missing environment variable`);
		exit(1);
	}
});

const config: Config = {
	title: "No_Ops",
	tagline: "Deploy faster than ever",
	favicon: "img/logo_symbol.svg",
	url: `https://${DOMAIN}`,
	baseUrl: "/",

	trailingSlash: false,

	scripts: [
		{
			src: PLAUSIBLE_SCRIPT_SRC,
			defer: true,
			"data-domain": DOMAIN,
		},
	],

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	markdown: {
		mdx1Compat: {
			admonitions: false,
			comments: false,
			headingIds: false,
		},
	},

	presets: [
		[
			"classic",
			{
				docs: false,
				blog: {
					blogTitle: "No_Ops's blog",
					blogDescription: "Deploy faster than ever",
					blogSidebarTitle: "Latest posts",
					blogSidebarCount: "ALL",
					postsPerPage: "ALL",
					feedOptions: {
						type: "all",
						title: "No_Ops's blog",
						description: "Deploy faster than ever",
						copyright: `Copyright © ${new Date().getFullYear()} No_Ops.`,
					},
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			} satisfies Options,
		],
	],

	themeConfig: {
		metadata: [
			{ name: "keywords", content: "software development, web, devops" },
		],
		colorMode: {
			respectPrefersColorScheme: true,
		},
		image: "img/logo_symbol.svg",
		navbar: {
			logo: {
				alt: "Zwyx logo",
				src: "img/logo_symbol.svg",
				href: "/",
			},
			items: [
				{
					to: "blog",
					label: "Blog",
				},
			],
		},
		footer: {
			style: "dark",
			copyright: `Copyright © ${new Date().getFullYear()} No_Ops`,
		},
		prism: {
			theme,
			darkTheme,
			additionalLanguages: ["bash", "json"],
		},
	} satisfies ThemeConfig,
};

export default config;
