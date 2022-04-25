<template>
  <div v-if="$store.state.notifications.length" class="alerts">
    <button type="button" @click="$store.commit('clearNotifications')">
      Close
    </button>
    <p
      v-for="notification in $store.state.notifications"
      :key="notification.key"
      :class="notification.type ? notification.type : null"
    >
      {{ notification.message }}
    </p>
  </div>
</template>

<style lang="scss">
.alerts {
  position: relative;

  button {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  p {
    padding: 10px 10px 10px 60px;
    background-color: #eee;

    &.error {
      background-color: lightcoral;
      border-color: red;
    }
  }
}
</style>
