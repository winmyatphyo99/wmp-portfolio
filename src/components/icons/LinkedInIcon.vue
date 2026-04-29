<script setup>
defineProps({
  color: {
    type: String,
    default: "currentColor"
  }
});
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    :fill="color"
   
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2.1-2.2 4.3-2.2 4.6 0 5.4 3 5.4 6.9V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.2V24h-5V8z"/>
  </svg>
</template>