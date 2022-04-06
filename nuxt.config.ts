import { defineNuxtConfig } from "nuxt3";

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
  css: ["@/assets/styles/core.scss"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
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
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true,
          additionalData: '@use "@/assets/styles/resources/global" as *;',
        },
      },
    },
  },
});
