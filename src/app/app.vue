<template>
  <h2>Shop</h2>
  <nav>
    <router-link to="/">All products</router-link>
    <router-link to="/cart">
      View cart ({{ $store.state.cartContents.length }})
    </router-link>
  </nav>
  <router-view />
  <error-alert v-if="hasError">An error has occurred.</error-alert>
</template>

<script>
export default {
  data() {
    return {
      hasError: false,
    };
  },
  errorCaptured() {
    this.hasError = true;
  },
};
</script>
