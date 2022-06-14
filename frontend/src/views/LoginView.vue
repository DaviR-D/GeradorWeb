<template>
  <div>
    <span class="p-float-label">
      <InputText id="username" type="text" v-model="username" />
      <label for="username">Username</label>
    </span>
    <Password v-model="password" :feedback="false" />
  </div>
</template>

<script>

export default {
  components: { InputText, Password },
  name: "LoginView",
  data() {
    return { username: "", password: "" };
  },

  methods: {},
};
</script>
