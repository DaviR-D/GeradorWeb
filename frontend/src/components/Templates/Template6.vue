<template>
  <div
    class="flex flex-col items-center justify-center m-auto w-[300px] h-screen"
  >
    <h1 class="text-base md:text-xl">Coloque a resposta correta</h1>
    <img
      class="img mb-4 max-w-[200px] max-h-[200px] md:max-w-[350px] lg:max-w-3xl lg:max-h-[700px]"
      :src="data.questionImages[0]['url']"
    />
    <p class="w-full flex items-center justify-center">
      <input
        type="text"
        class=""
        v-model="answer"
        @keyup.enter="checkAnswer()"
      />
    </p>
    <button class="lg:max-w-3xl" @click="checkAnswer()">Confirmar</button>
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
  name: "TheTemplate6",
  data() {
    return {
      index: useIndexStore(),
      score: useScoreStore(),
      answer: "",
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
        rightAnswer: 1,
        value: 5,
      }),
    },
  },
  methods: {
    checkAnswer() {
      this.$emit("checkAnswer", {
        userAnswer: this.answer.toLowerCase(),
        rightAnswer: this.data.rightAnswer.toLowerCase(),
      });
      this.answer = "";
    },
  },
};
</script>
