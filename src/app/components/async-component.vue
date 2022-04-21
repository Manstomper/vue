<template>
  <button type="button" @click="$emit('asyncEmit', 'You clicked.')">
    {{ asyncProp }}
  </button>
</template>

<script>
export default {
  props: {
    asyncProp: {
      type: String,
      required: true,
      default: 'Prop value not set',
      validator(value) {
        return value == 'Click here';
      },
    },
  },
  emits: ['asyncEmit'],
  mounted() {
    this.$emit('asyncEmit', 'Loaded, but not clicked.');
  },
};
</script>
