<template>
  <div class="container">
    <i
      class="pi pi-users"
      style="font-size: 5rem; color: whitesmoke; margin-bottom: 50px"
    ></i>
    <InputText
      id="username"
      type="text"
      v-model="username"
      placeholder="E-mail"
    />
    <Password
      v-model="password"
      :feedback="false"
      class="inputPassword"
      placeholder="Password"
    />
    <button @click="Login">Login</button>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import router from "../router";
import axios from "axios";

export default {
  components: { InputText, Password },
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

<style>
.container {
  border: solid 1px #29292e;
  padding: 10px;
  border-radius: 4px;
  width: 450px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.inputPassword {
  margin: 10px 0 10px;
}

button {
  border-radius: 4px !important;
  color: whitesmoke;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  transition: ease 0.75s;
}

button:hover {
  opacity: 0.78;
}
</style>
