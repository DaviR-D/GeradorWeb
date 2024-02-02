<template>
  <div class="achievement-item">
    <div class="achievement-image-container">
      <img :src="image" class="achievement-image" />
    </div>
    <div class="achievement-info">
      <span v-if="verificarAdquirido()" class="achievement-name">
        {{ name }}
      </span>
      <span v-else class="achievement-name acquired">
        {{ name }}: Conquista adquirida
      </span>
      <span class="achievement-description">{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AchievementItem",
  mounted() {},
  data() {
    return {};
  },

  props: {
    name: String,
    id: String,
    image: String,
    description: String,
    index: Number,
  },
  methods: {
    verificarAdquirido() {
      return !this.$parent.userAchievements
        .map((userAchievement) => userAchievement.id)
        .includes(this.id);
    },
  },
};
</script>
<style scoped>
.achievement-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #1f2937;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.achievement-image-container {
  width: 50px;
  height: 50px;
  overflow: hidden;
}

.achievement-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.achievement-info {
  display: flex;
  flex-direction: column;
  color: white;
  flex-grow: 1;
}

.achievement-name {
  font-weight: bold;
}

.achievement-name.acquired {
  color: #00ff62;
}

.achievement-description {
  margin-top: 0.5rem;
  max-height: 3em;
  overflow: hidden;
  text-align: left;
}
</style>
