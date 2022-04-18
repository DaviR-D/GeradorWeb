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
import { useScoreStore } from "@/stores/score";
import { useCounterStore } from "@/stores/counter";

export default {
  name: "TheTemplate5",
  data() {
    return {
      index: useIndexStore(),
      score: useScoreStore(),
      counter: useCounterStore(),
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
        value: 5,
      }),
    },
  },
  methods: {
    checkAnswer(index) {
      if (index == this.data.rightAnswer) {
        console.log("Você acertou!");
        this.score.update(this.data.value);
        this.counter.increment();
      } else {
        console.log("Você errou!");
      }
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
