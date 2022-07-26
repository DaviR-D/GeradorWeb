<template>
  <div class="container">
    <h1 class="title">Associe as imagens com as palavras:</h1>
    <li class="liTemplate4" v-for="(image, index) in data.images" :key="index">
      <div class="displayTemplate4">
        <div>
          <h1 class="indexTemplate4">{{ index + 1 }}</h1>
        </div>
        <div>
          <img class="imgTemplate4" :src="image" />
        </div>
        <div>
          <h1 class="wordsTemplate4">
            {{ data.words[correctAnswer[index] - 1] }}
          </h1>
        </div>
        <div>
          <input class="inputTemplate4" type="number" v-model="answer[index]" />
        </div>
      </div>
    </li>

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
  width: 100%;
  height: 100%;
}

.title {
  color: white;
  text-decoration: underline;
  text-align: center;
}

.liTemplate4 {
  list-style: none;
}

.displayTemplate4 {
  display: flex;
  align-items: center;
}

.indexTemplate4 {
  text-align: center;
  margin-right: 15px;
  color: white;
}

.imgTemplate4 {
  width: 277px;
  height: 200px;
  max-height: 100%;
  margin-right: 15px;
  border-radius: 3px;
  border: 3px solid white;
}

.wordsTemplate4 {
  margin-right: 15px;
  min-width: 81px;
  color: white;
}

.primary-button {
  margin-bottom: 1%;
  justify-content: center;
  height: 60px;
  font-weight: bold;
  border-radius: 5px;
  width: 100%;
}
</style>
