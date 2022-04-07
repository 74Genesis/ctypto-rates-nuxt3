import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify";
import { VApp, VAppBar, VBtn, VIcon } from "vuetify/components";
import "@mdi/font/css/materialdesignicons.css";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
// import "vuetify/lib/styles/main.css";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    components: {
      VApp,
      VAppBar,
      VBtn,
      VIcon,
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
