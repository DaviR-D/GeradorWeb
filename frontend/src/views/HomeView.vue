<template>
  <div class="container">
    <div v-if="!logado">
      <button @click="router.push('/login')">Login</button>
      <button>Registro</button>
    </div>
    <div v-else class="container-opt">
      <a @click="newLesson" style="margin-bottom: 25px">
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
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 24px;
  width: 25%;
  height: 50px;
  text-align: center;
  border-radius: 8px;
  background: hsla(160, 100%, 37%, 1);
  box-shadow: 0 15px 20px 0 rgb(1, 160, 107);
  color: whitesmoke;
}

.container-opt {
  height: 100vh;
}
</style>
