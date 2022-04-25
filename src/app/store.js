import { unref } from 'vue';
import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      notifications: [],
      cartContents: [],
    };
  },
  mutations: {
    addNotification(state, notification) {
      if (state.notifications.find((el) => el.key == notification.key)) {
        return;
      }
      state.notifications.push(notification);
      setTimeout(() => {
        state.notifications = state.notifications.filter((item) => {
          return item.key != notification.key;
        });
      }, 5000);
    },
    clearNotifications(state) {
      state.notifications = [];
    },
    addToCart(state, product) {
      state.cartContents.push(unref(product));
    },
    removeFromCart(state, itemId) {
      state.cartContents = state.cartContents.filter((item) => {
        return item.id != itemId;
      });
    },
  },
});
