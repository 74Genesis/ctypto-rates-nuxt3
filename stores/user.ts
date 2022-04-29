import { defineStore } from "pinia";

export const userStore = defineStore("userStore", {
  state: () => {
    return { token: "", data: null };
  },
  actions: {
    setToken(value: string) {
      this.token = value;
    },
    setData(value: any) {
      this.data = value;
    },
    logout() {
      console.log("logout");
      this.setToken("");
      this.setData(null);
      const cookieToken = useCookie("token");
      cookieToken.value = "";
      navigateTo("/");
    },
    login(token: string) {
      this.setToken(token);
      const cookieToken = useCookie("token");
      cookieToken.value = token;
      navigateTo("/dashboard");
    },
  },
});
