<template>
  <div v-if="!logado">
    <button @click="router.push('/login')">Login</button>
    <button>Registro</button>
  </div>
  <div v-else>
    <button @click="router.push('/templates')">Nova atividade</button>
    <button @click="router.push('/list-lessons')">Atividades salvas</button>
  </div>
</template>

<script setup>
import router from "../router";

let logado = true;
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
