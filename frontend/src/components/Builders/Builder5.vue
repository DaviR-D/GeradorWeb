<template>
  <div class="container">
    <input type="text" class="input" placeholder="Palavra" v-model="word" />
    <li v-for="i in [0, 1, 2, 3]" :key="i">
      {{ i }}
      <input type="file" @change="(e) => onFileChange(e, i)" />
    </li>

    <input
      type="text"
      class="input"
      v-model="value"
      placeholder="Valor da questão"
    />
    <input
      type="text"
      class="input"
      v-model="rightAnswer"
      placeholder="Alternativa correta (número)"
    />
    <button @click="save()">Salvar</button>
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

<style scoped>
input[type="file"] {
  font-size: 18px;
  margin-bottom: 20px;
  margin-right: 50px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

button {
  text-align: center;
  border-radius: 4px !important;
  color: whitesmoke;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  transition: ease 0.75s;
  background: hsla(160, 100%, 37%, 1);
  width: 50%;
}

button:hover {
  opacity: 0.78;
}

.input {
  height: 50px;
  width: 25%;
  font-size: 16px;
}

li {
  margin-bottom: 10px;
}
</style>
