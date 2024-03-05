<template>
  <div class="h-screen flex items-center justify-center">
    <div
      class="flex flex-col h-2/3 justify-center gap-2 text-white text-xl items-center p-4 w-1/3 m-auto rounded bg-gray-800"
      v-if="Object.keys(ranking).length"
    >
      <h1 class="text-3xl font-semibold mb-4">RANKING</h1>
      <table class="w-full table-auto">
        <thead>
          <tr>
            <th class="py-2">POSIÇÃO</th>
            <th class="py-2">ALUNO</th>
            <th class="py-2">PONTUAÇÃO</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(key, index) in Object.keys(ranking)" :key="key">
            <td
              :class="{
                gold: index === 0,
                silver: index === 1,
                bronze: index === 2,
              }"
              class="cell"
            >
              {{ (index + 1).toString() + "º" }}
            </td>
            <td class="cell flex items-center">
              <img
                src="https://i.imgur.com/d0jdZdk.png"
                class="user-image mr-2"
              />
              {{ ranking[key]["user_name"] }}
            </td>
            <td class="cell">{{ ranking[key]["totalscore"] }}</td>
          </tr>
        </tbody>
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

<style scoped>
.user-image {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.cell {
  border: 1px solid #4a5568;
  padding: 8px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 8px;
}

th {
  background-color: #2d3748;
  color: #cbd5e0;
}

.gold {
  color: gold;
}

.silver {
  color: silver;
}

.bronze {
  color: #cd7f32;
}
</style>
