<template>
  <div :style="messageColor">
    <div>
      <h1>{{ answerMessage }}</h1>
    </div>
    <div>
      <h1>
        <img :src="imageURL" alt="" />
        <button @click="index.increment()">OK</button>
      </h1>
    </div>
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
      imageURL: "",
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
        this.messageColor = "background-color: #32CD32";

        this.imageURL = "https://i.imgur.com/XgL6soA.png";
      } else {
        this.answerMessage = "Que pena, você errou 😐";
        this.messageColor = "background-color: #ff261b";
        this.imageURL = "https://i.imgur.com/nztO8KF.png";
      }
      this.answered = true;
    },
  },
};
</script>
