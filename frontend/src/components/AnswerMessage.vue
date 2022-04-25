<template>
  <div :style="messageColor">
    <h1>{{ answerMessage }} <button @click="index.increment()">OK</button></h1>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

export default {
  name: "AnswerMessage",
  mounted() {
    this.checkAnswer();
  },
  data() {
    return {
      index: useIndexStore(),
      answerMessage: "",
      messageColor: "",
    };
  },

  props: {
    rightAnswer: {
      type: Boolean,
    },
    value: {
      type: Number,
    },
  },
  methods: {
    checkAnswer() {
      if (this.rightAnswer) {
        this.answerMessage =
          "Parabéns, você acertou! +" + this.value + " pontos";
        this.messageColor = "background-color: green";
      } else {
        this.messageColor = "background-color: green";
        this.answerMessage = "Você errou";
        this.messageColor = "background-color: red";
      }
      this.answered = true;
    },
  },
};
</script>
