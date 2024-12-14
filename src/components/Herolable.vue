<template>
  <div class="lablecontainer">
    <img :src="img" alt="" />
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps(['img', 'description'])
console.log(props)
</script>

<style scoped>
.lablecontainer {
  display: flex;
  width: 190px;
  align-items: center;
  gap: 15px;
}
.lablecontainer > img {
  width: 60px;
  height: 60px;
}
.lablecontainer > p {
  font-size: 18px;
  font-weight: 600;
}
</style>
