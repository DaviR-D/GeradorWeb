<template>
  <div class="container">
    <input type="file" @change="onFileChange" />

    <input type="text" placeholder="Palavra" v-model="text" />

    <button @click="save()">Salvar</button>
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
        template: "TheTemplate2",
        text: this.text,
        image: this.image,
      };
      this.question = question;
      router.push("/templates");
      //this.index.increment();
    },
  },
};
</script>
