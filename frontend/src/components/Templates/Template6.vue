<template>
  <div class="container">
    <h1 class="titleTemplate6">Coloque a resposta correta</h1>
    <img class="imgTemplate6" :src="data.image" />
    <p class="inputTemplate6">
      <input type="text" v-model="answer" @keyup.enter="checkAnswer()" />
    </p>
    <button class="primary-button" @click="checkAnswer()">Confirmar</button>
    <answer-message
      v-if="answered"
      :rightAnswer="rightAnswer"
      :value="data.value"
    />
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";
import { useScoreStore } from "@/stores/score";
import AnswerMessage from "@/components/AnswerMessage.vue";

export default {
  components: { AnswerMessage },
  name: "TheTemplate6",
  data() {
    return {
      index: useIndexStore(),
      score: useScoreStore(),
      answer: "",
      answered: false,
      rightAnswer: false,
    };
  },

  props: {
    data: {
      type: Object,
      default: () => ({
        description: "",
        image: "",
        rightAnswer: 1,
        value: 5,
      }),
    },
  },
  methods: {
    checkAnswer() {
      if (this.answer.toLowerCase() == this.data.rightAnswer.toLowerCase()) {
        console.log("Você acertou!");
        this.score.update(this.data.value);
        this.score.incrementAnswerCounter();
        this.rightAnswer = true;
      }
      this.score.incrementQuestionCounter();
      this.answered = true;
    },
  },
};
</script>

<style scoped>
.container {
  display: inline;
  justify-content: center;
}
.imgTemplate6 {
  border-radius: 5px;
  max-width: 100%;
  margin-top: 1%;
}
.inputTemplate6 {
  text-align: center;
  margin-bottom: 2%;
}

input {
  height: 50px;
  border-radius: 4px;
}

input:focus {
  outline: none;
  border-left: 4px solid green;
  border-bottom: 4px solid green;
}
.titleTemplate6 {
  text-align: center;
  color: white;
  text-decoration: underline;
}

.primary-button {
  margin-bottom: 1%;
  justify-content: center;
  height: 60px;
  font-weight: bold;
  font-size: large;
  border-radius: 5px;
  width: 100%;
}

Button:hover {
  color: white;
  transition: 0.3s;
  cursor: pointer;
}
</style>
