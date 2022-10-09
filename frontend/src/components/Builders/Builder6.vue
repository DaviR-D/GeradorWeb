<template>
  <div>
    <input type="file" @change="onFileChange" />
    <input type="text" placeholder="Palavra" v-model="rightAnswer" />
    <input type="text" v-model="value" placeholder="Valor da questão" />
    <button @click="save()">Salvar</button>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";
import router from "@/router";

export default {
  name: "TheBuilder6",
  data() {
    return {
      index: useIndexStore(),
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
        template: "TheTemplate6",
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
