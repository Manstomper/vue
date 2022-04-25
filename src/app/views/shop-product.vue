<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { usePostQuery } from '../use/query';

const route = useRoute();
const store = useStore();
const product = usePostQuery('/product/' + route.params.id);
const state = reactive({
  inCart: store.state.cartContents.find((item) => item.id == route.params.id),
});

function addToCart() {
  store.commit('addToCart', product);
  state.inCart = true;
}
</script>

<template>
  <template v-if="product">
    <h3>Product: {{ product.title }}</h3>
    <p>Price: {{ product.price }}</p>
    <button type="button" :disabled="state.inCart" @click="addToCart()">
      Add to cart
    </button>
  </template>
  <p v-else>Product not found</p>
</template>
