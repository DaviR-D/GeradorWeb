<template>
  <div class="w-full flex justify-center items-center h-screen">
    <div v-if="!logado">
      <button @click="router.push('/login')">Login</button>
      <button>Registro</button>
    </div>
    <div v-else>
      <a @click="newLesson">
        <t> Nova atividade </t>
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
