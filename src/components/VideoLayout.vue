<template>
  <div id="container" v-if="img">
    <GuestVideoCard :img="img[0]" :scale="1"></GuestVideoCard>
    <div id="containerright">
      <div id="upper">
        <GuestVideoCard v-if="img[1]" :img="img[1]" :scale="0.7"></GuestVideoCard>
      </div>
      <div id="lower"></div>
      <GuestVideoCard :img="img[2]" v-if="img[2]" :scale="0.7"></GuestVideoCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import GuestVideoCard from './GuestVideoCard.vue'
defineProps<{ img: string[] }>()
</script>

<style scoped>
#lower {
  position: relative;
}
#upper {
  margin-left: -30px;
}
#container {
  height: 100%;
  align-items: center;
  display: flex;
  position: relative;
}
#containerright {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
