<script setup>
import { reactive, ref, computed, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const emit = defineEmits(['exampleEvent']);
const props = defineProps({
  exampleProp: {
    type: Array,
    required: true,
    default: function () {},
  },
});
const state = reactive({
  example: 'Example value',
});

const exampleComputedProp = computed(() => {
  return props.exampleProp + ' (changed in child using a computed property)';
});

const exampleWatchedValue = ref('Watched value');

watch(exampleWatchedValue, () => {
  store.commit('addNotification', {
    key: 'demo-watch',
    message: 'Watched value changed',
  });
});

// To demonstrate that code is not executed until component is loaded
(function () {
  console.debug('Component loaded');
})();
</script>

<template>
  <h2>Reference component</h2>

  <h3>Reactive value</h3>
  <button type="button" @click="state.example = 'New value'">
    Change value
  </button>
  <p>{{ state.example }}</p>

  <h3>Emitted value</h3>
  <button
    type="button"
    @click="emit('exampleEvent', 'Emitted value from child')"
  >
    Emit value
  </button>

  <h3>Watched value</h3>
  <button type="button" @click="exampleWatchedValue = !exampleWatchedValue">
    Change watched value
  </button>

  <h3>Value from parent</h3>
  <p>{{ props.exampleProp }}</p>
  <p>{{ exampleComputedProp }}</p>
</template>
