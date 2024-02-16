<template>
  <div class="h-screen w-screen flex items-center justify-center text-white">
    <div class="border-[1px] flex flex-col p-4 gap-4 items-center rounded">
      <h1>Imagem de exemplo:</h1>
      <img src="https://i.imgur.com/8qSh1bg.png" class="w-full" alt="" />
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
import axios from "axios";

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

  props: { lessonId: { type: String }, questionId: { type: String } },
  methods: {
    onFileChange(e, i) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.images[i] = files[0];
    },
    save() {
      let question = new FormData();
      question.append("name", "Questão");
      question.append("template", 5);
      question.append("description", this.word);
      question.append("answer", this.rightAnswer);
      question.append("score", this.value);
      this.images.forEach((image) => {
        question.append("questionImages", image);
      });

      this.question = question;
      console.log(question);
      axios
        .post("http://localhost:3000/questions/" + this.lessonId, question, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response);
        });
      router.push("/templates/" + this.lessonId);
    },
  },
};
</script>
