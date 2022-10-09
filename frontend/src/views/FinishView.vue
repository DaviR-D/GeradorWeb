<template>
  <div class=" ">
    <img src="../assets/100daysui_100icon.png" alt="Troféu" />
    <h1>Parabéns</h1>
    <p>
      Você finalizou a atividade, acertou {{ answerCount }} de
      {{ questionCount }} questões e teve uma pontuação final de {{ score }}
    </p>

    <a href="/">Voltar</a>
  </div>
</template>
<script setup>
import { useScoreStore } from "@/stores/score";

const store = useScoreStore();

const score = store.getScore;
const answerCount = store.getAnswerCount;
const questionCount = store.getQuestionCount;
</script>
