/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        lightBg: "#DEE4EA",
        lightText: "#22272B",
        darkBg: "#22272B",
        darkText: "#DEE4EA",
        accent: "#FBBF24",
      },
    },
  },
  plugins: [],
};
