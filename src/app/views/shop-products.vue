<template>
  <template v-if="products">
    <h3>Products</h3>
    <ul class="products">
      <li v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'product', params: { id: product.id } }">
          {{ product.title }}, price: {{ product.price }}
          <product-price :price="product.price"></product-price>
        </router-link>
      </li>
    </ul>
  </template>
  <p v-else>No products found</p>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: null,
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios.post('/products').then((response) => {
        if (response.data) {
          this.products = response.data;
        }
      });
    },
  },
};
</script>
