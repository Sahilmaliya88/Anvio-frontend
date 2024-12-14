<template>
  <div id="hero">
    <div id="hero-left">
      <h1>VR CLUB <span><<</span>ANVIO<span>>></span></h1>
      <h2>Digital entertainment park for the whole family</h2>

      <div class="herolables">
        <Herolable
          img="src\assets\213566984316267915743613 1.png"
          description="Park area: 2100 m²"
        ></Herolable>
        <Herolable img="src\assets\icon2.png" description="Team games"></Herolable>
        <Herolable img="src\assets\icon3.png" description="Freedom of movement"></Herolable>
      </div>
      <div>
        <HeroSlider />
      </div>
    </div>
    <!-- cirlce1 -->
    <div id="circle1">
      <Pause></Pause>
    </div>
    <!-- cirlce2 -->
    <div id="circle2">
      <img v-lazy="`src/assets/circle2img.png`" alt="" />
      <h3>At the center of Moscow in the Central Children's Store (TsDM).</h3>
      <p>
        <svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_936_10203)">
            <path
              d="M27.5495 17.2061L20.7509 0L15 10.0582L9.27239 0L2.45051 17.2061H0.448181V19.8137H10.7392V17.2061H9.20255L10.6927 12.922L15 20L19.3073 12.922L20.7974 17.2061H19.2608V19.8137H29.5518V17.2061H27.5495Z"
              fill="#D92B2C"
            />
          </g>
          <defs>
            <clipPath id="clip0_936_10203">
              <rect width="29.1036" height="20" fill="white" transform="translate(0.448181)" />
            </clipPath>
          </defs>
        </svg>
        Lubyanka — 200 meters away.
      </p>
      <p>
        <svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_936_10203)">
            <path
              d="M27.5495 17.2061L20.7509 0L15 10.0582L9.27239 0L2.45051 17.2061H0.448181V19.8137H10.7392V17.2061H9.20255L10.6927 12.922L15 20L19.3073 12.922L20.7974 17.2061H19.2608V19.8137H29.5518V17.2061H27.5495Z"
              fill="#3a0ca3"
            />
          </g>
          <defs>
            <clipPath id="clip0_936_10203">
              <rect width="29.1036" height="20" fill="white" transform="translate(0.448181)" />
            </clipPath>
          </defs>
        </svg>
        Kuznetsky Most — 120 meters away.
      </p>
      <div>
        <svg
          id="location"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.5347 48.2893C6.1551 37.9097 6.15508 21.081 16.5347 10.7014C26.9144 0.321704 43.7431 0.321729 54.1227 10.7014C64.5023 21.081 64.5023 37.9097 54.1227 48.2893L35.3287 67.0833L16.5347 48.2893ZM27.8111 21.9777C23.6593 26.1296 23.6593 32.8611 27.8111 37.0129C31.963 41.1648 38.6945 41.1647 42.8463 37.0129C46.9981 32.8611 46.9982 26.1296 42.8463 21.9777C38.6945 17.8259 31.9629 17.8259 27.8111 21.9777Z"
            fill="#CE2127"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Herolable from './Herolable.vue'
import HeroSlider from './HeroSlider.vue'
import Pause from './Pause.vue'
</script>
<style scoped>
#hero {
  background-image: url('../assets/herobg.png');
  min-height: calc(110vh);
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 79% 110vh;
  position: relative;
  padding: 10px;
  color: #ffffff;
}
h1 {
  font-size: 80px;
  line-height: 90px;
}
h2 {
  line-height: 60px;
  margin-top: -50px;
  font-size: 40px;
  font-weight: 400;
  width: 70%;
  text-wrap: wrap;
}
#hero-left {
  width: 60%;
  position: absolute;
  top: 50px;
  left: 120px;
}
.herolables {
  display: flex;
  gap: 40px;
}
#circle1 {
  width: 650px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  position: absolute;
  border-radius: 50%;
  right: 20px;
  background-image: url('../assets/heroroundbig.png');
  background-color: #ffffff;
  top: 40px;
  background-size: contain;
  filter: brightness(1.1);
}
#circle2 {
  position: absolute;
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.868);
  border-radius: 50%;
  bottom: -20px;
  left: 60%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  padding: 20px 0;
}
#circle2 > img {
  width: 100px;
  width: 100px;
}
#circle2 > h3 {
  width: 90%;
  text-wrap: wrap;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
}
#circle2 > p {
  margin-top: -15px;
}
#location {
  animation: updown 2s ease-out infinite;
}
@keyframes updown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translatey(0);
  }
}
</style>
