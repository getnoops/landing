/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
	theme: {
		extend: {},
	},
	darkMode: ["class", '[data-theme="dark"]'],
	corePlugins: {
		preflight: false,
	},
	plugins: [],
};
