import axios from "axios";

const api = axios.create({
  baseURL: "https://api.informaticaecomunidade.me/",
  withCredentials: true,
});

export default api;
