import axios from "axios";
axios.defaults.withCredentials = true;

import { createApp } from "vue";
import App from "./App.vue";
import router from "../route.js";
import "./style.css";
import vuetify from "./plugins/vuetify.js";

createApp(App)
  .use(router)
  .use(vuetify)
  .mount("#app");
