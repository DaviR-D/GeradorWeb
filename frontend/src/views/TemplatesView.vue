<template>
  <div>
    <h1>Selecione o template para a questão:</h1>
    <div>
      <li v-for="i in [1, 2, 3, 4, 5, 6]" :key="i">
        <img @click="build(i)" :src="images[i - 1]" />
      </li>
    </div>
    <a @click="router.push('/')">Encerrar</a>
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
