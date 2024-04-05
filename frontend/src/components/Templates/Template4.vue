<template>
  <div class="flex flex-col items-center justify-center h-screen w-screen">
    <h1 class="text-base md:text-2xl mb-4">
      Associe as imagens com as palavras:
    </h1>
    <table class="w-full text-white">
      <tbody>
        <tr v-for="(image, index) in data.questionImages" :key="index">
          <td>{{ index + 1 }}</td>
          <td></td>
          <td class="col-span-2">
            <img :src="image.url" class="imagem" />
          </td>
          <td>
            <input
              class="max-w-[60px] md:max-w-[100px] text-center text-black"
              type="number"
              v-model="answer[index]"
            />
          </td>
          <td>
            <span class="ml-2">
              {{ data.description.split(", ")[correctAnswer[index] - 1] }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="w-full flex items-center justify-center mt-4">
      <button class="botao ml-10 md:ml-0" @click="checkAnswer()">
        Confirmar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTemplate4",
  mounted() {
    this.generateAnswer();
  },
  data() {
    return {
      answer: [],
      correctAnswer: [],
    };
  },

  props: {
    data: {
      type: Object,
      default: () => ({
        description: "",
        images: [],
        words: [],
        value: 5,
      }),
    },
  },
  methods: {
    generateAnswer() {
      for (let i = 1; i < this.data.description.split(", ").length + 1; i++) {
        this.correctAnswer.push(i);
      }
      this.correctAnswer.sort(() => Math.random() - 0.5);
    },
    checkAnswer() {
      this.$emit("checkAnswer", {
        userAnswer: this.answer.toString(),
        rightAnswer: this.correctAnswer.toString(),
      });
    },
  },
};
</script>
<style scoped>
.imagem {
  max-width: 300px;
  max-height: 150px;
}

table {
  border-collapse: collapse;
  width: 50%;
}

td,
th {
  padding: 8px;
  text-align: center;
}

td.col-span-2 {
  column-span: all;
}
</style>
