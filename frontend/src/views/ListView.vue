<template>
  <div class="h-screen flex items-center justify-center">
    <div
      class="flex flex-col h-2/3 justify-center gap-2 text-white text-xl items-center border-[1px] p-4 w-1/3 m-auto"
      v-if="lessons.length"
    >
      <li class="list-none" v-for="lesson in lessons" :key="lesson">
        <lesson-item
          class="flex items-center justify-center gap-2"
          :name="lesson.name"
        />
      </li>
    </div>
    <div v-else>
      <h1>Nenhuma atividade disponível</h1>
      <button @click="newLesson()">Criar atividade</button>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import axios from "axios";
import LessonItem from "@/components/LessonItem.vue";
import router from "@/router";

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
        .get("http://localhost:3000/activitys", {
          headers: { Authorization: `Bearer ${this.auth.getToken}` },
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
