import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    token: "token",
  }),
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    saveToken(token) {
      this.token = token;
    },
  },
});
