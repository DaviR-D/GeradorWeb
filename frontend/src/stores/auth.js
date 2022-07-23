import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    token: "token",
  }),
  getters: {
    getToken() {
      return localStorage.getItem("token");
    },
  },
  actions: {
    saveToken(token) {
      this.token = token;
      localStorage.setItem("token", token);
    },
  },
});
