/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Use the class strategy for manual toggling
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Code", "monospace"], // Coding-style font
      },
    },
  },
  plugins: [],
};
