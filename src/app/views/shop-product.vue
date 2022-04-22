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

<script setup>
import { reactive } from 'vue';
import { useFetch } from './../use/fetch';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();
const product = useFetch('/product/' + route.params.id);
const state = reactive({
  inCart: store.state.cartContents.find((item) => item.id == route.params.id),
});

function addToCart() {
  store.commit('addToCart', product);
  state.inCart = true;
}
</script>
