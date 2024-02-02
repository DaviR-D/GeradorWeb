<template>
  <div class="flex items-center justify-between bg-gray-800 p-4 rounded mb-4">
    <div class="flex items-center gap-8">
      <img :src="image" class="w-36 h-36 rounded" />
      <div class="flex flex-col">
        <p class="text-xl font-bold">{{ name }}</p>
        <p class="text-gray-400">{{ price }} moedas</p>
      </div>
    </div>
    <div>
      <button v-if="verificarComprado()" class="btn-comprar" @click="buyItem()">
        Comprar
      </button>
      <span v-else class="text-green-500 font-bold">Item adquirido</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StoreItem",
  mounted() {},
  data() {
    return {};
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
      if (this.$parent.coins >= this.price) {
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
        this.$parent.coins = this.$parent.coins - this.price;
        this.$parent.userItems.push(this);
      }
    },
    verificarComprado() {
      return !this.$parent.userItems
        .map((userItem) => userItem.id)
        .includes(this.id);
    },
  },
};
</script>
<style scoped>
.btn-comprar {
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-comprar:hover {
  background-color: #45a049;
}
</style>
