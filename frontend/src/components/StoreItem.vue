<template>
  <div>
    <img :src="image" />
    <button class="w-60 h-14" @click="buyItem()">Comprar {{ name }}</button>
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
    },
  },
};
</script>
