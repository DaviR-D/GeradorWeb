<template>
  <div>
    <component :is="templates[question().template - 1]" :data="question()" />
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

var templates = [
  TheTemplate1,
  TheTemplate2,
  TheTemplate3,
  TheTemplate4,
  TheTemplate5,
  TheTemplate6,
];

//var lesson = [];
var lesson = [
  {
    id: "66296dbf-c31c-46d8-be72-e8f5568b9bb1",
    name: "Questão",
    description: null,
    alternatives: "car, pig, dog, cat",
    answer: "car",
    score: 5,
    template: 1,
    activity: "f0e7dc21-f696-4d0a-817d-ba915054ac6e",
    questionImages: [
      {
        id: 3,
        url: "http://localhost:3000/questions/images/e5251ecbfe75de63c5a018b1558e1997-f6f157f.jpg",
      },
    ],
  },
  {
    id: "66296dbf-c31c-46d8-be72-e8f5568b9bb1",
    name: "Questão",
    description: null,
    alternatives: "car, pig, dog, cat",
    answer: "car",
    score: 5,
    template: 1,
    activity: "f0e7dc21-f696-4d0a-817d-ba915054ac6e",
    questionImages: [
      {
        id: 3,
        url: "http://localhost:3000/questions/images/e5251ecbfe75de63c5a018b1558e1997-f6f157f.jpg",
      },
    ],
  },
];

// const loadLesson = async () =>
//   await axios
//     .get(
//       "http://localhost:3000/questions/questions/" + route.params.lesson_id,
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       }
//     )
//     .then((response) => {
//       lesson = response.data;
//     });

// loadLesson();

const question = () => {
  if (useIndex.getIndex < lesson.length) {
    lesson[useIndex.getIndex].rightAnswer = lesson[useIndex.getIndex].answer;
    return lesson[useIndex.getIndex];
  } else router.push("/end");
};
</script>
