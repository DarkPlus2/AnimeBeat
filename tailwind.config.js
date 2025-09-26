/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B", // Dark blue background
        secondary: "#3B82F6", // Blue accent
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class", // Optional: enable dark mode support
};
