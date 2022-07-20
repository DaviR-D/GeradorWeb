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

button {
  border-radius: 4px !important;
  color: whitesmoke;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  transition: ease 0.75s;
  background: hsla(160, 100%, 37%, 1);
}

button:hover {
  opacity: 0.78;
}

i:hover {
  opacity: 0.7;
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
  box-shadow: 0px -50px 80px 0 rgb(1, 160, 107);
  color: whitesmoke;
}
</style>
