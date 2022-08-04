<template>
  <div class="hero">
    <i
      class="pi pi-users"
      style="font-size: 5rem; color: whitesmoke; margin-bottom: 50px"
    ></i>
    <div class="container">
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
