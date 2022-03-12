<template>
  <div>
    <img :src="image" style="height: 400px; width: 600px" />

    <li v-for="alternative in alternatives" :key="alternative">
      <button @click="checkAnswer(alternative)">{{ alternative }}</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "QuestionTemplate1",
  props: {
    image: {
      type: String,
      required: true,
    },
    alternatives: {
      type: Array,

      required: true,
    },

    rightAnswer: {
      type: Number,
      required: true,
    },
  },
  methods: {
    checkAnswer(alternative) {
      alternative == this.rightAnswer
        ? console.log("Você acertou!")
        : console.log("Você errou!");
    },
  },
};
</script>
