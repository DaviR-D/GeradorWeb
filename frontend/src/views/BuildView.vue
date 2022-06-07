<template>
  <div>
    <component :is="template()" />
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

const route = useRoute();

const template = () => {
  return eval("TheBuilder" + route.params.template);
};
</script>
