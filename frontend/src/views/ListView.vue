<template>
  <div v-if="lessons.length">
    <li v-for="lesson in lessons" :key="lesson">
      <lesson-item :name="lesson.name" />
    </li>
  </div>
  <div v-else>
    <h1>Nenhuma atividade disponível</h1>
    <button @click="newLesson()">Criar atividade</button>
  </div>
</template>

<script>
import axios from "axios";
import LessonItem from "@/components/LessonItem.vue";
import router from "@/router";

export default {
  components: { LessonItem },
  name: "ListView",
  mounted() {
    this.Busca();
  },
  data() {
    return {
      lessons: [{ name: "Atividade1" }, { name: "Atividade2" }],
      token: localStorage.getItem("token"),
    };
  },

  methods: {
    Busca() {
      console.log(this.token);
      axios
        .get("http://localhost:3000/activitys", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          this.lessons = response.data;
        });
    },
    newLesson() {
      router.push("/templates");
    },
  },
};
//import router from "../router";
</script>
<style scoped>
button {
  font-size: 100%;
  width: 100%;
  height: 50px;
  background-color: #008cba;
  border-color: transparent;
  margin-bottom: 1%;
  border-radius: 5px;
}
</style>
