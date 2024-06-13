import type { Options } from "@docusaurus/preset-classic";
import type { Config, ThemeConfig } from "@docusaurus/types";
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
			src: "//js.hs-scripts.com/39503831.js",
			defer: true,
			async: true,
			id: "hs-script-loader",
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

		{
			tagName: "script",
			attributes: {
				type: "application/ld+json",
			},
			innerHTML: JSON.stringify({
				"@context": "https://schema.org/",
				"@type": "Organization",
				name: "Meta Open Source",
				url: "https://opensource.fb.com/",
				logo: "https://opensource.fb.com/img/logos/Meta-Open-Source.svg",
			}),
		},
	],

	markdown: {
		mdx1Compat: {
			admonitions: false,
			comments: false,
			headingIds: false,
		},
		mermaid: true,
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./docs-sidebar.ts",
				},
				blog: {
					authorsMapPath: "../authors/authors.yml",
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
			{ name: "twitter:card", content: "summary_large_image" },
		],
		colorMode: {
			// respectPrefersColorScheme: true,
			disableSwitch: true,
			defaultMode: "dark",
		},
		image: "logo_smile.svg",
		// announcementBar: {
		// 	content: `🎉️ <b>Come meet us at <a href="/blog/no_ops-launch-party">No_Ops's launch party</a> in Sydney on February 29th!</b> 🥳️`,
		// 	isCloseable: false,
		// },
		navbar: {
			hideOnScroll: true,
			logo: {
				alt: "No_Ops logo",
				src: "logo_smile.svg",
				href: "/",
			},
			items: [
				{
					to: "docs",
					label: "Docs",
				},
				{
					to: "pricing",
					label: "Pricing",
					position: "left",
				},
				// {
				// 	to: "platform",
				// 	label: "Platform",
				// },
				{
					to: "community",
					label: "Community",
					position: "left",
				},
				{
					to: "about",
					label: "About",
					position: "left",
				},
				// custom dropdown needed for the platform pages which aren't done yet
				// {
				// 	type: "custom-horizontalDropdown",
				// 	position: "left",
				// 	// itemProp: 44,
				// 	// anotherProp: "xyz",
				// },
				{
					className: "header-right-link header-right-link-login",
					href: "https://portal.getnoops.com/login",
					"aria-label": "Login",
					position: "right",
				},
				{
					className: "header-right-link header-right-link-signup",
					href: "/sign-up",
					"aria-label": "Sign up",
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

	themes: ["@docusaurus/theme-mermaid"],

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
		[
			"@docusaurus/plugin-content-blog",
			{
				id: "events",
				path: "./events",
				routeBasePath: "events",
				blogSidebarTitle: "AAA posts",
				authorsMapPath: "../authors/authors.yml",
			},
		],
	],
};

export default config;
