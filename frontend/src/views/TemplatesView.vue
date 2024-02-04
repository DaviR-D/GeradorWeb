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
          <span class="template-name">{{ "Template " + i }}</span>
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
  object-fit: contain;
  border: 3px solid black;
  border-radius: 8px;
  transition: transform 0.3s;
}

.template-name {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  padding: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 100%;
  text-align: center;
  color: white;
}

.relative:hover .imagem {
  transform: scale(1.1);
}

.relative:hover .template-name {
  opacity: 0;
}
</style>
