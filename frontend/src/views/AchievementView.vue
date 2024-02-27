<template>
  <div class="h-screen flex items-center justify-center">
    <div class="achievements-container">
      <li
        class="list-none"
        v-for="(achievement, index) in achievements"
        :key="index"
      >
        <achievement-item
          class="flex items-center justify-center gap-2"
          :name="achievement.name"
          :id="achievement.id"
          :image="achievement.url"
          :description="achievement.description"
          :index="index"
        />
      </li>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AchievementItem from "@/components/AchievementItem.vue";

export default {
  components: { AchievementItem },
  name: "AchievementView",
  beforeMount() {
    axios
      .get("http://localhost:3000/users/logged", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .catch((response) => {
        if (!(response.response.status == 401)) {
          this.logado = true;
          return;
        }
      });
  },
  async mounted() {
    this.Busca();
    this.getUserAchievements();
  },
  data() {
    return {
      achievements: [],
      token: localStorage.getItem("token"),
      coins: 0,
      userAchievements: [],
    };
  },

  methods: {
    Busca() {
      axios
        .get("http://localhost:3000/achievements", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          this.achievements = response.data;
        });
    },
    getUserAchievements() {
      axios
        .get("http://localhost:3000/achievements/list", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          this.userAchievements = response.data;
        });
    },
  },
};
</script>
<style scoped>
.achievements-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  gap: 16px;
  width: 40%;
  height: 40%;
}

.achievement-item {
  width: 100%;
  max-width: 100%;
  text-align: center;
  padding: 16px;
  background-color: #374151;
  border-radius: 8px;
}
</style>
