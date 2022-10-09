<template>
  <div class="w-full flex justify-center items-center h-screen">
    <div v-if="!logado">
      <a @click="router.push('/login')">Login</a>
      <a>Registro</a>
    </div>
    <div v-else class="flex flex-col">
      <a
        @click="newLesson"
        class="bg-green-600 rounded w-48 h-8 flex justify-center items-center text-white font-bold hover:brightness-75 hover:animate-spin"
      >
        <t>Nova atividade</t>
      </a>
      <a @click="router.push('/list-lessons')">Atividades salvas</a>
    </div>
  </div>
</template>

<script setup>
//import { useAuthStore } from "@/stores/auth";
import router from "../router";
//import axios from "axios";

const newLesson = () => {
  // console.log(localStorage.getItem("token"));
  // axios
  //   .post("http://localhost:3000/activitys", {
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("token"),
  //     },
  //     name: "Teste",
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   });
  router.push("/templates");
};

let logado = true;

//const auth = useAuthStore();
//let token = auth.getToken;
</script>

<style></style>
