/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Manrope", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#0d1b2a",
          deep: "#070d17",
          light: "#e1c340",
          muted: "#3472a4",
          paper: "#070d17",
        },
      },
      boxShadow: {
        soft: "0 20px 55px rgba(24, 53, 42, .10)",
      },
    },
  },
  plugins: [],
};