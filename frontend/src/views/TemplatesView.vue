<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-3xl font-semibold mb-8">
      Selecione o template para a questão:
    </h1>
    <div class="grid grid-cols-3 gap-8">
      <div v-for="i in [1, 2, 3, 4, 5, 6]" :key="i">
        <div class="relative">
          <img
            class="img imagem cursor-pointer"
            @click="build(i)"
            :src="images[i - 1]"
          />
          <div
            class="overlay absolute inset-0 flex items-center justify-center"
          >
            <span class="text-white font-semibold">Template {{ i }}</span>
          </div>
        </div>
      </div>
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
  "https://i.imgur.com/I01YbFS.png",
  "https://i.imgur.com/axVTTi8.png",
  "https://i.imgur.com/yqQuI8x.png",
  "https://i.imgur.com/tuLqcuH.png",
  "https://i.imgur.com/custjWC.png",
  "https://i.imgur.com/MIwu1e4.png",
];

const build = (i) => {
  router.push("/build/" + route.params.lessonId + "/" + i);
};
</script>

<style scoped>
.imagem {
  height: 350px;
  width: 100%;
  object-fit: contain; /* Alteração aqui */
  border-radius: 8px;
  transition: transform 0.3s;
}

.overlay {
  opacity: 0;
  transition: opacity 0.3s;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
}

.relative:hover .imagem {
  transform: scale(1.1);
}

.relative:hover .overlay {
  opacity: 1;
}
</style>
