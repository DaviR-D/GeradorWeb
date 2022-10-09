<template>
  <div class="h-screen w-screen flex items-center justify-center text-white">
    <div class="border-[1px] flex flex-col p-4 gap-4 items-center rounded">
      <h1>Imagem de exemplo:</h1>
      <img src="https://i.imgur.com/27qOslm.png" class="w-full" alt="" />
      <ol>
        <li v-for="i in [0, 1, 2, 3]" :key="i">
          <input type="file" @change="(e) => onFileChange(e, i)" />
          <input type="text" :placeholder="i + 1" v-model="words[i]" />
        </li>
      </ol>
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
  name: "TheBuilder3",
  data() {
    return {
      index: useIndexStore(),
      words: [],
      images: [],
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
        template: "TheTemplate3",
        words: this.words,
        images: this.images,
      };
      this.question = question;
      router.push("/templates");
      //this.index.increment();
    },
  },
};
</script>
