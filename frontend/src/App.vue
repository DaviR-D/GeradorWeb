<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

body {
  height: 100vh;
}

a,
.green {
  cursor: pointer;
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

a:hover,
button:hover {
  opacity: 0.8;
}
</style>
