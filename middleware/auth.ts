import { userStore } from "~/stores/user";
// import devalue from "@nuxt/devalue";
// import { useNuxtApp } from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token");
  const user = userStore();
  let userData;
  const logout = function () {
    user.setToken("");
    user.setData("");
    token.value = "";
    return navigateTo("/");
  };
  user.setToken(token.value || "");

  if (!["index", "about"].includes(to.name) && !token) {
    user.logout();
  }
  if (to.name === "index") navigateTo("/dashboard");

  // if (process.server) {
  //   console.log("----- SERVER -------");
  //   const app = useNuxtApp();
  //   try {
  //     res = await useFetchAuth("http://localhost:3000/api/user");
  //     app.pinia.state.value.userStore.data = devalue(res?.data);
  //   } catch (e: any) {
  //     console.log(e);
  //   }
  // }
});
