<template>
  <div class="container">
    <h1 class="title">Associe as imagens com as palavras:</h1>
    <li class="liTemplate4" v-for="(image, index) in data.images" :key="index">
      <h1 class="indexTemplate4">{{ index + 1 }}</h1>
      <img class="imgTemplate4" :src="image" />
      <h1 class="wordsTemplate4">
        {{ data.words[correctAnswer[index] - 1] }}
      </h1>
      <input class="inputTemplate4" type="number" v-model="answer[index]" />
    </li>
    <button style="border-radius: 5px" @click="checkAnswer()">Confirmar</button>
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
  name: "TheTemplate4",
  mounted() {
    this.generateAnswer();
  },
  data() {
    return {
      index: useIndexStore(),
      score: useScoreStore(),
      answer: [],
      correctAnswer: [],
      answered: false,
      rightAnswer: false,
    };
  },

  props: {
    data: {
      type: Object,
      default: () => ({
        description: "",
        images: [],
        words: [],
        value: 5,
      }),
    },
  },
  methods: {
    generateAnswer() {
      for (let i = 1; i < this.data.words.length + 1; i++) {
        this.correctAnswer.push(i);
      }
      this.correctAnswer.sort(() => Math.random() - 0.5);
    },
    checkAnswer() {
      if (this.answer.toString() == this.correctAnswer.toString()) {
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
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.container {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 100%;
}
.liTemplate4 {
  display: flex;
  justify-content: center;
  margin: 1% 0 1% 0;
}
.indexTemplate4 {
  margin: 15% 2% 0 0;
  color: white;
}
.imgTemplate4 {
  width: 277px;
  height: 200px;
  max-height: 100%;
  margin: 0 auto;
  border-radius: 3px;
  border: 3px solid white;
}
.inputTemplate4 {
  margin-top: 17.5%;
  height: 10%;
  max-width: 20%;
}
.wordsTemplate4 {
  min-width: 20%;
  margin-top: 15%;
  color: white;
}
button {
  cursor: pointer;
}
.title {
  color: white;
  text-decoration: underline;
  text-align: center;
}
</style>
