import { createApp } from 'vue';
import { store } from './store';
import router from './router';
import app from './app.vue';

const shop = createApp(app)

shop.config.errorHandler = (err) => {
  console.debug(err);
};

shop.use(router);
shop.use(store)
shop.mount('#app');
