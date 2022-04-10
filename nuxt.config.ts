import { defineNuxtConfig } from "nuxt3";
import svgLoader from "vite-svg-loader";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Website",
    link: [
      // {
      //   href: "https://fonts.googleapis.com/css2?family=Helvetica:wght@100",
      //   rel: "stylesheet",
      // },
    ],
  },
  css: ["@/assets/styles/core/core.scss"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
          "postcss-nested": {},
          "postcss-preset-env": {},
        },
      },
    },
  },
  typescript: {
    strict: true,
  },
  modules: [],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: "url",
      }),
    ],
    define: {
      "process.env.DEBUG": "false",
    },
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true,
          additionalData:
            '@use "sass:math"; @import "@/assets/styles/resources/global";',
        },
      },
    },
  },
});
