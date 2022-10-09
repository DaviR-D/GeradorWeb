<template>
  <div class=" ">
    <h1>Selecione a imagem correspondente a palavra em inglês:</h1>
    <h1 class="dataWord">
      <strong>{{ data.word }}</strong>
    </h1>
    <div class=" -opt">
      <li v-for="(image, index) in data.images" :key="index">
        <img class="image" :src="image" @click="checkAnswer(index)" />
      </li>
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
  name: "TheTemplate5",
  data() {
    return {
      index: useIndexStore(),
      score: useScoreStore(),
      answered: false,
      rightAnswer: false,
    };
  },

  props: {
    data: {
      type: Object,
      default: () => ({
        description: "",
        word: "",
        images: [1, 2, 3, 4],
        rightAnswer: 1,
        value: 5,
      }),
    },
  },
  methods: {
    checkAnswer(index) {
      if (index == this.data.rightAnswer) {
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
