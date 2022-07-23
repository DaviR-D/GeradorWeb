<template>
  <div class="container">
    <t v-for="i in [1, 2, 3, 4, 5, 6]" :key="i">
      <a @click="build(i)">Template {{ i }}</a>
    </t>
    <a @click="router.push('/')" class="colors">Encerrar</a>
  </div>
</template>

<script setup>
import router from "../router";

const build = (i) => {
  router.push("/build/" + i);
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 60%;
}

button,
a {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  width: 400px;
  text-align: center;
  border-radius: 8px;
  background: rgb(0, 151, 189);
  color: whitesmoke;
  height: 50px;
}

.colors {
  margin-top: 25px;
  background: hsla(160, 100%, 37%, 1);
}
</style>
