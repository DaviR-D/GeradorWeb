<template>
  <div class="flex flex-col items-center">
    <h1 class="title">template3:</h1>
    <h1 class="title">Explicação:</h1>
    <div class="grid grid-cols-2 gap-8">
      <li
        class="liTemplate3 list-none"
        v-for="(image, index) in data.images"
        :key="index"
      >
        <img :src="image" class="w-80 h-80" />
        <h1 class="flex items-center justify-center mb-0">
          <strong>{{ data.words[index] }}</strong>
        </h1>
      </li>
    </div>
    <button
      class="bg-green-400 rounded p-2 w-full max-w-2xl mt-2 mb-3 hover:shadow-md hover:shadow-green-600"
      @click="nextQuestion()"
    >
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
