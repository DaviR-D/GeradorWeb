<template>
  <div>
    <component :is="templates[question().template - 1]" :data="question()" />
  </div>
</template>

<script>
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

export default {
  name: "LessonView",
  async mounted() {
    await axios
      .get(
        "http://localhost:3000/questions/questions/" +
          this.route.params.lesson_id,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        this.lesson = response.data;
        console.log(this.lesson);
      });
  },
  data() {
    return {
      useIndex: useIndexStore(),
      route: useRoute(),
      templates: [
        TheTemplate1,
        TheTemplate2,
        TheTemplate3,
        TheTemplate4,
        TheTemplate5,
        TheTemplate6,
      ],
      lesson: [
        {
          id: "",
          name: "",
          description: null,
          alternatives: "",
          answer: "",
          score: 0,
          template: 0,
          activity: "",
          questionImages: [
            {
              id: 0,
              url: "",
            },
          ],
        },
      ],
    };
  },

  props: {},
  methods: {
    question() {
      if (this.useIndex.getIndex < this.lesson.length) {
        this.lesson[this.useIndex.getIndex].rightAnswer =
          this.lesson[this.useIndex.getIndex].answer;
        this.lesson[this.useIndex.getIndex].value =
          this.lesson[this.useIndex.getIndex].score;
        return this.lesson[this.useIndex.getIndex];
      } else router.push("/end");
    },
  },
};
</script>
