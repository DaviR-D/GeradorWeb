<template>
  <div>
    <button class="w-60 h-14" @click="loadLesson()">{{ name }}</button
    ><button v-if="isTeacher" class="w-60 h-14">Editar</button
    ><button v-if="isTeacher" class="w-60 h-14" @click="deleteLesson">
      Remover
    </button>
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
