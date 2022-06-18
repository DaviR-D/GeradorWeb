<template>
  <div>
    <li v-for="lesson in lessons" :key="lesson"></li>
  </div>
</template>

<script setup>
//import router from "../router";

const lessons = [];
</script>
<style>
button {
  font-size: 100%;
  width: 100%;
  height: 50px;
  background-color: #008cba;
  border-color: transparent;
  margin-bottom: 1%;
  border-radius: 5px;
}
</style>
