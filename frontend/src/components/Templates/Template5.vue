<template>
  <div
    class="flex flex-col justify-center items-center justify-items-center h-screen"
  >
    <h1 class="text-sm md:text-xl lg:text-2xl xl:text-4xl">
      Selecione a imagem correspondente a palavra em inglês:
    </h1>
    <h1 class="">
      <strong>{{ data.description }}</strong>
    </h1>
    <div class="flex flex-col gap-4 md:flex md:flex-row">
      <li
        class="list-none"
        v-for="(image, index) in data.questionImages"
        :key="index"
      >
        <img
          class="img max-h-[200px] max-w-[200px] md:max-w-[160px] md:max-h-[160px] lg:max-w-[230px] lg:max-h-[220px] xl:max-w-xs xl:max-h-80"
          :src="image['url']"
          @click="checkAnswer(index)"
        />
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTemplate5",
  data() {
    return {};
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
      this.$emit("checkAnswer", {
        userAnswer: index,
        rightAnswer: this.data.rightAnswer,
      });
    },
  },
};
</script>
