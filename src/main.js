import { createApp } from 'vue';
import App from './App.vue';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import store from './lib/store.js';
import router from './lib/router.js';

const app = createApp(App);
app.use(router).use(store).mount('#app');
