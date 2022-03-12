import { defineStore } from "pinia";

export const useIndexStore = defineStore({
  id: "index",
  state: () => ({
    index: 0,
  }),
  getters: {
    getIndex: (state) => state.index,
  },
  actions: {
    increment() {
      this.index++;
    },
  },
});
