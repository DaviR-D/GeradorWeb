<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="">Explicação:</h1>
    <div class="grid grid-cols-2 gap-8">
      <li class="list-none" v-for="(image, index) in data.images" :key="index">
        <img
          :src="image"
          class="max-h-[100px] max-w-[100px] md:max-w-lg md:max-h-96"
        />
        <h1 class="flex items-center justify-center mb-0">
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
