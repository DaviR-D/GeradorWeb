<template>
  <div>
    <h1 class="title">Explicação:</h1>
    <li v-for="(image, index) in data.images" :key="index">
      <img :src="image" />
      <h1>
        <strong>{{ data.words[index] }}</strong>
      </h1>
    </li>

    <h1 class="h1Template2">{{ data.text }}</h1>
    <button class="btnTemplate2" @click="nextQuestion()">Entendido</button>
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
<style scoped>
img {
  max-width: 40%;
  max-height: 40%;
  border-radius: 5px;
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
