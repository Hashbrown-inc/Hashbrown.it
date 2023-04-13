/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      yellow: "#FCCD26",
      brown: "#BD7D00",
      yellowbrown: "#7C5C1B",
    },
    extend: {},
  },
  fontFamily: {
    mono: ["JetBrains Mono", "monospace"],
  },
};
