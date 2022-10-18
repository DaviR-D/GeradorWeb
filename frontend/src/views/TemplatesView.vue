<template>
  <div class="flex flex-col items-center justify-center">
    <h1>Selecione o template para a questão:</h1>
    <div class="grid grid-cols-3 gap-4">
      <li class="list-none" v-for="i in [1, 2, 3, 4, 5, 6]" :key="i">
        <img class="img imagem" @click="build(i)" :src="images[i - 1]" />
      </li>
    </div>
    <a
      class="bg-green-600 rounded w-96 h-14 mt-12 flex justify-center items-center text-white font-semibold hover:brightness-75 hover:transition-all"
      @click="router.push('/')"
      >Encerrar</a
    >
  </div>
</template>

<script setup>
import router from "../router";
import { useRoute } from "vue-router";

const route = useRoute();

const images = [
  "https://i.imgur.com/fSBLcSb.png",
  "https://i.imgur.com/Evzg5OW.png",
  "https://i.imgur.com/27qOslm.png",
  "https://i.imgur.com/NvuyhMg.png",
  "https://i.imgur.com/8qSh1bg.png",
  "https://i.imgur.com/ndGjtf1.png",
];

const build = (i) => {
  router.push("/build/" + route.params.lessonId + "/" + i);
};
</script>
<style scoped>
.imagem {
  height: 350px;
}
</style>
