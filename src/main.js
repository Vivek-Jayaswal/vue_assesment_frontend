import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "../route.js"; 
import vuetify from "./plugins/vuetify.js";

createApp(App)
  .use(router)
  .use(vuetify)
  .mount("#app");
