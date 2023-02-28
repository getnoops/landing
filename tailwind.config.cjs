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
      },
      spacing: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
