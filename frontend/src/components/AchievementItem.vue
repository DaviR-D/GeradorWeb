<template>
  <div>
    <img :src="image" />
    <span v-if="verificarAdquirido()">
      {{ name }}
    </span>
    <span v-else> {{ name }}: Conquista adquirida</span>
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
