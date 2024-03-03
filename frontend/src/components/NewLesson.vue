<template>
  <div class="dialog">
    <strong> Nome da atividade </strong>
    <a @click="this.$parent.showNewLesson = false"> X </a>
    <input
      type="text"
      v-model="lessonName"
      @keyup.enter="newLesson"
      style="align: center"
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
}
</style>
