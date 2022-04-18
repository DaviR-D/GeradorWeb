<template>
  <div>
    <h1>
      <strong>{{ data.word }}</strong>
    </h1>
    <li v-for="(image, index) in data.images" :key="index">
      <img :src="image" @click="checkAnswer(index)" />
    </li>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

export default {
  name: "TheTemplate5",
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
        word: "",
        images: [1, 2, 3, 4],
        rightAnswer: 1,
      }),
    },
  },
  methods: {
    checkAnswer(index) {
      index == this.data.rightAnswer
        ? console.log("Você acertou!")
        : console.log("Você errou!");
      this.index.increment();
    },
  },
};
</script>
<style>
img {
  height: 60%;
  width: 60%;
  border-radius: 5px;
  margin-bottom: 0.3%;
}
</style>
