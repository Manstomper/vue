<script setup>
import { usePostQuery } from '../use/query';

const products = usePostQuery('/products/');
</script>

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
</template>
