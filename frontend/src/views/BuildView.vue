<template>
  <div>
    <component :is="TheBuilder1" />
  </div>
</template>

<script setup>
import TheBuilder1 from "@/components/Builders/Builder1.vue";
//import { useIndexStore } from "@/stores/index";
//import router from "../router";

//const useIndex = useIndexStore();

/*const build = () => {
  return eval("TheBuilder" + useIndex.getIndex);
};*/
</script>
