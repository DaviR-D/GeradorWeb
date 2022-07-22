<template>
  <div class="hero">
    <i
      class="pi pi-users"
      style="font-size: 5rem; color: whitesmoke; margin-bottom: 50px"
    ></i>
    <div class="container">
      <h1>Seja Bem vindo!</h1>
      <p>Você esta logando como professor.</p>
      <InputText
        class="input"
        id="username"
        type="text"
        v-model="username"
        placeholder="E-mail"
      />
      <InputText
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
import InputText from "primevue/inputtext";
import router from "../router";
import axios from "axios";

export default {
  components: { InputText },
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
        .post("http://localhost:3333/sessions", {
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

<style scoped>
p {
  font-size: 18px;
  margin-bottom: 90px;
}

h1 {
  margin-bottom: 20px;
  color: whitesmoke;
}
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.input {
  width: 100% !important;
  height: 10%;
  font-size: 18px;
}
.container {
  border: solid 1px #29292e;
  padding: 10px;
  border-radius: 16px;
  width: 450px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.inputPassword {
  margin: 10px 0px 80px 0px;
  width: 100% !important;
}

i:hover {
  opacity: 0.7;
}
</style>
