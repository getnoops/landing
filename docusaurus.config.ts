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
			// respectPrefersColorScheme: true,
			disableSwitch: true,
			defaultMode: "dark",
		},
		image: "logo_smile.svg",
		announcementBar: {
			id: "lol",
			content: "We are launching!",
			isCloseable: false,
		},
		navbar: {
			hideOnScroll: true,
			logo: {
				alt: "No_Ops logo",
				src: "logo_smile.svg",
				href: "/",
			},
			items: [
				// {
				// 	to: "blog",
				// 	label: "Blog",
				// },

				{
					className: "navbar-link navbar-link-slack",
					href: "https://join.slack.com/t/getnoops/shared_invite/zt-25fo11ewy-5z5iMXlaDvxRv6sfp8wZHA",
					"aria-label": "Slack",
					position: "right",
				},
				{
					className: "navbar-link navbar-link-pricing",
					to: "pricing",
					"aria-label": "Pricing",
					position: "right",
				},
				{
					className: "navbar-link navbar-link-login",
					href: "https://portal.getnoops.com/login",
					"aria-label": "Login",
					position: "right",
				},
			],
		},
		prism: {
			theme,
			darkTheme,
			additionalLanguages: ["bash", "json"],
		},
	} satisfies ThemeConfig,

	plugins: [
		async function docusaurusTailwindcss(context, options) {
			return {
				name: "docusaurus-tailwindcss",
				configurePostCss(postcssOptions) {
					postcssOptions.plugins.push(require("tailwindcss"));
					postcssOptions.plugins.push(require("autoprefixer"));
					return postcssOptions;
				},
			};
		},
	],
};

export default config;
