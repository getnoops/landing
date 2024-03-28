/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
	darkMode: ["class", '[data-theme="dark"]'],
	corePlugins: {
		// Prevent Tailwind from overriding Docusaurus's style
		preflight: false,
	},
	theme: {
		typography: require("./typography.cjs"),
		extend: {
			colors: {
				"cloud-blue": "#379AE9",
				"cloud-text-gradient-1": "#2081B8",
				"cloud-text-gradient-2": "#379AE9",
				"cloud-text-gradient-3": "#3DBDFF",
				"cloud-logo-1": "#4F8DD9",
				"cloud-logo-2": "#3BB3F9",

				"noops-50": "hsl(255, 100%, 98%)",
				"noops-100": "hsl(254, 91%, 95%)",
				"noops-200": "hsl(253, 90%, 92%)",
				"noops-300": "hsl(257, 92%, 85%)",
				"noops-400": "hsl(259, 88%, 76%)",
				"noops-500": "hsl(262, 86%, 66%)",
				"noops-600": "hsl(266, 80%, 56%)",
				"noops-700": "hsl(267, 68%, 50%)",
				"noops-800": "hsl(267, 67%, 42%)",
				"noops-900": "hsl(267, 65%, 35%)",
				"noops-950": "hsl(265, 71%, 23%)",
				"noops-975": "hsl(265, 71%, 10%)",
				"noops-1000": "hsl(266, 84%, 5%)",
				"noops-1050": "hsl(266, 81%, 3%)",

				"noops-accent": "hsl(268, 92%, 74%)",
				"noops-accent-50": "hsl(270, 100%, 98%)",
				"noops-accent-100": "hsl(266, 100%, 95%)",
				"noops-accent-200": "hsl(267, 95%, 92%)",
				"noops-accent-300": "hsl(268, 95%, 85%)",
				"noops-accent-400": "hsl(268, 92%, 74%)",
				"noops-accent-500": "hsl(269, 89%, 65%)",
				"noops-accent-600": "hsl(269, 79%, 56%)",
				"noops-accent-700": "hsl(270, 69%, 47%)",
				"noops-accent-800": "hsl(271, 65%, 39%)",
				"noops-accent-900": "hsl(272, 63%, 32%)",
				"noops-accent-950": "hsl(272, 85%, 21%)",

				accent: "#b980fa",

				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				inbetween: "hsl(var(--inbetween))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			spacing: {
				112: "28rem",
				128: "32rem",
				144: "36rem",
			},
			maxWidth: {
				"8xl": "88rem" /* 1408px */,
				"9xl": "96rem" /* 1536px */,
				"10xl": "104rem" /* 1664px */,
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
			animation: {
				twinkle: "twinkle 1s infinite",
			},
			keyframes: {
				twinkle: {
					"0%": { opacity: 1 },
					"50%": { opacity: 0.5 },
					"100%": { opacity: 1 },
				},
				shimmer: {
					"100%": {
						transform: "translateX(100%)",
					},
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwind-scrollbar")({ nocompatible: true }),
	],
};
