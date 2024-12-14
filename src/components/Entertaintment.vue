<template>
  <div id="entertaintmentMain">
    <h1 style="text-transform: capitalize">Our entertainment</h1>
    <div id="btns">
      <ComponetBtn :component="Arena" @changeComponet="(val) => (component = val)"
        >Arena</ComponetBtn
      >
      <ComponetBtn :component="UnderConstruction" @changeComponet="(val) => (component = val)"
        >Attractions</ComponetBtn
      >
      <ComponetBtn :component="UnderConstruction" @changeComponet="(val) => (component = val)"
        >Stands</ComponetBtn
      >
      <ComponetBtn :component="UnderConstruction" @changeComponet="(val) => (component = val)"
        >Cubes</ComponetBtn
      >
    </div>
    <div>
      <component :is="component"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ComponetBtn from './ComponetBtn.vue'
import Arena from './Arena.vue'
import UnderConstruction from './UnderConstruction.vue'
const component = ref(Arena)
</script>

<style scoped>
#entertaintmentMain {
  margin-top: 20px;
  padding: 30px;
}
#btns {
  display: flex;
  width: 100%;
  gap: 5px;
}
</style>
