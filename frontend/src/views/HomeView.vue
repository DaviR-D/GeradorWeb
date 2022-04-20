<template>
  <div>
    <component :is="question().template" :data="question()" />
  </div>
</template>

<script setup>
import TheTemplate1 from "@/components/Templates/Template1.vue";
import TheTemplate2 from "@/components/Templates/Template2.vue";
import TheTemplate4 from "@/components/Templates/Template4.vue";
import TheTemplate5 from "@/components/Templates/Template5.vue";
import TheTemplate6 from "@/components/Templates/Template6.vue";
import { useIndexStore } from "@/stores/index";
import router from "../router";
//import axios from "axios";

/*axios
  .get("http://127.0.0.1:8000/getAtividade")
  .then((response) => (this.atividade1 = response.data));*/

const useIndex = useIndexStore();

const atividade = [
  {
    template: TheTemplate1,
    alternatives: ["Cow", "Cat", "Pig", "Bird"],
    rightAnswer: "Pig",
    image:
      "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555927033/shape/mentalfloss/200265153-001.jpg?itok=pt3-Ofki",
    value: 5,
  },
  {
    template: TheTemplate4,
    images: [
      "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/beagle-dog-breeds-680x425.jpg",
      "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555927033/shape/mentalfloss/200265153-001.jpg?itok=pt3-Ofki",
      "https://www.advantagepetcare.com.au/sites/g/files/adhwdz311/files/styles/paragraph_image/public/2020-07/istock-539027929_unrestricted_1110x800.jpg?itok=jiLQgT-c",
      "https://fei-fan-production.s3.amazonaws.com/s3fs-public/160920-irish-2.jpg",
    ],
    words: ["Dog", "Pig", "Cat", "Horse"],
    value: 5,
  },
  {
    template: TheTemplate5,
    images: [
      "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/beagle-dog-breeds-680x425.jpg",
      "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555927033/shape/mentalfloss/200265153-001.jpg?itok=pt3-Ofki",
      "https://www.advantagepetcare.com.au/sites/g/files/adhwdz311/files/styles/paragraph_image/public/2020-07/istock-539027929_unrestricted_1110x800.jpg?itok=jiLQgT-c",
      "https://fei-fan-production.s3.amazonaws.com/s3fs-public/160920-irish-2.jpg",
    ],
    word: "Pig",
    rightAnswer: 1,
    value: 5,
  },
  {
    template: TheTemplate6,
    image:
      "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/beagle-dog-breeds-680x425.jpg",
    rightAnswer: "Dog",
    value: 5,
  },

  {
    template: TheTemplate2,
    text: "Dog",
    image:
      "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/beagle-dog-breeds-680x425.jpg",
  },
];

const question = () => {
  if (useIndex.getIndex < atividade.length) return atividade[useIndex.getIndex];
  else router.push("end");
};
</script>
<style>
button {
  font-size: 100%;
  width: 100%;
  height: 50px;
  background-color: #008cba;
  border-color: transparent;
  margin-bottom: 1%;
  border-radius: 5px;
}
</style>
