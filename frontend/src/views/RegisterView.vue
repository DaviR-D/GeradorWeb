<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="border-[1px] p-4 w-1/3 rounded">
      <div class="flex flex-col items-center justify-center text-white gap-4">
        <h1>Seja Bem vindo!</h1>
        <img src="../assets/in.png" class="h-20 w-20" alt="">
        <p class="font-bold">Criar uma conta como professor.</p>
        <input
          class="h-10 w-3/4 p-2 rounded"
          id="username"
          type="text"
          v-model="username"
          placeholder="Nome"
        />
        <input
          class="h-10 w-3/4 p-2 rounded"
          id="email"
          type="text"
          v-model="email"
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
        <button class="h-12 text-xl" @click="Login">Registrar</button>
        <a class="anchor text-xl flex items-center justify-center h-12" href="">Voltar</a>
      </div>
    </div>
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
