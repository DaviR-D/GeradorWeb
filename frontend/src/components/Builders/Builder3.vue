<template>
  <div class="container">
    <ol>
      <li v-for="i in [0, 1, 2, 3]" :key="i">
        <input type="file" @change="(e) => onFileChange(e, i)" />
        <input
          type="text"
          :placeholder="i + 1"
          v-model="words[i]"
          class="input"
        />
      </li>
    </ol>

    <button @click="save()">Salvar</button>
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

<style>
input[type="file"] {
  font-size: 18px;
  margin-bottom: 20px;
  margin-right: 50px;
}

ol {
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.input {
  height: 80%;
  width: 25%;
  font-size: 18px;
  margin-bottom: 20px;
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
</style>
