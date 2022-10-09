<template>
  <div class=" ">
    <h1 style="color: white; margin-bottom: 40px">
      Selecione o template para a questão:
    </h1>
    <div class="images-aligned">
      <li v-for="i in [1, 2, 3, 4, 5, 6]" :key="i">
        <img @click="build(i)" class="image" :src="images[i - 1]" />
      </li>
    </div>
    <a @click="router.push('/')" class="colors">Encerrar</a>
  </div>
</template>

<script setup>
import router from "../router";

const images = [
  "https://i.imgur.com/fSBLcSb.png",
  "https://i.imgur.com/Evzg5OW.png",
  "https://i.imgur.com/27qOslm.png",
  "https://i.imgur.com/NvuyhMg.png",
  "https://i.imgur.com/8qSh1bg.png",
  "https://i.imgur.com/ndGjtf1.png",
];

const build = (i) => {
  router.push("/build/" + i);
};
</script>
