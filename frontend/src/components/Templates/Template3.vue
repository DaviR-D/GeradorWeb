<template>
  <div class=" ">
    <h1 class="title">Explicação:</h1>
    <div class="images-aligned">
      <li
        class="liTemplate3"
        v-for="(image, index) in data.images"
        :key="index"
      >
        <img :src="image" />
        <h1 class="h1Template3">
          <strong>{{ data.words[index] }}</strong>
        </h1>
      </li>
    </div>

    <button class="primary-button mr-2 mb-2" @click="nextQuestion()">
      Entendido
    </button>
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
