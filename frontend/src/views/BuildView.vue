<template>
  <div>
    <component
      @save="save"
      :is="template()"
      :lessonId="lessonId"
      :questionId="questionId"
    />
  </div>
</template>

<script setup>
import TheBuilder1 from "@/components/Builders/Builder1.vue";
import TheBuilder2 from "@/components/Builders/Builder2.vue";
import TheBuilder3 from "@/components/Builders/Builder3.vue";
import TheBuilder4 from "@/components/Builders/Builder4.vue";
import TheBuilder5 from "@/components/Builders/Builder5.vue";
import TheBuilder6 from "@/components/Builders/Builder6.vue";
import { useRoute } from "vue-router";
import router from "@/router";
import axios from "axios";

const builders = [
  TheBuilder1,
  TheBuilder2,
  TheBuilder3,
  TheBuilder4,
  TheBuilder5,
  TheBuilder6,
];

const route = useRoute();

let lessonId = "";
let questionId = "";

if (route.params.edit == "false") {
  lessonId = route.params.lessonId;
} else {
  questionId = route.params.questionId;
  lessonId = route.params.lessonId;
}

const template = () => {
  return builders[route.params.template - 1];
};

const save = (question) => {
  if (route.params.edit == "false") {
    create(question);
  } else {
    update(question);
  }
};

const create = (question) => {
  axios
    .post("http://localhost:3000/questions/" + lessonId, question, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => {
      console.log(response);
    });
  router.push("/templates/" + lessonId);
};

const update = (question) => {
  question.append("question_id", questionId);
  axios
    .post("http://localhost:3000/questions/" + lessonId + "/update", question, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => {
      console.log(response);
    });
  //router.push("/edit-lesson/" + lessonId);
  router.push("/list-lessons");
};
</script>
