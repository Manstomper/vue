import { createApp } from 'vue';
import store from './store';
import router from './router';
import App from './app.vue';

const app = createApp(App);
app.config.errorHandler = (err) => {
  console.error(err);
};
app.use(router);
app.use(store);
app.mount('#app');
