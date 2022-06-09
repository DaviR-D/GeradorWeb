<template>
  <div class="container">
    <input type="file" @change="onFileChange" />
    <li v-for="i in [0, 1, 2, 3]" :key="i">
      <input class="inputAlternatives" type="text" :placeholder="i + 1" v-model="alternatives[i]" />
    </li>
    <input type="text" v-model="rightAnswer" placeholder="Resposta correta" />
    <input type="text" v-model="value" placeholder="Valor da questão" />
    <button @click="save()">Salvar</button>
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

<style>
.container {
  text-align: center;
}

.fileUpload {
  background-color: white;
  width: 625px;
  height: 359px;
}

.p-button.p-component.p-fileupload-choose.fileUpload {
  justify-content: center;
  background-color: white;
  max-width: 625px;
  max-height: 359px;
}

.p-button-label {
  display: none;

}

.p-button-icon.p-button-icon-left.pi.pi-upload::before {
  padding: 0%;
  color: black;
}
</style>
