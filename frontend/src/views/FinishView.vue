<template>
  <div class="container">
    <h1>
      Parabéns, você finalizou a atividade, acertou {{ answerCount }} de
      {{ questionCount }} questões e teve uma pontuação final de {{ score }}
    </h1>
  </div>
</template>
<script setup>
import { useScoreStore } from "@/stores/score";

const store = useScoreStore();

const score = store.getScore;
const answerCount = store.getAnswerCount;
const questionCount = store.getQuestionCount;
</script>
<style>
.container{
  justify-content: center;
}
</style>
