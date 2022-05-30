<template>
  <div style="align-items: center;">
    <h1 class="title">Explicação:</h1>
    <img :src="data.image" />
    <h1 class="h1Template2">{{ data.text }}</h1>
    <button class="btnTemplate2" @click="nextQuestion()">Entendido</button>
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
<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  border: 3px solid white;
}
.h1Template2 {
  text-align: center;
  background-color: gray;
  color: white;
  font-weight: bold;
  margin: 0 20% 2% 20%;
  border-radius: 5px;
}
.btnTemplate2 {
  border-radius: 5px;
  cursor: pointer;
}
.title {
  color: white;
  text-decoration: underline;
  text-align: center;
}
</style>
