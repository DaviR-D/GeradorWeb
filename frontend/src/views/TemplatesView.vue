<template>
  <div>
    <li v-for="i in [1, 2, 3, 4, 5, 6]" :key="i">
      <button @click="build(i)">Template {{ i }}</button>
    </li>
    <button @click="router.push('/')">Encerrar</button>
  </div>
</template>

<script setup>
import router from "../router";

const build = (i) => {
  router.push("/build/" + i);
};
</script>
