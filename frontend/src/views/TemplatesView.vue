<template>
  <div class="container">
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
  router.push("/build" + i);
};
</script>

<style scoped>
li {
  list-style: none;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 98%;
}

img {
  width: 100%;
  height: 100%;
  border: 1px solid whitesmoke;
}

.images-aligned {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.image {
  border-radius: 3px;
  margin: 0 3px 0 0;
  border: 3px solid white;
  cursor: pointer;
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
  margin-bottom: 20px;
}
</style>
