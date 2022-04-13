<template>
  <div>
    <img :src="data.image" style="height: 400px; width: 600px" />
    <input type="text" v-model="answer" />
    <button @click="checkAnswer()">Confirmar</button>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

export default {
  name: "QuestionTemplate1",
  data() {
    return {
      index: useIndexStore(),
      answer: "",
    };
  },

  props: {
    data: {
      type: Object,
      default: () => ({
        description: "",
        image: "",
        rightAnswer: 1,
      }),
    },
  },
  methods: {
    checkAnswer() {
      this.answer.toLowerCase() == this.data.rightAnswer.toLowerCase()
        ? console.log("Você acertou!")
        : console.log("Você errou!");
      this.index.increment();
    },
  },
};
</script>
