<template>
  <div class="h-screen flex items-center justify-center">
    <div
      class="flex flex-col h-2/3 justify-center gap-4 text-white text-xl items-center p-4 w-1/3 m-auto rounded"
    >
      <p class="text-2xl font-bold mb-4">Moedas: {{ coins }}</p>
      <ul class="list-none">
        <li v-for="(item, index) in items" :key="index">
          <store-item
            class="flex items-center justify-start gap-8 bg-gray-800 p-4 rounded mb-4"
            :name="item.name"
            :id="item.id"
            :price="item.price"
            :image="item.url"
            :index="index"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StoreItem from "@/components/StoreItem.vue";

export default {
  components: { StoreItem },
  name: "StoreView",
  beforeMount() {
    axios
      .get("http://localhost:3000/users/logged", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .catch((response) => {
        if (!(response.response.status == 401)) {
          this.logado = true;
          return;
        }
      });
  },
  async mounted() {
    this.Busca();
    this.getCoins();
    this.getUserItems();
  },
  data() {
    return {
      items: [],
      token: localStorage.getItem("token"),
      coins: 0,
      userItems: [],
    };
  },

  methods: {
    Busca() {
      axios
        .get("http://localhost:3000/items", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          this.items = response.data;
        });
    },
    getCoins() {
      axios
        .get("http://localhost:3000/users/coins", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.coins = response.data.user_coins;
        });
    },
    getUserItems() {
      axios
        .get("http://localhost:3000/items/list", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          this.userItems = response.data;
        });
    },
  },
};
</script>
