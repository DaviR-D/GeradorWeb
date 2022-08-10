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

img {
  width: 619px;
  height: 353px;
}

body {
  height: 100%;
  min-height: auto;
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

input {
  border: none;
  height: 50px;
  box-shadow: 0px;
  border-radius: 4px;
  padding: 0px 0px 0px 16px;
}

input:focus {
  outline: none;
  border-left: 4px solid rgba(41, 160, 41, 0.8);
  border-bottom: 4px solid rgba(41, 160, 41, 0.8);
}

ol {
  list-style: none;
}

li {
  list-style: none;
}
</style>
