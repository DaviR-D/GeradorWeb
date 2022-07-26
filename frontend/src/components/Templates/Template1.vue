<template>
  <div class="container">
    <h1 class="title">Selecione a opção correspondente a imagem</h1>
    <img :src="data.image" />
    <li v-for="alternative in data.alternatives" :key="alternative">
      <button class="primary-button" @click="checkAnswer(alternative)">
        {{ alternative }}
      </button>
    </li>
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
  name: "TheTemplate1",
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
  display: column;
  text-align: center;
  max-width: 100%;
}

img {
  height: 25%;
  width: 25%;
  border-radius: 5px;
  margin-bottom: 0.3%;
  border: 3px solid white;
}

.title {
  color: white;
  text-decoration: underline;
  margin-bottom: 0.3%;
}

.primary-button {
  width: 25%;
  margin-bottom: 1%;
  justify-content: center;
  height: 60px;
  font-weight: bold;
  font-size: large;
  border-radius: 5px;
}

Button:hover {
  color: white;
  transition: 0.3s;
  cursor: pointer;
}

li {
  list-style: none;
  width: 100%;
}
</style>
