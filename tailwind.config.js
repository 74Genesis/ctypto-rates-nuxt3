// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: [
    "./assets/styles/core/*.{css,scss}",
    "./assets/**/*.{css,scss}",
    "./components/**/*.{vue,js,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    colors: {
      ...colors,
      orange: {
        200: "#f88355",
        300: "#fc7742",
        400: "#e95921",
        500: "#e95216",
        600: "#ea4d0f",
        700: "#F54D0A",
      },
      blue: {
        300: "#76cef1",
        400: "#54c6f5",
        500: "#35bdf3",
        600: "#1eb4ef",
        700: "#0AB2F5",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
