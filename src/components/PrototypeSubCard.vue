<template>
  <div class="card">
    <div class="icon">
      <slot></slot>
    </div>
    <div class="content">
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps(['title', 'description'])
</script>

<style scoped>
.card {
  display: flex;
  width: 100%;
  gap: 30px;
  margin-top: 5px;
  min-height: 100px;
  align-items: center;
}
.icon {
  height: 100%;
  display: flex;
}
.title {
  font-size: 30px;
  line-height: 35px;
}
.description {
  margin-top: -20px;
  font-size: 16px;
}
.content {
  display: flex;
  flex-direction: column;
}
</style>
