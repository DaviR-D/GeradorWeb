<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="">Associe as imagens com as palavras:</h1>
    <li
      class="list-none mb-4"
      v-for="(image, index) in data.images"
      :key="index"
    >
      <div class="grid grid-cols-8 h-24">
        <div class="col-span-2"></div>
        <div class="col-span-1 flex justify-center mr-2 items-center">
          <h1>{{ index + 1 }}</h1>
        </div>
        <div class="col-span-1 flex items-center justify-center">
          <img :src="image" class="imagem" />
        </div>
        <div class="col-span-1 flex items-center justify-start ml-20">
          <h1>
            {{ data.words[correctAnswer[index] - 1] }}
          </h1>
        </div>
        <div class="col-span-1 flex items-center justify-center">
          <input type="number" v-model="answer[index]" />
        </div>
      </div>
    </li>
    <div class="w-full flex items-center justify-center">
      <button class="botao ml-16" @click="checkAnswer()">Confirmar</button>
    </div>

    
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
.imagem {
  height: 96px !important;
}
</style>
