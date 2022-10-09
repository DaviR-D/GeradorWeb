<template>
  <div class="flex flex-col items-center">
    <h1 class="">Explicação:</h1>
    <div class="grid grid-cols-2 gap-8">
      <li class="list-none" v-for="(image, index) in data.images" :key="index">
        <img :src="image" class="w-60 h-60" />
        <h1 class="flex items-center justify-center mb-0">
          <strong>{{ data.words[index] }}</strong>
        </h1>
      </li>
    </div>
    <button
      class="bg-green-400 rounded p-2 w-full h-16 max-w-xl mt-2 mb-3 shadow-md text-white font-bold shadow-green-600 hover:brightness-75"
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
