<template>
  <div class="h-screen w-screen flex items-center justify-center text-black">
    <div class="border-[1px] flex flex-col p-4 gap-4 items-center rounded">
      <h1>Imagem de exemplo:</h1>
      <img src="https://i.imgur.com/NvuyhMg.png" class="w-full" alt="" />
      <li class="list-none flex flex-col" v-for="i in [0, 1, 2, 3]" :key="i">
        <div class="flex gap-2">
          <input type="file" @change="(e) => onFileChange(e, i)" />
          <input
            class="rounded p-2 w-96 text-lg"
            type="text"
            :placeholder="i + 1"
            v-model="words[i]"
          />
        </div>
      </li>

      <input
        class="rounded p-2 shadow-sm w-96 shadow-slate-50"
        type="text"
        v-model="value"
        placeholder="Valor da questão"
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

  props: { lessonId: { type: String } },
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
        template: "TheTemplate4",
        words: this.words,
        images: this.images,
        value: this.value,
      };
      this.question = question;
      router.push("/templates/" + this.lessonId);
      //this.index.increment();
    },
  },
};
</script>
