import { defineNuxtConfig } from "nuxt";
import svgLoader from "vite-svg-loader";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  baseURL: process.env.BASE_URL,
  meta: {
    title: "Website",
    link: [
      // {
      //   href: "https://fonts.googleapis.com/css2?family=Helvetica:wght@100",
      //   rel: "stylesheet",
      // },
    ],
  },
  buildModules: ["@pinia/nuxt"],
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
  serverMiddleware: [
    // { path: "/api", handler: "~/_api/server.mjs" },
    // { path: "/api/**", handler: "~/_api/server.mjs" },
  ],
  typescript: {
    strict: true,
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
    apiUrl: process.env.API_URL,
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
