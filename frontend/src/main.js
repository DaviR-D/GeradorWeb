import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";




import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import FileUpload from "primevue/fileupload"; //input Upload
import Button from "primevue/button"; // button

const app = createApp(App);
const api = axios.create({ baseURL: "http://127.0.0.1:8000" });

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios, api);
app.use(PrimeVue);

app.component('Button', Button);
app.component('FileUpload', FileUpload);



app.mount("#app");
