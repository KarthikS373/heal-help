/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        customShade: {
          purple: "#8c2ce2",
          blue: "#4c01e0",
          gray: "#f6fcff",
          dark: "#2f1747",
          pink: "#dfabff80",
          sky: "#a3e9ff80",
        },
      },
    },
  },
  plugins: [],
}
