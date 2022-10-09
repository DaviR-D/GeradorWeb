<template>
  <div>
    <h1>Associe as imagens com as palavras:</h1>
    <li v-for="(image, index) in data.images" :key="index">
      <div>
        <div>
          <h1>{{ index + 1 }}</h1>
        </div>
        <div>
          <img :src="image" />
        </div>
        <div>
          <h1>
            {{ data.words[correctAnswer[index] - 1] }}
          </h1>
        </div>
        <div>
          <input type="number" v-model="answer[index]" />
        </div>
      </div>
    </li>

    <button @click="checkAnswer()">Confirmar</button>
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
