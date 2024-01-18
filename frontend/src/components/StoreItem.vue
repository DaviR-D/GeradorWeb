<template>
  Moedas: {{ coins }}
  <div>
    <img :src="image" />
    <button class="w-60 h-14" @click="buyItem()">
      Comprar {{ name }} {{ price }}
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StoreItem",
  async mounted() {
    this.getCoins();
  },
  data() {
    return { coins: 0 };
  },

  props: {
    name: String,
    id: String,
    price: Number,
    image: String,
    index: Number,
  },
  methods: {
    buyItem() {
      axios
        .post(
          "http://localhost:3000/items/buy",
          { item_id: this.id },
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
          { amount: -this.price },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
    },
    getCoins() {
      axios
        .get("http://localhost:3000/users/coins", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .catch((response) => {
          this.coins = response.data;
          console.log(this.coins);
        });
    },
  },
};
</script>
