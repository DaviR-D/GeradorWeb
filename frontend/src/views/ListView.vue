<template>
  <div>
    <li v-for="lesson in lessons" :key="lesson">
      <lesson-item :name="lesson.name" />
    </li>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import axios from "axios";
import LessonItem from "@/components/LessonItem.vue";

export default {
  components: { LessonItem },
  name: "ListView",
  mounted() {
    //this.Busca();
  },
  data() {
    return {
      lessons: [{ name: "Atividade1" }, { name: "Atividade2" }],
      auth: useAuthStore(),
    };
  },

  methods: {
    Busca() {
      console.log(this.auth.getToken);
      axios
        .get("http://localhost:3333/activitys", {
          headers: { Authorization: `Bearer ${this.auth.getToken}` },
        })
        .then((response) => {
          this.lessons = response.data;
        });
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
