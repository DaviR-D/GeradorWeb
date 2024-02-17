<template>
  <div class="h-screen w-screen flex items-center justify-center text-white">
    <div class="border-[1px] flex flex-col p-4 gap-4 items-center rounded">
      <h1>Imagem de exemplo:</h1>
      <img src="https://i.imgur.com/fSBLcSb.png" class="w-full" alt="" />
      <input
        class="rounded p-2 w-96 text-lg"
        type="file"
        @change="onFileChange"
      />
      <input
        class="rounded p-2 shadow-sm w-96 shadow-slate-50"
        type="text"
        placeholder="Escreva as opções separando às por vírgulas"
        v-model="alternatives"
      />
      <p class="text-lg mb-4">Exemplo: Carro, Moto, Casa, Computador</p>
      <input
        class="rounded p-2 shadow-sm w-96 shadow-slate-50"
        type="text"
        v-model="rightAnswer"
        placeholder="Resposta correta"
      />
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

  props: { lessonId: { type: String }, questionId: { type: String } },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.image = files[0];
    },

    save() {
      let question = new FormData();
      question.append("name", "Questão");
      question.append("template", 1);
      question.append("alternatives", this.alternatives);
      question.append("answer", this.rightAnswer);
      question.append("score", this.value);
      question.append("questionImages", this.image);

      this.question = question;
      this.$emit("save", question);
    },
  },
};
</script>
