<template>
  <div class="container">
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
<style scoped>
a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  width: 400px;
  text-align: center;
  border-radius: 8px;
  background: hsla(160, 100%, 37%, 1);
  box-shadow: 0 15px 20px 0 rgb(1, 160, 107);
  color: whitesmoke;
  height: 50px;
}

h1 {
  font-size: 48px;
  font-weight: 500;
  margin: 32px 0px;
}

p {
  font-size: 24px;
  text-align: center;
  width: 80%;
  margin: 28px 0px;
}

.container {
  border-radius: 8px;
  height: 100%;
  width: 50%;
  padding: 24px 12px 24px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container p {
  color: whitesmoke;
}
</style>
