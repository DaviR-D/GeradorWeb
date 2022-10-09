<template>
<<<<<<< HEAD
  <div>
    <h1>Selecione a opção correspondente a imagem</h1>
=======
  <div class="">
    <h1>Template1</h1>
    <h1 class="title">Selecione a opção correspondente a imagem</h1>
>>>>>>> 4629165f668b7586df6cfffcc97d4e6347ae86db
    <img :src="data.image" />
    <li v-for="alternative in data.alternatives" :key="alternative">
      <button @click="checkAnswer(alternative)">
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
