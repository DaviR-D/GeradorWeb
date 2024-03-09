<template>
  <div class="dialog">
    <strong class="text-white">Nome da atividade</strong>
    <a @click="this.$parent.showNewLesson = false" class="close-button">X</a>
    <input
      type="text"
      v-model="lessonName"
      @keyup.enter="newLesson"
      class="custom-input"
    />
  </div>
</template>
<script>
import router from "../router";
import axios from "axios";

export default {
  name: "NewLesson",
  methods: {
    newLesson() {
      axios
        .post(
          "http://localhost:3000/activitys",
          { name: this.lessonName },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          this.lessonId = response.data.id;
          router.push("/templates/" + this.lessonId);
        });
    },
  },
};
</script>

<style>
.dialog {
  width: 25%;
  height: 10%;
  text-align: center;
  position: absolute;
  top: auto;
  left: auto;
  margin: auto;
  background-color: rgb(54, 54, 54);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  z-index: 1;
}

.custom-input {
  width: 60%;
  height: 40%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 8px;
}

.close-button {
  position: absolute;
  top: 1px;
  right: 8px;
  color: #fff;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 100%;
  transition: color 0.3s, border-color 0.3s, background-color 0.3s;
}

.close-button:hover {
  color: #000;
  border-color: #d84e4e;
  background-color: #d84e4e;
}
</style>
