<template>
  <div class="dialog">
    <strong class="text-white">Deseja realmente deletar esse item?</strong>
    <a @click="this.$parent.showConfirm = false" class="close-button">X</a>
    <button class="delete-button">Deletar</button>
  </div>
</template>
<script>
export default {
  name: "ConfirmMessage",
  methods: {},
};
</script>

<style>
.dialog {
  width: 25%;
  height: 10%;
  text-align: center;
  position: absolute;
  top: auto;
  left: auto;
  margin: auto;
  background-color: rgb(54, 54, 54);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  z-index: 1;
}

.close-button {
  position: absolute;
  top: 1px;
  right: 8px;
  color: #fff;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 100%;
  transition: color 0.3s, border-color 0.3s, background-color 0.3s;
}

.close-button:hover {
  color: #000;
  border-color: #d84e4e;
  background-color: #d84e4e;
}
</style>
