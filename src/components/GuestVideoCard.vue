<template>
  <div class="videoCard" :style="style">
    <div class="pausebtn">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.6" cx="40" cy="40" r="30" fill="#CE2127" />
        <circle cx="40" cy="40.0002" r="24.3478" fill="#CE2127" />
        <path d="M52.1739 40.0001L33.913 50.543V29.4572L52.1739 40.0001Z" fill="white" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ img: string; scale: number }>()
const style = `background-image: url('${props.img}');transform:scale(${props.scale || 1})`
</script>

<style scoped>
.videoCard {
  width: 230px;
  height: 230px;
  border-radius: 50%;
  position: relative;
  background-size: contain;
  background-position: center;
}
.pausebtn {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 80px;
}
</style>
