<template>
  <div class="tooltip" :class="props.className">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['className'])
</script>
<style scoped>
.tooltip {
  color: white;
  font-size: 15px;
  font-weight: 600;
  min-width: 100px;
  text-align: center;
  padding: 0 10px;
  position: absolute;
  transform-origin: end;
  transition: all 0.2s linear;
}
.tooltip:hover {
  background-color: white;
  color: black;
}
.tooltip {
  --s: 1.5em;
  --r: 1em;

  border: var(--s) solid #0000;
  border-radius: calc(var(--r) + var(--s));
  border-top-right-radius: 0;
  background: #929292;
  -webkit-mask:
    radial-gradient(100% 100% at 0 0, #0000 99%, #000 102%) calc(100% - var(--s)) 0 / var(--s)
      var(--s) no-repeat border-box,
    linear-gradient(#000 0 0) padding-box;
}
</style>
