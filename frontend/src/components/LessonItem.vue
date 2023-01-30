<template>
  <div>
    <button class="w-60 h-14" @click="loadLesson()">{{ name }}</button
    ><button class="w-60 h-14">Editar</button
    ><button class="w-60 h-14">Remover</button>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "LessonItem",
  mounted() {},
  data() {
    return {};
  },

  props: { name: String, id: String },
  methods: {
    loadLesson() {
      router.push("/lesson/" + this.id);
    },
  },
};
</script>
