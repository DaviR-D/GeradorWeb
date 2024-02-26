<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="">Explicação:</h1>
    <div class="grid grid-cols-2 gap-8">
      <li
        class="list-none"
        v-for="(image, index) in data.questionImages"
        :key="index"
      >
        <img
          :src="image['url']"
          class="max-h-[100px] max-w-[100px] md:max-w-lg md:max-h-96"
        />
        <h1 class="flex items-center justify-center mb-0">
          <strong>{{ data.description.split(", ")[index] }}</strong>
        </h1>
      </li>
    </div>
    <button @click="nextQuestion()">Entendido</button>
  </div>
</template>

<script>
export default {
  name: "TheTemplate3",
  data() {
    return {};
  },

  props: {
    data: {
      type: Object,
      default: () => ({
        description: "",
        images: "",
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
