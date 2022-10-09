<template>
  <div class=" ">
    <input type="file" @change="onFileChange" />
    <input
      class="input margin"
      type="text"
      placeholder="Escreva as opções separando às por vírgulas"
    />
    <p>Exemplo: Carro, Moto, Casa, Computador</p>
    <input
      class="input"
      type="text"
      v-model="rightAnswer"
      placeholder="Resposta correta"
    />
    <input
      class="input"
      type="text"
      v-model="value"
      placeholder="Valor da questão"
    />
    <a class="" @click="save()">Salvar</a>
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
