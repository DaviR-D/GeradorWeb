<template>
  <div>
    <h1>Selecione a imagem correspondente a palavra em inglês:</h1>
    <h1 class="dataWord">
      <strong>{{ data.word }}</strong>
    </h1>
    <div class="container">
      <li v-for="(image, index) in data.images" :key="index">
        <img class="image" :src="image" @click="checkAnswer(index)" />
      </li>
    </div>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";
import { useScoreStore } from "@/stores/score";

export default {
  name: "TheTemplate5",
  data() {
    return {
      index: useIndexStore(),
      score: useScoreStore(),
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
        this.score.incrementAnswerCounter();
      } else {
        console.log("Você errou!");
      }
      this.score.incrementQuestionCounter();
      this.index.increment();
    },
  },
};
</script>
<style scoped>
.dataWord {
  margin: 0 30% 2% 30%;
  border: 2px solid white;
}
h1 {
  margin-bottom: 2%;
  text-align: center;
  color: white;
}
.container {
  display: flex;
}
.image {
  margin-top: 2%;
  border-radius: 3px;
  width: 277px;
  height: 200px;
  margin: 0 3px 0 0;
  border: 3px solid white;
  cursor: pointer;
}
li {
  text-align: center;
  max-width: 100%;
}
</style>
