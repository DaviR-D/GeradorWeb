<template>
<<<<<<< HEAD
  <div>
    <h1>Explicação:</h1>
=======
  <div class=" ">
    <h1 class="title">template2</h1>
    <h1 class="title">Explicação:</h1>
>>>>>>> 4629165f668b7586df6cfffcc97d4e6347ae86db
    <img :src="data.image" />
    <h1>{{ data.text }}</h1>
    <button @click="nextQuestion()">Entendido</button>
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
