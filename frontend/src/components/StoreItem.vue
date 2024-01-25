<template>
  <div>
    <img :src="image" />
    <button v-if="verificarComprado()" class="w-60 h-14" @click="buyItem()">
      Comprar {{ name }} {{ price }}
    </button>
    <span v-else>Item adquirido</span>
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
