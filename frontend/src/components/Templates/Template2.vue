<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="">Explicação:</h1>
    <img
      :src="data.questionImages[0]['url']"
      class="img max-h-[300px] max-w-[300px] md:max-w-lg md:max-h-96"
    />
    <h1>{{ data.description }}</h1>
    <button @click="nextQuestion()">Entendido</button>
  </div>
</template>

<script>
export default {
  name: "TheTemplate2",
  data() {
    return {};
  },

  props: {
    data: {
      type: Object,
      default: () => ({
        description: "",
        image: "",
      }),
    },
  },
  methods: {
    nextQuestion() {
      this.$emit("nextQuestion");
    },
  },
};
</script>
