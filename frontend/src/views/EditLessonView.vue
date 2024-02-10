<template>
  <div class="centered-grid">
    <div class="thumbnails-grid">
      <div class="thumbnail" v-for="(lessonItem, index) in lesson" :key="index">
        <component
          :is="templates[lessonItem.template - 1]"
          :data="lessonItem"
          class="template-content"
        />
      </div>
    </div>
    <button class="add-button">+</button>
  </div>
</template>

<script>
import TheTemplate1 from "@/components/Templates/Template1.vue";
import TheTemplate2 from "@/components/Templates/Template2.vue";
import TheTemplate3 from "@/components/Templates/Template3.vue";
import TheTemplate4 from "@/components/Templates/Template4.vue";
import TheTemplate5 from "@/components/Templates/Template5.vue";
import TheTemplate6 from "@/components/Templates/Template6.vue";
import { useRoute } from "vue-router";
import axios from "axios";

export default {
  name: "EditLessonView",
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
};
</script>

<style scoped>
.centered-grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.thumbnails-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
  gap: 16px;
  max-width: 80vw;
}

.thumbnail {
  width: 23vw;
  height: 23vw;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.template-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
  scale: 0.45;
}

.thumbnail:hover {
  transform: scale(1.1);
}

.add-button {
  margin-top: 16px;
  padding: 10px;
  font-size: 2rem;
  background-color: transparent;
  color: green;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
