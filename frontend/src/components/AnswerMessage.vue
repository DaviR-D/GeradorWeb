<template>
  <div :style="messageColor" class="container">
    <h1 class="h1Message">{{ answerMessage }}</h1>
    <h1 class="h1Button">
      <img class="acertou" :src="imageURL" alt="">
      <button style="border-radius: 5px" @click="index.increment()">OK</button>
    </h1>
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
        this.messageColor = "background-color: black";
        this.answerMessage = "Você errou";
        this.messageColor = "background-color: #ff261b";
        this.imageURL = "https://i.imgur.com/nztO8KF.png";
      }
      this.answered = true;
    },
  },
};
</script>
<style scoped>
.container {}

.acertou {
  max-width: 10%;
  padding-right: 1%;

}

.h1Message {
  justify-content: center;
  border-radius: 5px;
}

.h1Button {
  display: flex;
  align-items: center;
  padding-right: 1%;
}
</style>
