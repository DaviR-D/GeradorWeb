<template>
  <div class="flex flex-col">
    <h1>template4</h1>
    <h1 class="">Associe as imagens com as palavras:</h1>
    <li class="list-none" v-for="(image, index) in data.images" :key="index">
      <div class="grid grid-cols-4">
        <div>
          <h1 class="col-span-1">{{ index + 1 }}</h1>
        </div>
        <div>
          <img class="col-span-2" :src="image" />
        </div>
        <div>
          <h1 class="col-span-3">
            {{ data.words[correctAnswer[index] - 1] }}
          </h1>
        </div>
        <div>
          <input class="col-span-4" type="number" v-model="answer[index]" />
        </div>
      </div>
    </li>

    <button class="" @click="checkAnswer()">Confirmar</button>
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
