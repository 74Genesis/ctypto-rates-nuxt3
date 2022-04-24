import { defineStore } from "pinia";

export const userStore = defineStore("userStore", {
  state: () => {
    return { token: "", data: null };
  },
  actions: {
    setToken(value: string) {
      this.token = value;
    },
    setData(value: Record | null) {
      this.data = value;
    },
    logout() {
      this.setToken("");
      this.setData(null);
      const cookieToken = useCookie("token");
      cookieToken.value = "";
      navigateTo("/");
    },
    login(token) {
      this.setToken(token);
      const cookieToken = useCookie("token");
      cookieToken.value = token;
      navigateTo("/dashboard");
    },
  },
});
