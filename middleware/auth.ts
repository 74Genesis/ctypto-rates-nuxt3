import { userStore } from "~/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token");
  const user = userStore();

  if (to.name === "index" && token.value) return navigateTo("/dashboard");

  if (!["index", "about"].includes(String(to.name)) && !token.value) {
    console.log("logout middle");
    user.logout();
    return navigateTo("/");
  }

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
