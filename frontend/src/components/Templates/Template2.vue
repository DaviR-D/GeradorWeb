<template>
  <div class=" ">
    <h1 class="">template2</h1>
    <h1 class="">Explicação:</h1>
    <img :src="data.image" />
    <h1 class="">{{ data.text }}</h1>
    <button class="" @click="nextQuestion()">Entendido</button>
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
