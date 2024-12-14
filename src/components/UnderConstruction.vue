<template>
  <div id="main">
    <img v-lazy="'https://media.tenor.com/hB9OTbewrikAAAAi/work-work-in-progress.gif'" alt="" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#main {
  min-height: 600px;
  background-color: white;
  margin-top: 15px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
