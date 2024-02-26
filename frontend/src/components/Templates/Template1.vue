<template>
  <div class="flex flex-col items-center w-full justify-center h-screen">
    <h1 class="">Selecione a opção correspondente a imagem</h1>
    <img :src="data.questionImages[0]['url']" class="img mb-4" />
    <ul class="w-full">
      <li
        v-for="alternative in data.alternatives.split(', ')"
        :key="alternative"
        class="list-none w-full flex flex-col items-center justify-center"
      >
        <button @click="checkAnswer(alternative)">
          {{ alternative }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheTemplate1",
  data() {
    return {};
  },

  props: {
    data: {
      type: Object,
      default: () => ({
        description: "",
        questionImages: "",
        alternatives: "[1, 2, 3, 4]",
        rightAnswer: 1,
        value: 5,
      }),
    },
  },
  methods: {
    checkAnswer(alternative) {
      this.$emit("checkAnswer", {
        userAnswer: alternative,
        rightAnswer: this.data.rightAnswer,
      });
    },
  },
};
</script>
