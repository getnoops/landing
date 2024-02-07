import type { Options, ThemeConfig } from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import dotenv from "dotenv";
import { themes } from "prism-react-renderer";
import { exit } from "process";

dotenv.config();

const theme = themes.github;
const darkTheme = themes.dracula;

const DOMAIN = "getnoops.com"; // env.DOMAIN;
const PLAUSIBLE_SCRIPT_SRC = "https://plsbl.zwyx.dev/js/script.js"; // env.PLAUSIBLE_SCRIPT_SRC;

[DOMAIN].forEach((value) => {
	if (!value) {
		console.error(`Missing environment variable`);
		exit(1);
	}
});

const prod = process.env.NODE_ENV === "production";

const config: Config = {
	title: "No_Ops",
	tagline: "Deploy faster than ever",
	favicon: "img/logo_symbol.svg",
	url: `https://${DOMAIN}`,
	baseUrl: "/",

	trailingSlash: false,

	scripts: [
		...(prod
			? [
					{
						src: PLAUSIBLE_SCRIPT_SRC,
						defer: true,
						"data-domain": DOMAIN,
					},
				]
			: []),
		{
			src: '//js.hs-scripts.com/39503831.js',
			defer: true,
			async: true,
			id: 'hs-script-loader',
		},
	],

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	headTags: [
		{
			tagName: "link",
			attributes: {
				rel: "preload",
				href: "/fonts/Mona-Sans.woff2",
				as: "font",
				type: "font/woff2",
				crossorigin: "anonymous",
			},
		},
		// Preloading image
		{
			tagName: "link",
			attributes: {
				rel: "preload",
				href: "/images/noops_bg.webp",
				as: "image",
			},
		},
	],

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
				// docs: {
				// 	sidebarPath: "./docs-sidebar.ts",
				// },
				blog: {
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
				docs: false,
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
			content: `🎉️ <b>Come meet us at <a href="/blog/no_ops-launch-party">No_Ops's launch party</a> in Sydney on February 29th!</b> 🥳️`,
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
				// 	to: "docs",
				// 	label: "Docs",
				// },
				{
					to: "blog",
					label: "Events",
				},

				{
					className: "header-right-link header-right-link-slack",
					href: "https://join.slack.com/t/getnoops/shared_invite/zt-25fo11ewy-5z5iMXlaDvxRv6sfp8wZHA",
					"aria-label": "Slack",
					position: "right",
				},
				{
					className: "header-right-link header-right-link-pricing",
					to: "pricing",
					"aria-label": "Pricing",
					position: "right",
				},
				{
					className: "header-right-link header-right-link-login",
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
