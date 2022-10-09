<template>
  <div class="h-screen w-screen flex items-center justify-center text-white">
    <div class="border-[1px] flex flex-col p-4 gap-4 items-center rounded">
      <h1>Imagem de exemplo:</h1>
      <img src="https://i.imgur.com/8qSh1bg.png" class="w-full" alt="">
      <input
        class="rounded p-2 shadow-sm w-96 shadow-slate-50"
        type="text"
        placeholder="Palavra"
        v-model="word"
      />
      <li class="list-none" v-for="i in [0, 1, 2, 3]" :key="i">
        {{ i }}
        <input type="file" @change="(e) => onFileChange(e, i)" />
      </li>

      <input
        class="rounded p-2 shadow-sm w-96 shadow-slate-50"
        type="text"
        v-model="value"
        placeholder="Valor da questão"
      />
      <input
        class="rounded p-2 shadow-sm w-96 shadow-slate-50"
        type="text"
        v-model="rightAnswer"
        placeholder="Alternativa correta (número)"
      />
      <a
        class="anchor text-xl flex items-center justify-center h-12"
        @click="save()"
        >Salvar</a
      >
    </div>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";
import router from "@/router";

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
      router.push("/templates");
      //this.index.increment();
    },
  },
};
</script>
