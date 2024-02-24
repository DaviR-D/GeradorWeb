<template>
  <div class="centered-grid">
    <div class="thumbnails-grid">
      <div class="thumbnail" v-for="(question, index) in lesson" :key="index">
        <div class="thumbnail-overlay">
          <div class="button-container">
            <button class="edit-button" @click="editQuestion(index)">
              Editar
            </button>
            <button class="delete-button" @click="deleteQuestion(index)">
              Deletar
            </button>
          </div>
        </div>
        <component
          :is="templates[question.template - 1]"
          :data="question"
          class="template-content"
        />
      </div>
    </div>
    <button class="add-button" @click="newQuestion()">+</button>
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
import router from "../router";
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
  methods: {
    deleteQuestion(index) {
      axios.delete("http://localhost:3000/questions/" + this.lesson[index].id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      this.lesson.splice(index, 1);
    },
    newQuestion() {
      router.push("/templates/" + this.route.params.lesson_id);
    },
    editQuestion(index) {
      router.push(
        `/build/true/${this.lesson[index].id}/${this.route.params.lesson_id}/${this.lesson[index].template}`
      );
    },
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
  gap: 25px;
  max-width: 80vw;
}

.thumbnail {
  position: relative;
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
  transition: opacity 0.3s ease-in-out;
}

.thumbnail-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 1; /* Adicionado z-index */
  backdrop-filter: blur(6px);
}

.thumbnail:hover .thumbnail-overlay {
  opacity: 1;
}

.thumbnail:hover .template-content {
  opacity: 0.3;
}

.thumbnail:hover {
  transform: scale(1.1);
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2;
  position: relative;
}

.edit-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}

.delete-button {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}

.delete-button:hover {
  background-color: red;
}

.edit-button:hover {
  background-color: #45a049;
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
