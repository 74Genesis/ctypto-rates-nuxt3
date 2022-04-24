// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");
delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["coolGray"];
delete colors["blueGray"];
delete colors["trueGray"];

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
      black: {
        400: "#5a5a5a",
        500: "#3e3e3e",
        600: "#222222",
        700: "#161616",
        900: "#111111",
      },
      gray: {
        100: "#f8f8f8",
        200: "#c8c8c8",
        400: "#5a5a5a",
        500: "#3e3e3e",
        600: "#222222",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
