<template>
  <template v-if="products">
    <h3>Products</h3>
    <ul class="products">
      <li v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'product', params: { id: product.id } }">
          {{ product.title }}, price: {{ product.price }}
        </router-link>
      </li>
    </ul>
  </template>
  <p v-else>No products found</p>

  <div>
    <button type="button" @click="showAsync = true">Load AsyncComponent</button>
    <async-component
      v-if="showAsync"
      async-prop="Click here"
      @async-emit="(val) => (asyncPropValue = val)"
    ></async-component>
    <p>{{ asyncPropValue }}</p>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import axios from 'axios';
import AsyncComponent from './../components/async-component.vue';

export default {
  components: {
    AsyncComponent: defineAsyncComponent(() => {
      return new Promise((resolve) => {
        resolve(AsyncComponent);
      });
    }),
  },
  data() {
    return {
      products: null,
      asyncPropValue: 'Not loaded.',
      showAsync: false,
      hasError: false,
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios
        .post('/products')
        .then((response) => {
          if (response.data) {
            this.products = response.data;
          }
        })
        .catch(() => {});
    },
  },
};
</script>
