<template>
   <div id="container">
      <h1 class="title">Explicação:</h1>
      <img :src="data.image" />
      <h1 class="h1Template2">{{ data.text }}</h1>
      <Button class="primary-button mr-2 mb-2" @click="nextQuestion()"
         >Entendido</Button
      >
   </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

export default {
   name: "TheTemplate2",
   data() {
      return {
         index: useIndexStore(),
      };
   },

   props: {
      data: {
         type: Object,
         default: () => ({
            description: "",
            image: "",
            text: "",
         }),
      },
   },
   methods: {
      nextQuestion() {
         this.index.increment();
      },
   },
};
</script>
<style scoped>
#container {
   display: flex;
   flex-direction: column;
}

img {
   max-width: 100%;
   max-height: 100%;
   border-radius: 5px;
   border: 3px solid white;
}
.h1Template2 {
   text-align: center;
   background-color: gray;
   color: white;
   font-weight: bold;
   margin: 0 20% 2% 20%;
   border-radius: 5px;
}
.primary-button {
   margin-bottom: 1%;
   justify-content: center;
   height: 60px;
   font-weight: bold;
   font-size: large;
}
.title {
   color: white;
   text-decoration: underline;
   text-align: center;
}
</style>
