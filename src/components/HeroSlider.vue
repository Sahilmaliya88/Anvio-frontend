<template>
  <!-- first -->
  <div id="slidermain">
    <div id="slider">
      <!-- slider img with content -->
      <div v-for="(item, index) in slides" :key="index" class="heroslides">
        <h3 style="text-wrap: wrap">{{ item.head }}</h3>
        <button>{{ item.btnText }}</button>
      </div>
    </div>
    <!-- dots -->
    <div class="dotcontainer">
      <button
        v-for="(_item, index) in slides"
        :class="['dots', `${index === currindex ? 'active' : 'inactive'}`]"
        :key="index"
        @click="currindex = index"
      ></button>
    </div>
    <button id="prev" @click="descrease" class="slidechangebtn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
    <button id="next" @click="increase" class="slidechangebtn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        className="size-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
    <!-- buttons for the slider -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
const currindex = ref<number>(0)
type slides = {
  head: string
  btnText: string
}
let sliderDiv = document.getElementById('slider')
onMounted(() => {
  sliderDiv = document.getElementById('slider')
})
const slides = reactive<slides[]>([
  {
    head: 'Birthday from 1490 ₽',
    btnText: 'Calculate the cost',
  },
  {
    head: '50% discount on the second session',
    btnText: 'Get a discount',
  },
  {
    head: 'Team bonus 1000 ₽',
    btnText: 'Get Bonus',
  },
])
watch(currindex, (val: number) => {
  if (sliderDiv) {
    sliderDiv.scrollLeft = val * sliderDiv.offsetWidth
  }
})
function descrease() {
  if (currindex.value > 0) {
    currindex.value--
  } else {
    currindex.value = slides.length - 1
  }
}
function increase() {
  if (currindex.value < slides.length - 1) {
    currindex.value += 1
  } else {
    currindex.value = 0
  }
}
</script>

<style scoped>
#slidermain {
  width: 400px;
  position: relative;
}
#slider {
  width: 400px;
  height: 150px;
  background-color: rgba(215, 215, 215, 0.271);
  border-radius: 30px;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
}
#slider::-webkit-scrollbar {
  display: none;
}
.heroslides {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  align-items: start;
  padding-left: 35px;
}
.heroslides > button {
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 10px 40px;
  margin-top: -15px;
  border-radius: 50px;
}
.dots {
  all: unset;
  width: 8px;
  height: 8px;
  background-color: rgba(215, 215, 215, 0.271);
  border-radius: 50%;
  border: none;
}
.active {
  background-color: white;
}
.dotcontainer {
  display: flex;
  gap: 5px;
  padding: 5px;
  margin-top: 5px;
  justify-content: center;
}
#prev {
  position: absolute;
  top: 0;
  top: 46%;
  transform: translate(-50%, -50%);
}
#next {
  position: absolute;
  top: 46%;
  transform: translate(50%, -50%);
  right: 0;
}
.slidechangebtn {
  background-color: white;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
