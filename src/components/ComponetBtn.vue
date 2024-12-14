<template>
  <button class="ent-btn" @click="$emit('changeComponet', component)">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps(['component'])
defineEmits(['changeComponet'])
</script>

<style scoped>
.ent-btn {
  all: unset;
  width: 25%;
  background-color: rgb(247, 247, 247);
  border: 5px solid white;
  padding: 10px 30px;
  border-radius: 20px;
  transition: 0.2s linear;
  color: #ce2127;
  font-size: 20px;
  display: flex;
  justify-content: center;
  position: relative;
  font-weight: 600;
}
.ent-btn::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  bottom: -12px;
  transform: rotate(45deg);
  z-index: -1;
  display: none;
}
.ent-btn:focus::after {
  display: block;
}
.ent-btn:focus {
  background-color: white;
  color: black;
}
</style>
