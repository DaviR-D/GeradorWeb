<template>
  <div>{{ name }} <button>Editar</button><button>Remover</button></div>
</template>

<script>
export default {
  name: "LessonItem",
  mounted() {},
  data() {
    return {};
  },

  props: { name: String },
  methods: {},
};
</script>
