<template>
  <div
    class="flex flex-col justify-center items-center justify-items-center h-screen"
  >
    <h1 class="text-sm md:text-xl lg:text-2xl xl:text-4xl">
      Selecione a imagem correspondente a palavra em inglês:
    </h1>
    <h1 class="">
      <strong>{{ data.word }}</strong>
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
    <answer-message
      v-if="answered"
      :rightAnswer="rightAnswer"
      :value="data.value"
    />
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";
import { useScoreStore } from "@/stores/score";
import AnswerMessage from "@/components/AnswerMessage.vue";

export default {
  components: { AnswerMessage },
  name: "TheTemplate5",
  data() {
    return {
      index: useIndexStore(),
      score: useScoreStore(),
      answered: false,
      rightAnswer: false,
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
        this.score.update(this.data.value);
        this.score.incrementAnswerCounter();
        this.rightAnswer = true;
      }
      this.score.incrementQuestionCounter();
      this.answered = true;
    },
  },
};
</script>
