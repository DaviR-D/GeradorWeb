<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="">Explicação:</h1>
    <img :src="data.image" class="img" />
    <h1 class="">{{ data.text }}</h1>
    <button @click="nextQuestion()">Entendido</button>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

export default {
  name: "TheTemplate2",
  data() {
    return {
      index: useIndexStore(),
    };
  },

  props: {
    data: {
      type: Object,
      default: () => ({
        description: "",
        image: "",
        text: "",
      }),
    },
  },
  methods: {
    nextQuestion() {
      this.index.increment();
    },
  },
};
</script>
