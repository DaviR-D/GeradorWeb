<template>
  <div class="flex flex-col items-center mb-8">
    <div
      class="relative mb-2 w-80"
      style="border-radius: 0.5rem; overflow: hidden; background-color: black"
    >
      <h3 class="text-white text-lg p-0 text-center">{{ name }}</h3>
    </div>

    <div class="flex gap-4">
      <button
        class="flex-1 h-12 bg-green-500 text-white rounded"
        @click="loadLesson()"
      >
        Acessar
      </button>

      <button
        v-if="isTeacher"
        class="flex-1 h-12 bg-yellow-500 text-white rounded"
      >
        Editar
      </button>

      <button
        v-if="isTeacher"
        class="flex-1 h-12 bg-red-500 text-white rounded"
        @click="deleteLesson"
      >
        Remover
      </button>
    </div>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";

export default {
  name: "LessonItem",
  mounted() {},
  data() {
    return {};
  },

  props: { name: String, id: String, index: Number, isTeacher: Boolean },
  methods: {
    loadLesson() {
      router.push("/lesson/" + this.id);
    },
    deleteLesson() {
      axios
        .delete(`http://localhost:3000/activitys/${this.id}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(() => {
          this.$parent.lessons.splice(this.index, 1);
        });
    },
  },
};
</script>
