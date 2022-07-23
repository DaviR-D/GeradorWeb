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

button {
  border-radius: 4px !important;
  color: whitesmoke;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  transition: ease 0.75s;
  background: hsla(160, 100%, 37%, 1);
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-size: 24px;
  width: 100%;
  height: 50px;
  text-align: center;
  border-radius: 8px;
  color: whitesmoke;
}

a:hover,
button:hover {
  opacity: 0.8;
}

input[type="file"] {
  font-size: 18px;
  margin-bottom: 20px;
  margin-right: 50px;
}
</style>
