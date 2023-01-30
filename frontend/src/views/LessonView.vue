<template>
  <div>
    <component :is="question().template" :data="question()" />
  </div>
</template>

<script setup>
import TheTemplate1 from "@/components/Templates/Template1.vue";
import TheTemplate2 from "@/components/Templates/Template2.vue";
import TheTemplate3 from "@/components/Templates/Template3.vue";
import TheTemplate4 from "@/components/Templates/Template4.vue";
import TheTemplate5 from "@/components/Templates/Template5.vue";
import TheTemplate6 from "@/components/Templates/Template6.vue";
import { useIndexStore } from "@/stores/index";
import router from "../router";
import { useRoute } from "vue-router";
import axios from "axios";

const useIndex = useIndexStore();

const route = useRoute();

var lesson = [];

const loadLesson = async () =>
  await axios
    .get(
      "http://localhost:3000/questions/questions/" + route.params.lesson_id,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((response) => {
      lesson = response.data[0];
      lesson.template = eval("TheTemplate" + lesson.template);
      console.log(lesson);
    });

loadLesson();

const question = async () => {
  if (useIndex.getIndex < lesson.length) return lesson[useIndex.getIndex];
  else router.push("/end");
};
</script>
