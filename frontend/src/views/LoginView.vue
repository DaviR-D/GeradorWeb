<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="border-[1px] p-4 w-1/3 rounded">
      <div class="flex flex-col items-center justify-center text-white gap-4">
        <h1>Seja Bem vindo!</h1>
        <img src="../assets/login.png" alt="">
        <p class="font-bold">Você esta logando como professor.</p>
        <input
          class="h-10 w-3/4 p-2 rounded"
          id="username"
          type="text"
          v-model="username"
          placeholder="E-mail"
        />
        <input
          class="h-10 w-3/4 p-2 rounded"
          type="password"
          v-model="password"
          :feedback="false"
          placeholder="Password"
        />
      </div>
      <div class="mt-4 flex flex-col items-center justify-center">
        <button class="h-12 text-xl" @click="Login">Login</button>
        <a class="anchor text-xl flex items-center justify-center h-12" href=""
          >Voltar</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import router from "../router";
import axios from "axios";
import api from "../services/api";

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
      auth: useAuthStore(),
    };
  },

  methods: {
    Login() {
      axios
        .post(`${api}/sessions`, {
          email: this.username,
          password: this.password,
        })
        .then((response) => {
          this.auth.saveToken(response.data.token);
          console.log(this.auth.getToken);
          router.push("/");
        });
    },
  },
};
</script>
