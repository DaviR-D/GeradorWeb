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
import InputText from "primevue/inputtext";
import Password from "primevue/password";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(PrimeVue);

app.component('Button', Button);
app.component('FileUpload', FileUpload);
app.component('InputText', InputText);
app.component('Password', Password);


app.mount("#app");
