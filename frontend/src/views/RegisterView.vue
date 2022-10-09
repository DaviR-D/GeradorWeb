<template>
  <div class="hero">
    <i
      class="pi pi-users"
      style="font-size: 5rem; color: whitesmoke; margin-bottom: 50px"
    ></i>
    <div class=" ">
      <h1>Seja Bem vindo!</h1>
      <p>Criar uma conta de professor.</p>
      <input
        class="input"
        id="username"
        type="text"
        v-model="username"
        placeholder="Nome"
      />
      <input
        class="input"
        id="email"
        type="text"
        v-model="email"
        placeholder="E-mail"
      />
      <input
        type="password"
        v-model="password"
        :feedback="false"
        class="inputPassword input"
        placeholder="Password"
      />
      <button @click="Login">Registrar</button>
    </div>
    <a href="">Voltar</a>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";

export default {
  name: "RegisterView",
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },

  methods: {
    Login() {
      axios
        .post("http://localhost:3000/users", {
          name: this.username,
          password: this.password,
          email: this.email,
          isTeacher: true,
        })
        .then((response) => {
          console.log(response);
          router.push("/");
        });
    },
  },
};
</script>
