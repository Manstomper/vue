<template>
  <template v-if="product">
    <h3>Product: {{ product.title }}</h3>
    <p>Price: {{ product.price }}</p>
    <button type="button" :disabled="inCart" @click="addToCart">
      Add to cart
    </button>
  </template>
  <p v-else>Product not found</p>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      inCart: false,
      product: null,
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      axios.post('/product/' + this.$route.params.id).then((response) => {
        if (response.data) {
          this.product = response.data;
        }
      });
    },
    addToCart() {
      this.$store.commit('addToCart', this.product);
      this.inCart = true;
    },
  },
};
</script>
