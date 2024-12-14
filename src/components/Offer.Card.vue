<template>
  <div class="offercard">
    <div class="content">
      <p>{{ validthrough }} days</p>
      <img v-if="img" class="offertemp" :src="img" alt="offer" />
      <h1>{{ title }}</h1>
      <p style="text-align: justify; margin-top: -20px">{{ description }}</p>
    </div>
    <button class="lm">Read More</button>
  </div>
</template>

<script lang="ts" setup>
interface props {
  validthrough: number
  img?: string
  title: string
  description: string
}
defineProps<props>()
</script>

<style lang="css" scoped>
.content {
  height: calc(100% - 60px);
}
.offercard {
  background-color: #ff6e3b;
  background-image: linear-gradient(147deg, #cc5233 0%, #ce2127 74%);
  height: 580px;
  width: 400px;
  border-radius: 30px;
  padding: 50px;
  color: white;
  flex-shrink: 0;
}
.offertemp {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
}
.lm {
  all: unset;
  border: 2px solid white;
  border-radius: 50px;
  padding: 10px 50px;
  margin-top: 10px;
}
</style>
