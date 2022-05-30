<template>
  <div class="container">
    <input type="file" @change="onFileChange" />
    <li v-for="i in [0, 1, 2, 3]" :key="i">
      <input type="text" :placeholder="i + 1" v-model="alternatives[i]" />
    </li>
    <input type="text" v-model="rightAnswer" placeholder="Resposta correta" />
    <input type="text" v-model="value" placeholder="Valor da questão" />
    <button @click="save()">Salvar</button>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

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
        alternatives: this.alternatives,
        image: this.image,
        rightAnswer: this.rightAnswer,
        value: this.value,
      };
      this.question = question;
      //this.index.increment();
    },
  },
};
</script>
