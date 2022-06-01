<template>
  <div class="container">
    <li v-for="i in [0, 1, 2, 3]" :key="i">
      <input type="file" @change="(e) => onFileChange(e, i)" />
      <input type="text" :placeholder="i + 1" v-model="words[i]" />
    </li>

    <input type="text" v-model="value" placeholder="Valor da questão" />
    <button @click="save()">Salvar</button>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";

export default {
  name: "TheBuilder4",
  data() {
    return {
      index: useIndexStore(),
      words: [],
      images: [],
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
        words: this.words,
        images: this.images,
        value: this.value,
      };
      this.question = question;
      //this.index.increment();
    },
  },
};
</script>
