<template>
  <div>
    <h1>
      Parabéns, você finalizou a atividade, acertou {{ questionCount }} questões
      e teve uma pontuação final de {{ score }}
    </h1>
  </div>
</template>
<script setup>
import { useScoreStore } from "@/stores/score";
import { useCounterStore } from "@/stores/counter";

const score = useScoreStore().getScore;
const questionCount = useCounterStore().getCount;
</script>
