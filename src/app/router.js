import { createRouter, createWebHashHistory } from 'vue-router';
import ShopProducts from './views/shop-products.vue';
import ShopProduct from './views/shop-product.vue';
import ShopCart from './views/shop-cart.vue';

const routes = [
  { path: '/', component: ShopProducts, props: true },
  { path: '/product/:id', component: ShopProduct, name: 'product' },
  { path: '/cart', component: ShopCart },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
