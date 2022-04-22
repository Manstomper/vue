import { unref } from 'vue';
import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      cartContents: [],
    };
  },
  mutations: {
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
