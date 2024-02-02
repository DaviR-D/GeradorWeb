<template>
  <div class="h-screen flex items-center justify-center">
    <new-lesson v-if="showNewLesson" />
    <div
      class="flex flex-col justify-center gap-2 text-white text-xl items-center border-[1px] p-4 w-2/3 m-auto rounded"
      v-if="lessons.length"
    >
      <div
        class="flex flex-col gap-4"
        style="max-height: calc(100% - 2rem); overflow-y-auto;"
      >
        <lesson-item
          v-for="(lesson, index) in lessons"
          :key="index"
          :name="lesson.name"
          :id="lesson.id"
          :index="index"
          :isTeacher="isTeacher"
        />
      </div>
      <button
        @click="showNewLesson = true"
        class="flex items-center justify-center"
      >
        Criar atividade
      </button>
    </div>
    <div v-else>
      <h1>Nenhuma atividade disponível</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LessonItem from "@/components/LessonItem.vue";
import NewLesson from "../components/NewLesson.vue";

export default {
  components: { LessonItem, NewLesson },
  name: "ListView",
  beforeMount() {
    axios
      .get("http://localhost:3000/users/logged", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .catch((response) => {
        if (!(response.response.status == 401)) {
          if (response.response.status == 404) this.isTeacher = true;
          this.logado = true;
          return;
        }
      });
  },
  mounted() {
    this.Busca();
  },
  data() {
    return {
      lessons: [],
      token: localStorage.getItem("token"),
      showNewLesson: false,
      isTeacher: false,
    };
  },

  methods: {
    Busca() {
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
  },
};
//import router from "../router";
</script>
