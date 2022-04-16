<template>
  <div class="container">
    <h1 class="titleTemplate6">Coloque a resposta correta</h1>
    <img class="imgTemplate6" :src="data.image" />
    <p class="inputTemplate6">
<input  type="text" v-model="answer" @keyup.enter="checkAnswer()" />
    </p>
    
    <button class="btnTemplate6" @click="checkAnswer()">Confirmar</button>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

export default {
  name: "TheTemplate1",
  data() {
    return {
      index: useIndexStore(),
      answer: "",
    };
  },

  props: {
    data: {
      type: Object,
      default: () => ({
        description: "",
        image: "",
        rightAnswer: 1,
      }),
    },
  },
  methods: {
    checkAnswer() {
      this.answer.toLowerCase() == this.data.rightAnswer.toLowerCase()
        ? console.log("Você acertou!")
        : console.log("Você errou!");
      this.index.increment();
    },
  },
};
</script>

<style scoped>
.container {
  display: inline;
  justify-content: center;
}
.imgTemplate6{
  border-radius: 5px;
  max-width: 100%;
  margin-top:1%;
}
.btnTemplate6{
  border-radius: 5px;
  max-width: 100%;
}
.inputTemplate6{
  text-align: center;
  margin-bottom: 2%;
}
.titleTemplate6{
  text-align: center;
  color: white;
  text-decoration: underline
  
}
</style>