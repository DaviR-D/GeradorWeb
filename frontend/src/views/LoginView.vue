<template>
  <div class="hero">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="124"
      height="124"
      fill="#FFF"
      viewBox="0 0 256 256"
    >
      <rect width="124" height="124" fill="none"></rect>
      <circle
        cx="128"
        cy="96"
        r="64"
        fill="none"
        stroke="#FFF"
        stroke-miterlimit="10"
        stroke-width="16"
      ></circle>
      <path
        d="M31,216a112,112,0,0,1,194,0"
        fill="none"
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></path>
    </svg>
    <div class=" ">
      <h1>Seja Bem vindo!</h1>
      <p>Você esta logando como professor.</p>
      <input
        class="input"
        id="username"
        type="text"
        v-model="username"
        placeholder="E-mail"
      />
      <input
        type="password"
        v-model="password"
        :feedback="false"
        class="inputPassword input"
        placeholder="Password"
      />
      <button @click="Login">Login</button>
    </div>
    <a href="">Voltar</a>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import router from "../router";
import axios from "axios";

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
        .post("http://localhost:3000/sessions", {
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
