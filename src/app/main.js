import { createApp } from 'vue';
import store from './store';
import router from './router';
import App from './app.vue';
/*
import ErrorAlert from './components/error-alert.vue';
*/

const app = createApp(App);
/*
app.config.errorHandler = () => {
  console.debug('error in main.js');
};
app.component('ErrorAlert', ErrorAlert);
*/
app.use(router);
app.use(store);
app.mount('#app');
