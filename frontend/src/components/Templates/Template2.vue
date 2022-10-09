<template>
  <div class=" ">
    <h1 class="title">template2</h1>
    <h1 class="title">Explicação:</h1>
    <img :src="data.image" />
    <h1 class="h1Template2">{{ data.text }}</h1>
    <button class="primary-button" @click="nextQuestion()">Entendido</button>
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
