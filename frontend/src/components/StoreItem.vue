<template>
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
  async mounted() {},
  data() {
    return {};
  },

  props: {
    name: String,
    id: String,
    price: Number,
    image: String,
    index: Number,
    userItems: Array,
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
      }
    },
  },
};
</script>
