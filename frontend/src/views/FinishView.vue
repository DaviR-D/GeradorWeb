<template>
  <div
    class="flex flex-col h-screen items-center justify-center text-white font-bold"
  >
    <img src="../assets/100daysui_100icon.png" class="w-56 h-40" alt="Troféu" />
    <h1 class="text-5xl">Parabéns</h1>
    <p v-if="questionCount > 0" class="text-2xl mb-8">
      Você finalizou a atividade, acertou
      <span class="text-3xl text-green-400">{{ answerCount }}</span> de
      <span class="text-3xl text-green-400">{{ questionCount }}</span> questões
      e teve uma pontuação final de
      <span class="text-3xl text-green-400">{{ score }}</span>
      <span style="text-align: center; display: block">
        +{{ coins }} Moedas
      </span>
    </p>

    <p v-else class="text-2xl mb-8">Você finalizou esta aula!</p>

    <a class="anchor text-xl flex items-center justify-center h-12" href="/"
      >Voltar</a
    >
  </div>
</template>
<script setup>
import { useScoreStore } from "@/stores/score";
import { useToast } from "vue-toast-notification";
import { useRoute } from "vue-router";
import axios from "axios";
const route = useRoute();

const store = useScoreStore();

const $toast = useToast();

const score = store.getScore;
const coins = Math.round(score / 4);
const answerCount = store.getAnswerCount;
const questionCount = store.getQuestionCount;

const notification = (text) => {
  $toast.success(text);
};

const iniciante = () => {
  axios.post(
    "http://localhost:3000/achievements/get",
    { achievement_id: "123b9805-a479-4e61-bac0-47554fca010d" },
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );
  notification("Conquista adquirida: Iniciante");
};

const competidor = () => {
  axios
    .get("http://localhost:3000/scores/grouped", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => {
      if (response.data[0].iscurrentuser == 1) {
        axios.post(
          "http://localhost:3000/achievements/get",
          { achievement_id: "30710fbd-8c0a-4e25-b340-0e9578f4e340" },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        notification("Conquista adquirida: Competidor");
      }
    });
};

const getUserAchievements = async () => {
  await axios
    .get("http://localhost:3000/achievements/list", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => {
      checkAchievements(response.data);
    });
};

const checkAchievements = async (userAchievements) => {
  let achievementsNames = [];
  userAchievements.forEach((achievement) => {
    achievementsNames.push(achievement.name);
  });
  if (!achievementsNames.includes("Iniciante")) iniciante();
  if (!achievementsNames.includes("Competidor")) competidor();
};

if (questionCount > 0) {
  axios
    .post(
      "http://localhost:3000/scores/" + route.params.lessonId,
      { score: score },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
    .then((response) => {
      console.log(response);
    });

  axios
    .post(
      "http://localhost:3000/users/coins",
      { amount: coins },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
    .then((response) => {
      console.log(response);
    });
}

getUserAchievements();
</script>
