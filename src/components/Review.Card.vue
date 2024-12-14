<template>
  <div class="reviewcard">
    <div class="avatar-container">
      <img :src="user.img" class="avatar" :alt="user.name" />
      <div class="avatar-dec">
        <p style="">{{ user.name }}</p>
        <div style="display: flex; gap: 5px">
          <Rating :model-value="rating" :default-value="0" readonly />
          <p>{{ new Date(date).toDateString() }}</p>
        </div>
      </div>
    </div>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { Rating } from 'primevue'
type Props = {
  user: {
    name: string
    img: string
  }
  description: string
  rating: number
  date: string
}
defineProps<Props>()
</script>
<style scoped>
.avatar-dec > div {
  margin-top: -20px;
}
.description {
  overflow-y: hidden;
  text-align: justify;
  height: calc(100% - 120px);
}
.avatar-container {
  display: flex;
  align-items: center;
  gap: 9px;
}
.p-rating {
  --p-rating-gap: 2px;
  --p-rating-icon-active-color: #ce2127;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
.reviewcard {
  height: 320px;
  width: 440px;
  padding: 50px;
  border-radius: 30px;
  background-color: white;
  transition: 0.1s linear;
  flex-shrink: 0;
  z-index: 5;
  scroll-snap-align: center;
}
.reviewcard:hover {
  position: relative;
  height: 420px;
}
.reviewcard:hover .description {
  overflow: auto;
}
</style>
