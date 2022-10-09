<template>
  <div>
    {{ name }} <button class="w-60 h-14">Editar</button
    ><button class="w-60 h-14">Remover</button>
  </div>
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
