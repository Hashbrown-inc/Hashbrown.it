/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      yellow: "#FCCD26",
      brown: "#9C6700",
    },
    extend: {},
  },
  fontFamily: {
    mono: ["JetBrains Mono", "monospace"],
  },
};
