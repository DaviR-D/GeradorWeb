<template>
  <div>
    <img :src="data.image" style="height: 400px; width: 600px" />

    <li v-for="alternative in data.alternatives" :key="alternative">
      <button @click="checkAnswer(alternative)">{{ alternative }}</button>
    </li>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

export default {
  name: "QuestionTemplate1",
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
        alternatives: [1, 2, 3, 4],
        rightAnswer: 1,
      }),
    },
  },
  methods: {
    checkAnswer(alternative) {
      alternative == this.data.rightAnswer
        ? console.log("Você acertou!")
        : console.log("Você errou!");
      this.index.increment();
    },
  },
};
</script>
