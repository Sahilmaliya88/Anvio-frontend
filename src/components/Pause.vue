<template>
  <button @click="active = !active">
    <svg
      v-if="active"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="-8 0 40 24"
      stroke-width="1"
      stroke="currentColor"
      class="size-6"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="-8 0 40 24"
      stroke-width="1"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref<boolean>(false)
</script>

<style scoped>
button {
  all: unset;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: white;
  color: black;
  display: flex;
  position: relative;
  z-index: 5;
}
button::after {
  content: '';
  position: absolute;
  width: 100%;
  z-index: -1;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.542);
  border-radius: 50%;
  animation: blow 2s ease-in-out infinite;
}
@keyframes blow {
  0% {
    transform: scale(1);
    opacity: 0;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
    filter: blur(1px);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
