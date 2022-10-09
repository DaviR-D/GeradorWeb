<template>
  <div>
    <h1>Explicação:</h1>
    <div>
      <li v-for="(image, index) in data.images" :key="index">
        <img :src="image" />
        <h1>
          <strong>{{ data.words[index] }}</strong>
        </h1>
      </li>
    </div>

    <button @click="nextQuestion()">Entendido</button>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

export default {
  name: "TheTemplate3",
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
        images: "",
        words: "",
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
