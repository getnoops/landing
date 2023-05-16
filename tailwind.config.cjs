/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
        accent: "#b980fa",
      },
      spacing: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
