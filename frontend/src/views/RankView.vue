<template>
  <div class="h-screen flex items-center justify-center">
    <div
      class="flex flex-col h-2/3 justify-center gap-2 text-white text-xl items-center border-[1px] p-4 w-1/3 m-auto rounded"
      v-if="Object.keys(ranking).length"
    >
      <li class="list-none" v-for="key in Object.keys(ranking)" :key="key">
        {{ ranking[key]["user_name"] }}: {{ ranking[key]["totalscore"] }}
      </li>
    </div>
    <div v-else>
      <h1>Nenhuma pontuação disponível</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import api from "../../services/api";

export default {
  components: {},
  name: "RankView",
  mounted() {
    this.Busca();
  },
  data() {
    return {
      ranking: {},
      token: localStorage.getItem("token"),
    };
  },

  methods: {
    Busca() {
      axios
        .get(`${api}/scores/grouped`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          this.ranking = response.data;
        });
    },
  },
};
</script>
