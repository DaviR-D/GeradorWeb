<template>
  <div class="flex w-full items-center justify-center">
    <button @click="next()" class="bg-gray-400 shadow-none">Próximo</button>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

export default {
  name: "AnswerMessage",
  mounted() {
    this.checkAnswer();
  },
  data() {
    return {
      index: useIndexStore(),
    };
  },
  props: {
    rightAnswer: {
      type: Boolean,
    },
    value: {
      type: Number,
    },
  },
  methods: {
    next() {
      this.index.increment();
      this.$parent.answered = false;
      this.$parent.rightAnswer = false;
    },
    openToast(icon, message) {
      this.$toast.open({
        message: message,
        type: icon,
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
    checkAnswer() {
      if (this.rightAnswer) {
        this.openToast("success", "Resposta correta!");
      } else {
        this.openToast("error", "Resposta errada!");
      }
    },
  },
};
</script>
