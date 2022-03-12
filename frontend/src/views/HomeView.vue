<template>
  <div>
    <component
      :is="atividade[index()].template"
      :alternatives="atividade[index()].alternativas"
      :rightAnswer="atividade[index()].respostaCorreta"
      :image="atividade[index()].imagem"
    />
  </div>
</template>

<script setup>
import QuestionTemplate1 from "@/components/Template1.vue";
import { useIndexStore } from "@/stores/index";

const useIndex = useIndexStore();

const atividade = [
  {
    template: QuestionTemplate1,
    alternativas: ["Dog", "Cat", "Pig", "Bird"],
    respostaCorreta: "Pig",
    imagem:
      "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555927033/shape/mentalfloss/200265153-001.jpg?itok=pt3-Ofki",
  },
  {
    template: QuestionTemplate1,
    alternativas: ["Dog", "Bird", "Horse", "Fish"],
    respostaCorreta: "Dog",
    imagem:
      "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/beagle-dog-breeds-680x425.jpg",
  },
];

const index = () => {
  return useIndex.getIndex;
};
</script>
