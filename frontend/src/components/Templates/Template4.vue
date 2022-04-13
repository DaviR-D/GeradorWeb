<template>
  <div>
    <li v-for="(image, index) in data.images" :key="index">
      <table>
        <tr>
          <th scope="col">
            <h1>{{ index + 1 }}</h1>
          </th>
          <th scope="col">
            <img :src="image" style="height: 100px; width: 100px" />
          </th>
          <th scope="col">
            <h1>{{ data.words[data.rightAnswer[index] - 1] }}</h1>
          </th>
          <th scope="col">
            <input type="number" v-model="answer[index]" />
          </th>
        </tr>
      </table>
    </li>
    <button @click="checkAnswer()">Confirmar</button>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

export default {
  name: "QuestionTemplate4",
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
