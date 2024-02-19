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
export default {
  name: "TheBuilder4",
  data() {
    return {
      words: [],
      images: [],
      value: "",
    };
  },

  methods: {
    onFileChange(e, i) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.images[i] = files[0];
    },
    save() {
      let question = new FormData();
      question.append("name", "Questão");
      question.append("template", 4);
      question.append("description", this.words.join(", "));
      question.append("score", this.value);
      this.images.forEach((image) => {
        question.append("questionImages", image);
      });

      this.$emit("save", question);
    },
  },
};
</script>
