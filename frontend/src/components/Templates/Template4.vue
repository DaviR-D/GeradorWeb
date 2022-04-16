<template>
  <div class="container">
    <li class="liTemplate4" v-for="(image, index) in data.images" :key="index">
      <h1 class="indexTemplate4">{{ index + 1 }}</h1>
      <img class="imgTemplate4" :src="image" />
      <h1 class="wordsTemplate4" >{{ data.words[data.rightAnswer[index] - 1] }}</h1>
      <input class="inputTemplate4" type="number" v-model="answer[index]" />
    </li>
    <button style="border-radius:5px" @click="checkAnswer()">Confirmar</button>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

export default {
  name: "TheTemplate4",
  data() {
    return {
      index: useIndexStore(),
      answer: [],
    };
  },

  props: {
    data: {
      type: Object,
      default: () => ({
        description: "",
        images: [],
        words: [],
        rightAnswer: [],
      }),
    },
  },
  methods: {
    checkAnswer() {
      this.answer.toString() == this.data.rightAnswer.toString()
        ? console.log("Você acertou!")
        : console.log("Você errou!");
      this.index.increment();
    },
  },
};
</script>

<style scoped>
 input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
.container {
  display: table-cell;
   text-align: center;
   vertical-align: middle;  
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 100%;
}
.liTemplate4 {
  display:flex;
  justify-content: center;
  margin:1% 0 1% 0;
  
}
.indexTemplate4 {
  margin:15% 2% 0 0;
  color: white;
}
.imgTemplate4 {
  width: 277px;
  height: 200px;
  max-height: 100%;
  margin: 0 auto;
  border-radius: 3px;
}
.inputTemplate4 {
  margin-top: 17.5%;
  height: 10%; 
  max-width: 20%;
}
.wordsTemplate4{
  min-width: 20%;
  margin-top: 15%;
  color: white;
}
</style>