<template>
  <div class="container" :style="style">
    <div id="pause">
      <Pause></Pause>
    </div>
    <div class="content">
      <h1>{{ props.title }}</h1>
      <ul>
        <li>shooter</li>
        <li>30 Min</li>
        <li>1-4 player</li>
        <li>12+</li>
      </ul>
      <div
        style="display: flex; align-items: center;justify-content: center;gap: 15px;width:100%';"
      >
        <button id="btn1">To Book</button>
        <button id="btn2">Read more</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Pause from './Pause.vue'
const props = defineProps(['img', 'title'])
const style = `background-image: url('${props.img}')`
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-size: cover;
  position: relative;
  border-radius: 30px;
  background-position: center;
  transition: 0.1s ease-in;
  border-image: fill 0 linear-gradient(#0001, #0000004f);
}
.container:hover {
  transform: scale(1.01);
  border-image: none;
}
#pause {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.6);
}
.content {
  min-height: 50px;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  bottom: 0;
  display: flex;
  padding: 20px;
  width: 100%;
  color: white;
}
.content > h1 {
  all: unset;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  width: 400px;
  width: 100%;
}
ul {
  display: flex;
  gap: 10px;
  list-style: none;
  width: 100%;
  justify-content: center;
  margin-left: -30px;
}
#btn1 {
  all: unset;
  background-color: #ce2127;
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 50px;
  border: 2px solid #ce2127;
}
#btn2 {
  all: unset;
  border: 2px solid white;
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 50px;
}
</style>
