<template>
  <div class="h-screen flex items-center justify-center">
    <div
      class="flex flex-col h-2/3 justify-center gap-2 text-white text-xl items-center border-[1px] p-4 w-1/3 m-auto rounded"
    >
      <li class="list-none" v-for="(item, index) in items" :key="index">
        <store-item
          class="flex items-center justify-center gap-2"
          :name="item.name"
          :id="item.id"
          :price="item.price"
          :image="item.url"
          :index="index"
        />
      </li>
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
  mounted() {
    this.Busca();
  },
  data() {
    return {
      items: [],
      token: localStorage.getItem("token"),
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
  },
};
</script>
