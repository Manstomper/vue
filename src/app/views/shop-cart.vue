<template>
  <h3>{{ store.state.cartContents.length }} item(s) in cart</h3>
  <ul>
    <li v-for="item in store.state.cartContents" :key="item.id">
      {{ item.title }}, price: {{ item.price }}
      <button type="button" @click="removeFromCart(item.id)">
        Remove from cart
      </button>
    </li>
  </ul>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

function removeFromCart(id) {
  store.commit('removeFromCart', id);
}
</script>
