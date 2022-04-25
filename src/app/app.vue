<script setup>
import { reactive } from 'vue';
import UserNotification from './components/user-notification.vue';
import ExampleComponent from './components/example-component.vue';

const state = reactive({
  loadComponent: false,
  showComponent: false,
  valueFromChild: 'Value from child not emitted',
  exampleValue: 'Initial value from parent',
});

function toggleComponent() {
  state.loadComponent = true;
  state.showComponent = !state.showComponent;
}
</script>

<template>
  <h2>Shop</h2>
  <nav>
    <router-link to="/">All products</router-link>
    <router-link to="/cart">
      View cart ({{ $store.state.cartContents.length }})
    </router-link>
  </nav>
  <router-view />

  <div class="example">
    <button type="button" @click="toggleComponent()">
      Toggle example component
    </button>
    <p>{{ state.valueFromChild }}</p>
    <Transition>
      <div v-show="state.showComponent" class="example">
        <button
          type="button"
          @click="state.exampleValue = 'New value from parent'"
        >
          Change value passed to child
        </button>
        <example-component
          v-if="state.loadComponent"
          :example-prop="state.exampleValue"
          @example-event="(val) => (state.valueFromChild = val)"
        ></example-component>
      </div>
    </Transition>
  </div>

  <user-notification></user-notification>
</template>

<style lang="scss">
.example {
  margin-top: 15px;
  padding: 10px;
  border: 1px dashed #333;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
