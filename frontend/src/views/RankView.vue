<template>
  <div class="h-screen flex items-center justify-center">
    <div
      class="flex flex-col h-2/3 justify-center gap-2 text-white text-xl items-center p-4 w-1/3 m-auto rounded"
      v-if="Object.keys(ranking).length"
    >
      <h1>RANKING</h1>
      <table>
        <tr>
          <th>POSIÇÃO</th>
          <th>ALUNO</th>
          <th>PONTUAÇÃO</th>
        </tr>
        <tr v-for="(key, index) in Object.keys(ranking)" :key="key">
          <td class="cell">{{ (index + 1).toString() + "º" }}</td>
          <td class="cell">
            <img src="https://i.imgur.com/d0jdZdk.png" class="user-image" />{{
              ranking[key]["user_name"]
            }}
          </td>
          <td class="cell">{{ ranking[key]["totalscore"] }}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      <h1>Nenhuma pontuação disponível</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
        .get("http://localhost:3000/scores/grouped", {
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
<style>
.cell {
  text-align: center;
  padding: 5px;
}

.user-image {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  object-fit: cover;
  display: inline-block;
  float: left;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 10px;
  font-size: 25px;
}
</style>
