<template>
  <div class="container">
    <input type="file" @change="onFileChange" />
    <input
      class="input margin"
      type="text"
      placeholder="Escreva as opções separando às por vírgulas"
    />
    <p>Exemplo: Carro, Moto, Casa, Computador</p>
    <input
      class="input"
      type="text"
      v-model="rightAnswer"
      placeholder="Resposta correta"
    />
    <input
      class="input"
      type="text"
      v-model="value"
      placeholder="Valor da questão"
    />
    <a class="" @click="save()">Salvar</a>
  </div>
</template>

<script>
import { useIndexStore } from "@/stores/index";
import router from "@/router";
import axios from "axios";

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
        template: "TheTemplate1",
        alternatives: this.alternatives,
        image: this.image,
        rightAnswer: this.rightAnswer,
        value: this.value,
      };
      this.question = question;
      axios
        .post(
          "http://localhost:3000/questions/" + this.lessonId,
          { name: "questão" },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
      router.push("/templates/" + this.lessonId);
      //this.index.increment();
    },
  },
};
</script>

<style scoped>
input[type="file"] {
  font-size: 18px;
  margin-bottom: 20px;
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
  height: 8%;
  width: 28%;
  font-size: 16px;
  margin-bottom: 20px;
}

a {
  text-align: center;
  border-radius: 4px !important;
  color: whitesmoke;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  transition: ease 0.75s;
  background: hsla(160, 100%, 37%, 1);
  width: 30%;
}

button:hover {
  opacity: 0.78;
}

.margin {
  margin: 0;
}

p {
  margin-bottom: 20px;
}
</style>
