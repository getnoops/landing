/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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

        "noops-1000": "#0b0217",
        accent: "#b980fa",
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
  plugins: [require("@tailwindcss/typography")],
};
