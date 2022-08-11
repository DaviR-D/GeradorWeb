<template>
  <div :style="messageColor" class="container">
    <div>
      <h1 class="h1Message">{{ answerMessage }}</h1>
    </div>
    <div>
      <h1 class="h1Button">
        <img class="imgMessage" :src="imageURL" alt="" />
        <button style="border-radius: 5px" @click="index.increment()">
          OK
        </button>
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
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  height: 30%;
  width: 60%;
}

.imgMessage {
  width: 150px !important;
  height: 150px !important;
  
  
  padding-right: 1% !important;
}

.h1Message {
  color: white;
  justify-content: center;
  border-radius: 5px;
}

.h1Button {
  
  display: flex;
  align-items: center;
  padding-right: 1%;
}
button {
  width: 300px !important;
  background-color: rgb(10, 117, 154);
}
button:hover {
  color: whitesmoke;
  transition: 0.5s;
  cursor: pointer;
  background-color: rgb(5, 110, 172);
  opacity: 5;
}
</style>
