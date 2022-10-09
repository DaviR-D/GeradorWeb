<template>
  <div
    class="flex flex-col h-screen items-center justify-center text-white font-bold"
  >
    <img src="../assets/100daysui_100icon.png" class="w-56 h-40" alt="Troféu" />
    <h1 class="text-5xl">Parabéns</h1>
    <p class="text-2xl mb-8">
      Você finalizou a atividade, acertou
      <span class="text-3xl text-green-400">{{ answerCount }}</span> de
      <span class="text-3xl text-green-400">{{ questionCount }}</span> questões
      e teve uma pontuação final de
      <span class="text-3xl text-green-400">{{ score }}</span>
    </p>

    <a class="anchor text-xl flex items-center justify-center h-12" href="/"
      >Voltar</a
    >
  </div>
</template>
<script setup>
import { useScoreStore } from "@/stores/score";

const store = useScoreStore();

const score = store.getScore;
const answerCount = store.getAnswerCount;
const questionCount = store.getQuestionCount;
</script>
