<template>
  <div>
    <component :is="question().template" :data="question()" />
  </div>
</template>

<script setup>
import TheTemplate1 from "@/components/Templates/Template1.vue";
import TheTemplate2 from "@/components/Templates/Template2.vue";
import TheTemplate3 from "@/components/Templates/Template3.vue";
import TheTemplate4 from "@/components/Templates/Template4.vue";
import TheTemplate5 from "@/components/Templates/Template5.vue";
import TheTemplate6 from "@/components/Templates/Template6.vue";
import { useIndexStore } from "@/stores/index";
import router from "../router";
//import axios from "axios";

const useIndex = useIndexStore();

/*const templates = {
  1: () => {
    /*question[image] = getImage(1)[image];
    question[answer] = getImage(1)[answer];
  },
  2: () => {
    return 2;
  },
  3: () => {
    return 3;
  },
  4: () => {
    return 4;
  },
  5: () => {
    return 5;
  },
  6: () => {
    return 6;
  },
};

const generator = (numQuest) => {
  let atividade = [];
  for (let i = 0; i < numQuest; i++)
    atividade.push(templates[Math.floor(Math.random() * 6) + 1]());
  return atividade;
};
*/

// const atividade = [
//   {
//     template: TheTemplate1,
//     alternatives: ["Cow", "Cat", "Pig", "Bird"],
//     rightAnswer: "Pig",
//     image: "https://i.imgur.com/e7yx8QO.png",
//     value: 1,
//   },
//   {
//     template: TheTemplate2,
//     text: "Dog",
//     image: "https://i.imgur.com/yfg3vHp.png",
//   },
  // {
  //   template: TheTemplate3,
  //   images: [
  //     "https://i.imgur.com/yfg3vHp.png",
  //     "https://i.imgur.com/e7yx8QO.png",
  //     "https://i.imgur.com/RXHgMb3.png",
  //     "https://i.imgur.com/vPbaA7i.png",
  //   ],
  //   words: ["Dog", "Pig", "Cat", "Horse"],
  // },
//   {
//     template: TheTemplate4,
//     images: [
//       "https://i.imgur.com/yfg3vHp.png",
//       "https://i.imgur.com/e7yx8QO.png",
//       "https://i.imgur.com/RXHgMb3.png",
//       "https://i.imgur.com/vPbaA7i.png",
//     ],
//     words: ["Dog", "Pig", "Cat", "Horse"],
//     value: 1,
//   },
//   {
//     template: TheTemplate5,
//     images: [
//       "https://i.imgur.com/yfg3vHp.png",
//       "https://i.imgur.com/e7yx8QO.png",
//       "https://i.imgur.com/RXHgMb3.png",
//       "https://i.imgur.com/vPbaA7i.png",
//     ],
//     word: "Pig",
//     rightAnswer: 1,
//     value: 1,
//   },
//   {
//     template: TheTemplate6,
//     image: "https://i.imgur.com/yfg3vHp.png",
//     rightAnswer: "Dog",
//     value: 1,
//   },
//];

const atividade = [
  {
    template: TheTemplate3,
    images: [
      "https://i.imgur.com/YlLskJx.jpeg",
      "https://i.imgur.com/9piFhH2.png",
      "https://i.imgur.com/zcYCPz0.jpeg",
      "https://i.imgur.com/cqEUQZS.png",
    ],
    words: ["Red", "Green", "Blue", "Yellow"],
  },
   {
    template: TheTemplate2,
    text: "Red",
    image: "https://i.imgur.com/YlLskJx.jpeg",
  },
  {
    template: TheTemplate1,
    alternatives: ["Red", "Pink", "Orange", "Yellow"],
    rightAnswer: "Red",
    image: "https://i.imgur.com/AUzj2bD.png",
    value: 1,
  },
  {
    template: TheTemplate2,
    text: "Green",
    image: "https://i.imgur.com/9piFhH2.png",
  },
  {
    template: TheTemplate6,
    image: "https://i.imgur.com/hzwkILL.png",
    rightAnswer: "green",
    value: 1,
  },
  {
    template: TheTemplate2,
    text: "Blue",
    image: "https://i.imgur.com/zcYCPz0.jpeg",
  },
  {
    template: TheTemplate5,
    images: [
      "https://i.imgur.com/zcYCPz0.jpeg",
      "https://i.imgur.com/hzwkILL.png",
      "https://i.imgur.com/xYCsfOp.png",
      "https://i.imgur.com/AUzj2bD.png",
    ],
    word: "Blue",
    rightAnswer: 0,
    value: 1,
  },
  {
    template: TheTemplate2,
    text: "Orange",
    image: "https://i.imgur.com/xYCsfOp.png",
  },
  {
    template: TheTemplate6,
    image: "https://i.imgur.com/xYCsfOp.png",
    rightAnswer: "Orange",
    value: 1,
  },
  {
    template: TheTemplate4,
    images: [
      "https://i.imgur.com/AUzj2bD.png",
      "https://i.imgur.com/cqEUQZS.png",
      "https://i.imgur.com/hzwkILL.png",
      "https://i.imgur.com/zcYCPz0.jpeg",
    ],
    words: ["Red", "Yellow", "Green", "Blue"],
    value: 1,
  },
  {
    template: TheTemplate3,
    images: [
      "https://i.imgur.com/yfg3vHp.png",
      "https://i.imgur.com/e7yx8QO.png",
      "https://i.imgur.com/RXHgMb3.png",
      "https://i.imgur.com/vPbaA7i.png",
    ],
    words: ["Dog", "Pig", "Cat", "Horse"],
  },
  {
    template: TheTemplate2,
    text: "Pig",
    image: "https://i.imgur.com/e7yx8QO.png",
  },
  {
    template: TheTemplate1,
    alternatives: ["Cow", "Cat", "Pig", "Bird"],
    rightAnswer: "Pig",
    image: "https://i.imgur.com/e7yx8QO.png",
    value: 1,
  },
  {
    template: TheTemplate5,
    images: [
      "https://i.imgur.com/yfg3vHp.png",
      "https://i.imgur.com/e7yx8QO.png",
      "https://i.imgur.com/RXHgMb3.png",
      "https://i.imgur.com/vPbaA7i.png",
    ],
    word: "Pig",
    rightAnswer: 1,
    value: 1,
  },
  {
    template: TheTemplate2,
    text: "Dog",
    image: "https://i.imgur.com/yfg3vHp.png",
  },
  {
    template: TheTemplate6,
    image: "https://i.imgur.com/yfg3vHp.png",
    rightAnswer: "Dog",
    value: 1,
  },
  {
    template: TheTemplate2,
    text: "Cat",
    image: "https://i.imgur.com/RXHgMb3.png",
  },
  {
    template: TheTemplate5,
    images: [
      "https://i.imgur.com/yfg3vHp.png",
      "https://i.imgur.com/e7yx8QO.png",
      "https://i.imgur.com/RXHgMb3.png",
      "https://i.imgur.com/vPbaA7i.png",
    ],
    word: "Cat",
    rightAnswer: 2,
    value: 1,
  },
  {
    template: TheTemplate2,
    text: "Horse",
    image: "https://i.imgur.com/vPbaA7i.png",
  },
  {
    template: TheTemplate1,
    alternatives: ["Cat", "Horse", "Pig", "Dog"],
    rightAnswer: "Horse",
    image: "https://i.imgur.com/vPbaA7i.png",
    value: 1,
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
