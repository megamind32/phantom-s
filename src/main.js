import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

import "./bootstrap.css";
import "./bootstrap.js";
import "./style.css";

createApp(App).use(router).mount("#app");
