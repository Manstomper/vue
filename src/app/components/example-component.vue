<template>
  <button type="button" @click="$emit('exampleEmit', 'You clicked')">
    {{ exampleProp }}
  </button>
</template>

<script>
export default {
  props: {
    exampleProp: {
      type: String,
      required: true,
      default: 'Prop value not set',
      validator(value) {
        return value == 'Click here';
      },
    },
  },
  emits: {
    exampleEmit: (value) => {
      return value == 'You clicked';
    },
  },
};
</script>
