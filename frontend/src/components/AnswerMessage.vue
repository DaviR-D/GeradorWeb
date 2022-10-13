<template>
  <div class="flex w-full items-center justify-center">
    <button @click="index.increment()" class="bg-gray-400 shadow-none">
      Próximo
    </button>
  </div>
</template>

<script>
export default {
  name: "AnswerMessage",
  mounted() {
    this.checkAnswer();
  },
};
</script>
