<template>
  <div class="container">
    <h1 class="title">Explicação:</h1>
    <div class="images-aligned">
      <li class="liTemplate3" v-for="(image, index) in data.images" :key="index">
        <img :src="image" />
        <h1 class="h1Template3">
          <strong>{{ data.words[index] }}</strong>
        </h1>
      </li>
    </div>

    <button class="primary-button mr-2 mb-2" @click="nextQuestion()">Entendido</button>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

export default {
  name: "TheTemplate3",
  data() {
    return {
      index: useIndexStore(),
    };
  },

  props: {
    data: {
      type: Object,
      default: () => ({
        description: "",
        images: "",
        words: "",
      }),
    },
  },
  methods: {
    nextQuestion() {
      this.index.increment();
    },
  },
};
</script>
<style scoped>
.container {
  justify-content: center;
}

.title {
  color: white;
  text-decoration: underline;
  text-align: center;
}

.images-aligned {
  display: flex;
}
.liTemplate3{
  margin: 2% 1px 2% 0px;
}

@media(max-width:1665px){
  .images-aligned {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .liTemplate3 {
    max-width: 100%;
  }
}

@media(max-width: 1025px) {
  .liTemplate3 {
    margin: 0;
    z-index: 1;
  }
}

img {
  max-width: 100%;
  max-height: 100%;
  border: 2px solid white;
  border-radius: 5px;
}

.primary-button {
  color: white;
  margin-bottom: 1%;
  justify-content: center;
  height: 60px;
  font-weight: bold;
  font-size: large;
  border-radius: 5px;
}
Button {
  cursor: pointer;
}
</style>
