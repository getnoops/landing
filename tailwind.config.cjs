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

        "noops-50": "#f8f5ff",
        "noops-100": "#eee6ff",
        "noops-200": "#e4d6ff",
        "noops-300": "#caaefe",
        "noops-400": "#af84fb",
        "noops-500": "#9655f6",
        "noops-600": "#8335e9",
        "noops-700": "#6f22ce",
        "noops-800": "#5821a6",
        "noops-900": "#471c87",
        "noops-950": "#2a075f",
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
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
