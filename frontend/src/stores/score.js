import { defineStore } from "pinia";

export const useScoreStore = defineStore({
  id: "score",
  state: () => ({
    score: 0,
  }),
  getters: {
    getScore: (state) => state.score,
  },
  actions: {
    update(value) {
      this.score += value;
    },
  },
});
