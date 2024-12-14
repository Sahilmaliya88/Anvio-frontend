<template>
  <div class="ReviewContainer">
    <ReviewCard
      v-for="(item, index) in Reviews"
      :key="index"
      :user="item.user"
      :description="item.description"
      :rating="item.rating"
      :date="item.date"
    ></ReviewCard>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ReviewCard from './Review.Card.vue'
type Props = {
  user: {
    name: string
    img: string
  }
  description: string
  rating: number
  date: string
}
const Reviews = reactive<Props[]>([
  {
    user: {
      name: 'Alice Johnson',
      img: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    description:
      'Amazing immersive experience with smooth gameplay and stunning visuals. The virtual environment felt incredibly lifelike, and the interactions within the game were so intuitive that it felt almost natural. Highly recommended for VR enthusiasts who are looking for a deeply engaging experience.',
    rating: 5,
    date: 'Friday December 13, 2024',
  },
  {
    user: {
      name: 'Bob Smith',
      img: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    description:
      'The VR world was fantastic, but the controls were a bit laggy. Still, a solid experience overall. The graphics were quite good, though some areas could use a bit more detail to make it feel more immersive. The multiplayer component is fun, but there were occasional connection issues that interrupted the gameplay. Despite these flaws, I enjoyed the overall experience.',
    rating: 4,
    date: 'Thursday December 12, 2024',
  },
  {
    user: {
      name: 'Charlie Davis',
      img: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    description:
      "A decent game, but could use more variety in environments. It's fun for a short while, but it gets repetitive. The core mechanics are solid, but after a few hours of playing, you start to see the same patterns and environments, which can be a bit boring. However, the movement mechanics were smooth, and the interaction with objects was satisfying.",
    rating: 3,
    date: 'Wednesday December 11, 2024',
  },
  {
    user: {
      name: 'Diana Lee',
      img: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    description:
      "Love the physics and movement mechanics. One of the most enjoyable VR experiences I've had! The attention to detail in the way objects react to your movements makes the game world feel real. I spent hours in the game, constantly exploring every nook and cranny. The dynamic weather system and day-night cycle added to the overall experience, making it feel alive and constantly changing. Highly immersive.",
    rating: 5,
    date: 'Tuesday December 10, 2024',
  },
  {
    user: {
      name: 'Ethan Brown',
      img: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    description:
      "The gameplay was smooth, but the graphics could use some work. The environment felt a bit flat at times, and the character models could have been more detailed. Despite this, the mechanics were solid, and I had fun exploring the various levels. The game's storyline was engaging enough, though I wish the world had more depth and lore to fully immerse me. Still, a good experience overall for those looking for action.",
    rating: 4,
    date: 'Monday December 9, 2024',
  },
  {
    user: {
      name: 'Fiona Green',
      img: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    description:
      "I had a blast in the multiplayer mode! It's awesome to connect with others in virtual reality. The social aspect of this game is its strongest feature. I spent hours chatting with friends and collaborating to complete missions. There were some minor connectivity issues, but nothing that ruined the experience. The combat was intense, and the variety of characters allowed for a lot of creative strategies. Definitely worth it for social VR fans.",
    rating: 5,
    date: 'Sunday December 8, 2024',
  },
  {
    user: {
      name: 'George King',
      img: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    description:
      'Good concept, but the game crashed on me multiple times. Hopefully, future updates will fix the bugs. The game itself is very fun and has a lot of potential, but the technical issues hold it back. The crashes were unpredictable, and I lost some progress a couple of times. If the developers can address the stability issues, this could be a standout VR title. The mechanics are engaging, and the storyline has a lot of promise.',
    rating: 3,
    date: 'Saturday December 7, 2024',
  },
  {
    user: {
      name: 'Hannah White',
      img: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
    description:
      'Amazing visual effects! The atmosphere really draws you in. I would love to see more content in future updates. The level of detail in the environments is incredible—every little detail feels thought out. The lighting and shadows create a hauntingly beautiful atmosphere, and you really get lost in the world. The gameplay is enjoyable, though it could benefit from more interactive elements. Nonetheless, it’s one of the most visually stunning VR games I’ve experienced.',
    rating: 5,
    date: 'Friday December 6, 2024',
  },
  {
    user: {
      name: 'Ian Black',
      img: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    description:
      'The story was intriguing, but I found the controls to be unintuitive. It took a while to get used to. Once I got the hang of it, I started to enjoy the game more, but the learning curve was steep. The plot kept me interested, and I wanted to know what happened next, but the control scheme took me out of the immersion sometimes. With some tweaks to the control system, this could be a much smoother experience.',
    rating: 3,
    date: 'Thursday December 5, 2024',
  },
  {
    user: {
      name: 'Jenna Adams',
      img: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    description:
      'Totally immersive and a great workout! The physical activity involved made it stand out from other VR experiences. I really felt like I was part of the action, constantly moving and using my body to interact with the environment. The game doesn’t just sit you down in front of a screen; it challenges you physically and mentally. While the action is intense, there’s also a sense of relaxation in the environment that helps you recharge. A unique VR experience that blends fitness and fun.',
    rating: 5,
    date: 'Wednesday December 4, 2024',
  },
  {
    user: {
      name: 'Kevin Moore',
      img: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
    description:
      'Decent VR experience, but I found the game a bit too easy. It needs more challenge for advanced players. The puzzles were fun, but they were mostly straightforward, and the combat sequences felt a bit too repetitive. It would be great if the game offered different difficulty levels or more complex mechanics for experienced players. The game has potential, but I feel like it’s more suited for newcomers to VR rather than seasoned veterans.',
    rating: 4,
    date: 'Tuesday December 3, 2024',
  },
  {
    user: {
      name: 'Laura Clark',
      img: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    description:
      "I wasn't a fan of the repetitive gameplay, but the stunning landscapes made it worth a try. The environments were beautifully designed, and I found myself exploring the world just to take in the views. However, the game didn’t offer much beyond that. The same tasks and challenges appeared throughout the game, which made it feel like it lacked variety. The scenery kept me engaged, but I wished the gameplay had more depth.",
    rating: 3,
    date: 'Monday December 2, 2024',
  },
  {
    user: {
      name: 'Mark Evans',
      img: 'https://randomuser.me/api/portraits/men/13.jpg',
    },
    description:
      "Hands down the best VR game I've played. It’s a great mix of action and puzzle-solving. The way the game seamlessly blends combat with exploration and problem-solving made it incredibly fun and rewarding. Every level felt fresh and challenging, with a great balance between action and strategy. The story was gripping, and the character development kept me invested throughout. Highly recommend for anyone looking for a thrilling and immersive VR experience.",
    rating: 5,
    date: 'Sunday December 1, 2024',
  },
  {
    user: {
      name: 'Nina Miller',
      img: 'https://randomuser.me/api/portraits/women/14.jpg',
    },
    description:
      'Great concept but falls short in execution. The potential is there, but the game needs more polish. The idea behind the game was interesting, and I was excited to dive into it, but the execution didn’t quite live up to expectations. The controls were a bit clunky, and the gameplay felt unfinished in certain areas. If the developers can work out the kinks, this could be a solid title, but for now, it’s just average.',
    rating: 3,
    date: 'Saturday November 30, 2024',
  },
])
</script>

<style scoped>
.ReviewContainer {
  overflow-x: scroll;
  align-items: center;
  display: flex;
  gap: 30px;
  overflow-y: visible;
}
</style>
