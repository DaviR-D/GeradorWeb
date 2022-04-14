<template>
  <div>
    <img :src="data.image" />

    <li v-for="alternative in data.alternatives" :key="alternative">
      <button style="border-radius: 5px" @click="checkAnswer(alternative)">
        {{ alternative }}
      </button>
    </li>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

export default {
  name: "TheTemplate1",
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

<style>
img {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 0.3%;
}
</style>
