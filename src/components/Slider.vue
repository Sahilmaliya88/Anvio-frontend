<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mainSlider">
    <slot></slot>
    <button id="leftbtn" @click="Scroll(-800)" class="btn">
      <svg
        width="13"
        height="22"
        viewBox="0 0 13 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 1L2 11L12 21" stroke="black" stroke-width="2" />
      </svg>
    </button>
    <button id="rightbtn" @click="Scroll(800)" class="btn">
      <svg
        width="13"
        height="22"
        viewBox="0 0 13 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 21L11 11L1 0.999999" stroke="black" stroke-width="2" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

let SliderDiv: Element | undefined
function Scroll(len: number) {
  if (SliderDiv) {
    SliderDiv.scrollLeft += len
  }
}
const props = defineProps<{ index?: number }>()
onMounted(() => {
  SliderDiv = document.querySelectorAll('.mainSlider')[props.index || 0].children[0]
})
</script>
<style scoped>
.mainSlider {
  display: flex;
  position: relative;
}
.btn {
  all: unset;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  z-index: 5;
}
#leftbtn {
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
}
#rightbtn {
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
}
</style>
