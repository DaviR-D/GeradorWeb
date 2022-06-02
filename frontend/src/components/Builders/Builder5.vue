<template>
  <div class="container">
    <input type="text" placeholder="Palavra" v-model="word" />
    <li v-for="i in [0, 1, 2, 3]" :key="i">
      {{ i }}
      <input type="file" @change="(e) => onFileChange(e, i)" />
    </li>

    <input type="text" v-model="value" placeholder="Valor da questão" />
    <input
      type="text"
      v-model="rightAnswer"
      placeholder="Alternativa correta (número)"
    />
    <button @click="save()">Salvar</button>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

export default {
  name: "TheBuilder5",
  data() {
    return {
      index: useIndexStore(),
      word: "",
      images: [],
      rightAnswer: "",
      value: "",
      question: {},
    };
  },

  props: {},
  methods: {
    onFileChange(e, i) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0], i);
    },
    createImage(file, i) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.images[i] = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    save() {
      let question = {
        template: "TheTemplate5",
        word: this.word,
        images: this.images,
        value: this.value,
        rightAnswer: this.rightAnswer,
      };
      this.question = question;
      //this.index.increment();
    },
  },
};
</script>
