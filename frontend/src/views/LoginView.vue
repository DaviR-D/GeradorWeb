<template>
  <div>
    <span class="p-float-label">
      <InputText id="username" type="text" v-model="username" />
      <label for="username">Username</label>
    </span>
    <Password v-model="password" :feedback="false" />
  </div>
  <button @click="Login"></button>
</template>

<script>
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import useAuthStore from "@/stores/auth";
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
        });
    },
  },
};
</script>
