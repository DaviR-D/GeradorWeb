<template>
  <div>
    <component :is="TheBuilder1" />
  </div>
</template>

<script setup>
import TheBuilder1 from "@/components/Builders/Builder1.vue";
import TheBuilder2 from "@/components/Builders/Builder2.vue";
import TheBuilder3 from "@/components/Builders/Builder3.vue";
import TheBuilder4 from "@/components/Builders/Builder4.vue";
import TheBuilder5 from "@/components/Builders/Builder5.vue";
import TheBuilder6 from "@/components/Builders/Builder6.vue";
//import { useIndexStore } from "@/stores/index";
//import router from "../router";

//const useIndex = useIndexStore();

/*const build = () => {
  return eval("TheBuilder" + useIndex.getIndex);
};*/
</script>
