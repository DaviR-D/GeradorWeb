<template>
  <div class="flex flex-col items-center w-full justify-center h-screen">
    <h1 class="">Selecione a opção correspondente a imagem</h1>
    <img :src="data.image" class="img mb-4" />
    <li
      v-for="alternative in data.alternatives"
      :key="alternative"
      class="list-none w-full flex flex-col items-center justify-center"
    >
      <button @click="checkAnswer(alternative)">
        {{ alternative }}
      </button>
    </li>
  </div>
  <answer-message
    v-if="answered"
    :rightAnswer="rightAnswer"
    :value="data.value"
  />
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
    openToast(icon, message) {
      this.$toast.open({
        message: message,
        type: icon,
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
    checkAnswer(alternative) {
      if (alternative == this.data.rightAnswer) {
        this.score.update(this.data.value);
        this.score.incrementAnswerCounter();
        this.rightAnswer = true;
      }
      this.answered = true;
      this.score.incrementQuestionCounter();
    },
  },
};
</script>
