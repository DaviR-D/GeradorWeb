<template>
  <div>
    <button class="w-60 h-14" @click="loadLesson()">{{ name }}</button
    ><button class="w-60 h-14">Editar</button
    ><button class="w-60 h-14" @click="deleteLesson">Remover</button>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
import api from "../../services/api";

export default {
  name: "LessonItem",
  mounted() {},
  data() {
    return {};
  },

  props: { name: String, id: String, index: Number },
  methods: {
    loadLesson() {
      router.push("/lesson/" + this.id);
    },
    deleteLesson() {
      axios
        .delete(`${api}/activitys/${this.id}/`, {
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
