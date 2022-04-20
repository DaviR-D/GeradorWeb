import { defineStore } from "pinia";

export const useScoreStore = defineStore({
  id: "score",
  state: () => ({
    score: 0,
    rightAnswerCounter: 0,
    questionCounter: 0,
  }),
  getters: {
    getScore: (state) => state.score,
    getAnswerCount: (state) => state.rightAnswerCounter,
    getQuestionCount: (state) => state.questionCounter,
  },
  actions: {
    update(value) {
      this.score += value;
    },
    incrementAnswerCounter() {
      this.rightAnswerCounter++;
    },
    incrementQuestionCounter() {
      this.questionCounter++;
    },
  },
});
