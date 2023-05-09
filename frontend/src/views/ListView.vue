<template>
  <div class="h-screen flex items-center justify-center">
    <new-lesson v-if="showNewLesson" />
    <div
      class="flex flex-col h-2/3 justify-center gap-2 text-white text-xl items-center border-[1px] p-4 w-1/3 m-auto rounded"
      v-if="lessons.length"
    >
      <li class="list-none" v-for="(lesson, index) in lessons" :key="index">
        <lesson-item
          class="flex items-center justify-center gap-2"
          :name="lesson.name"
          :id="lesson.id"
          :index="index"
        />
      </li>
    </div>
    <div v-else>
      <h1>Nenhuma atividade disponível</h1>
    </div>
  </div>
  <div class="flex items-center justify-center">
    <button
      @click="showNewLesson = true"
      class="flex items-center justify-center"
    >
      Criar atividade
    </button>
  </div>
</template>

<script>
import axios from "axios";
import LessonItem from "@/components/LessonItem.vue";
import NewLesson from "../components/NewLesson.vue";
import api from "../services/api";

export default {
  components: { LessonItem, NewLesson },
  name: "ListView",
  mounted() {
    this.Busca();
  },
  data() {
    return {
      lessons: [],
      token: localStorage.getItem("token"),
      showNewLesson: false,
    };
  },

  methods: {
    Busca() {
      axios
        .get(`${api}/activitys`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          this.lessons = response.data;
        });
    },
  },
};
//import router from "../router";
</script>
