/** @type {import('tailwindcss').Config} */

// NoOps Colours
// 50 f8f5ff hsl(260 100% 98%)
// 100 eee6ff hsl(260 100% 95%)
// 200 e4d6ff hsl(260 99% 92%)
// 300 caaefe hsl(261 98% 84%)
// 400 af84fb hsl(262 93% 75%)
// 500 9655f6 hsl(264 90% 65%)
// 600 8335e9 hsl(266 80% 56%)
// 700 6f22ce hsl(267 72% 47%)
// 800 5821a6 hsl(265 67% 39%)
// 900 471c87 hsl(264 66% 32%)
// 950 2a075f hsl(264 87% 20%)

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
