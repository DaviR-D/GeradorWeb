<template>
  <div class="container">
    <h1 class="title">Selecione a opção correspondente a imagem</h1>
    <img :src="data.image" />
    <li v-for="alternative in data.alternatives" :key="alternative">
      <button style="border-radius: 5px" @click="checkAnswer(alternative)">
        {{ alternative }}
      </button>
    </li>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";
import { useScoreStore } from "@/stores/score";

export default {
  name: "TheTemplate1",
  data() {
    return {
      index: useIndexStore(),
      score: useScoreStore(),
    };
  },

  props: {
    data: {
      type: Object,
      default: () => ({
        description: "",
        image: "",
        alternatives: [1, 2, 3, 4],
        rightAnswer: 1,
        value: 5,
      }),
    },
  },
  methods: {
    checkAnswer(alternative) {
      if (alternative == this.data.rightAnswer) {
        console.log("Você acertou!");
        this.score.update(this.data.value);
        this.score.incrementAnswerCounter();
      } else {
        console.log("Você errou!");
      }
      this.score.incrementQuestionCounter();
      this.index.increment();
    },
  },
};
</script>

<style scoped>
.container {
  display: column;
  text-align: center;
  max-width: 100%;
}
img {
  height: 60%;
  width: 60%;
  border-radius: 5px;
  margin-bottom: 0.3%;
}
.title {
  color: white;
  text-decoration: underline;
  margin-bottom: 0.3%;
}
button {
  width: 60%;
  cursor: pointer;
}
</style>
