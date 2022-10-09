<template>
  <div>
    <div>
      <h1>Seja Bem vindo!</h1>
      <p>Você esta logando como professor.</p>
      <input
        id="username"
        type="text"
        v-model="username"
        placeholder="E-mail"
      />
      <input
        type="password"
        v-model="password"
        :feedback="false"
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
