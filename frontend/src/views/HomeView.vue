<template>
  <div>
    <component :is="question().template" :data="question()" />
  </div>
</template>

<script setup>
import QuestionTemplate1 from "@/components/Templates/Template1.vue";
import QuestionTemplate6 from "@/components/Templates/Template6.vue";
import TheTemplate2 from "@/components/Templates/Template2.vue";
import { useIndexStore } from "@/stores/index";
import axios from "axios";

/*axios
  .get("http://127.0.0.1:8000/getAtividade")
  .then((response) => (this.atividade1 = response.data));*/

const useIndex = useIndexStore();

const atividade = [
  {
    template: QuestionTemplate6,
    image:
      "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/beagle-dog-breeds-680x425.jpg",
    rightAnswer: "Dog",
  },
  {
    template: TheTemplate2,
    text: "Dog",
    image:
      "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/beagle-dog-breeds-680x425.jpg",
  },
  {
    template: eval("QuestionTemplate1"),
    alternatives: ["Cow", "Cat", "Pig", "Bird"],
    rightAnswer: "Pig",
    image:
      "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555927033/shape/mentalfloss/200265153-001.jpg?itok=pt3-Ofki",
  },
];

const question = () => {
  return atividade[useIndex.getIndex];
};
</script>
