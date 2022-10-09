<template>
  <div class=" ">
    <h1>template4</h1>
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
