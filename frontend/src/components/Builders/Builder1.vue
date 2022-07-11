<template>
  <div class="container">
    <li>
      <input type="file" @change="onFileChange" />
    </li>
    <li class="liInputAlternatives" v-for="i in [0, 1, 2, 3]" :key="i">
      <input class="inputAlternatives" type="text" :placeholder="i + 1" v-model="alternatives[i]" />
    </li>
    <input class="inputRespostaCorreta" type="text" v-model="rightAnswer" placeholder="Resposta correta" />
    <input class="inputValorQuestao" type="text" v-model="value" placeholder="Valor da questão" />
    <Button class="primary-button mr-2 mb-2" @click="save()">Salvar</Button>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";
import router from "@/router";

export default {
  name: "TheBuilder1",
  data() {
    return {
      index: useIndexStore(),
      alternatives: [],
      image: "",
      rightAnswer: "",
      value: "",
      question: {},
    };
  },

  props: {},
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    save() {
      let question = {
        template: "TheTemplate1",
        alternatives: this.alternatives,
        image: this.image,
        rightAnswer: this.rightAnswer,
        value: this.value,
      };
      this.question = question;
      router.push("/templates");
      //this.index.increment();
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}
.liInputAlternatives{
  margin-top: 0.2%;
}
.inputAlternatives{
max-height: 3rem;



}
.inputRespostaCorreta{
  margin-right: 0.3%;
  margin-top: 0.4%;
}

.primary-button {
   margin-top: 1%;
   justify-content: center;
   height: 60px;
   font-weight: bold;
   font-size: large;
}
</style>
