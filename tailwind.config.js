/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: { min: "300px", max: "1023px" },
        md1: { min: "650px", max: "1023px" },
        sm1: { min: "280px", max: "649px" },
        xs: { min: "280px", max: "475px" },
        xs1: { min: "280px", max: "340px" },
      },
    },
  },
  plugins: [],
};
