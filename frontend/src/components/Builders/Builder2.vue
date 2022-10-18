<template>
  <div class="h-screen w-screen flex items-center justify-center text-white">
    <div class="border-[1px] flex flex-col p-4 gap-4 items-center rounded">
      <h1>Imagem de exemplo:</h1>
      <img src="https://i.imgur.com/Evzg5OW.png" class="w-full" alt="" />
      <input
        class="rounded p-2 w-96 text-lg"
        type="file"
        @change="onFileChange"
      />
      <input
        class="rounded p-2 shadow-sm w-96 shadow-slate-50"
        type="text"
        placeholder="Digite a palavra correta"
        v-model="text"
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
  name: "TheBuilder2",
  data() {
    return {
      index: useIndexStore(),
      text: "",
      image: "",
      question: {},
    };
  },

  props: { lessonId: { type: String } },
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
        template: "TheTemplate2",
        text: this.text,
        image: this.image,
      };
      this.question = question;
      router.push("/templates/" + this.lessonId);
      //this.index.increment();
    },
  },
};
</script>
