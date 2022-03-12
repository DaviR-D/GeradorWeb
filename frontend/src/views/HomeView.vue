<template>
  <div>
    <component :is="question().template" :data="question()" />
  </div>
</template>

<script setup>
import QuestionTemplate1 from "@/components/Template1.vue";
import { useIndexStore } from "@/stores/index";

const useIndex = useIndexStore();

const atividade = [
  {
    template: eval("QuestionTemplate1"),
    alternatives: ["Cow", "Cat", "Pig", "Bird"],
    rightAnswer: "Pig",
    image:
      "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555927033/shape/mentalfloss/200265153-001.jpg?itok=pt3-Ofki",
  },
  {
    template: eval("QuestionTemplate1"),
    alternatives: ["Dog", "Bird", "Horse", "Fish"],
    rightAnswer: "Dog",
    image:
      "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/beagle-dog-breeds-680x425.jpg",
  },
];

const question = () => {
  return atividade[useIndex.getIndex];
};
</script>
