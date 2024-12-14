<template>
  <div class="offerContainer">
    <OfferCard
      v-for="(offer, index) in data"
      :key="index"
      :validthrough="offer.validthrough"
      :title="offer.title"
      :description="offer.description"
      :img="offer.img"
    ></OfferCard>
  </div>
</template>

<script setup lang="ts">
import { shallowReactive } from 'vue'
import OfferCard from './Offer.Card.vue'
interface props {
  validthrough: number
  img?: string
  title: string
  description: string
}
const data = shallowReactive<props[]>([
  {
    validthrough: 30,
    img: 'https://s3-alpha-sig.figma.com/img/f1ae/4f7e/00348bdf2f16fdada1513ad5651f7ec9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJPkOZ0ZesCipIhYTHd45Nr0TyNMSOO2kwyAX~R6JQkepynqIMvv9RjMk8oRwzOJ6yOjp7HULb0OFvH2R1csURyWVgGm8OZIbQNB5S0A9-npGpBhi43jZ~Y8xjTF1hJkl48pZyDAjdXnTrMi8VQBrhKA2wqJTybLbB6LoH~UGNNIp8tYAhLIwH0ZOym~mKg8j0p3ocnPGKKfLqATXLokYG6sLBcELJYWsnvAGljJ1MuIjHRtqfg3~Bxt9uPiRhf0UVA8v7afaQAtWjQpIJCm09jId-PryhumyT2D4C3wO5bkIwak9VJwjVdbdychu3v9qaFJuqu61eDtP9rzvHBp4g__',
    title: 'Half-Price VR Experience',
    description:
      'Enjoy a thrilling VR adventure at 50% off! Book now and redeem within the next 30 days.',
  },
  {
    validthrough: 15,
    title: 'Family VR Package',
    description:
      'Bring your family together with our special VR package! Offer valid for the next 15 days.',
  },
  {
    validthrough: 45,
    img: 'https://s3-alpha-sig.figma.com/img/f1ae/4f7e/00348bdf2f16fdada1513ad5651f7ec9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJPkOZ0ZesCipIhYTHd45Nr0TyNMSOO2kwyAX~R6JQkepynqIMvv9RjMk8oRwzOJ6yOjp7HULb0OFvH2R1csURyWVgGm8OZIbQNB5S0A9-npGpBhi43jZ~Y8xjTF1hJkl48pZyDAjdXnTrMi8VQBrhKA2wqJTybLbB6LoH~UGNNIp8tYAhLIwH0ZOym~mKg8j0p3ocnPGKKfLqATXLokYG6sLBcELJYWsnvAGljJ1MuIjHRtqfg3~Bxt9uPiRhf0UVA8v7afaQAtWjQpIJCm09jId-PryhumyT2D4C3wO5bkIwak9VJwjVdbdychu3v9qaFJuqu61eDtP9rzvHBp4g__',
    title: 'Unlimited VR Access',
    description: 'Get unlimited access to our VR library for 45 days at a discounted price!',
  },
  {
    validthrough: 60,
    title: 'Virtual Reality Starter Pack',
    description:
      'Get started with VR at a discounted price, including a headset and 2 VR experiences! Offer valid for 60 days.',
  },
  {
    validthrough: 20,
    img: 'https://s3-alpha-sig.figma.com/img/f1ae/4f7e/00348bdf2f16fdada1513ad5651f7ec9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJPkOZ0ZesCipIhYTHd45Nr0TyNMSOO2kwyAX~R6JQkepynqIMvv9RjMk8oRwzOJ6yOjp7HULb0OFvH2R1csURyWVgGm8OZIbQNB5S0A9-npGpBhi43jZ~Y8xjTF1hJkl48pZyDAjdXnTrMi8VQBrhKA2wqJTybLbB6LoH~UGNNIp8tYAhLIwH0ZOym~mKg8j0p3ocnPGKKfLqATXLokYG6sLBcELJYWsnvAGljJ1MuIjHRtqfg3~Bxt9uPiRhf0UVA8v7afaQAtWjQpIJCm09jId-PryhumyT2D4C3wO5bkIwak9VJwjVdbdychu3v9qaFJuqu61eDtP9rzvHBp4g__',
    title: 'VR Date Night',
    description:
      "Have a special VR date night with our discounted couple's package. Valid for the next 20 days.",
  },
  {
    validthrough: 90,
    title: 'Annual VR Subscription',
    description:
      'Sign up for a full year of VR content access at a reduced price! Valid for the next 90 days.',
  },
  {
    validthrough: 25,
    img: 'https://s3-alpha-sig.figma.com/img/f1ae/4f7e/00348bdf2f16fdada1513ad5651f7ec9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJPkOZ0ZesCipIhYTHd45Nr0TyNMSOO2kwyAX~R6JQkepynqIMvv9RjMk8oRwzOJ6yOjp7HULb0OFvH2R1csURyWVgGm8OZIbQNB5S0A9-npGpBhi43jZ~Y8xjTF1hJkl48pZyDAjdXnTrMi8VQBrhKA2wqJTybLbB6LoH~UGNNIp8tYAhLIwH0ZOym~mKg8j0p3ocnPGKKfLqATXLokYG6sLBcELJYWsnvAGljJ1MuIjHRtqfg3~Bxt9uPiRhf0UVA8v7afaQAtWjQpIJCm09jId-PryhumyT2D4C3wO5bkIwak9VJwjVdbdychu3v9qaFJuqu61eDtP9rzvHBp4g__',
    title: 'Virtual Reality Escape Room',
    description:
      'Book a thrilling VR escape room experience at 25% off! Offer valid for the next 25 days.',
  },
  {
    validthrough: 40,
    title: 'VR Group Package',
    description:
      'Bring your friends together with our discounted group VR package! Available for 40 more days.',
  },
  {
    validthrough: 10,
    img: 'https://s3-alpha-sig.figma.com/img/f1ae/4f7e/00348bdf2f16fdada1513ad5651f7ec9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJPkOZ0ZesCipIhYTHd45Nr0TyNMSOO2kwyAX~R6JQkepynqIMvv9RjMk8oRwzOJ6yOjp7HULb0OFvH2R1csURyWVgGm8OZIbQNB5S0A9-npGpBhi43jZ~Y8xjTF1hJkl48pZyDAjdXnTrMi8VQBrhKA2wqJTybLbB6LoH~UGNNIp8tYAhLIwH0ZOym~mKg8j0p3ocnPGKKfLqATXLokYG6sLBcELJYWsnvAGljJ1MuIjHRtqfg3~Bxt9uPiRhf0UVA8v7afaQAtWjQpIJCm09jId-PryhumyT2D4C3wO5bkIwak9VJwjVdbdychu3v9qaFJuqu61eDtP9rzvHBp4g__',
    title: 'VR Arcade Access',
    description:
      'Enjoy access to our VR arcade for a special price. Hurry, offer valid for just 10 days!',
  },
  {
    validthrough: 75,
    title: 'VR Fitness Package',
    description:
      'Get fit with VR! Sign up for our fitness-focused VR package at a discount, valid for the next 75 days.',
  },
  {
    validthrough: 5,
    img: 'https://s3-alpha-sig.figma.com/img/f1ae/4f7e/00348bdf2f16fdada1513ad5651f7ec9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJPkOZ0ZesCipIhYTHd45Nr0TyNMSOO2kwyAX~R6JQkepynqIMvv9RjMk8oRwzOJ6yOjp7HULb0OFvH2R1csURyWVgGm8OZIbQNB5S0A9-npGpBhi43jZ~Y8xjTF1hJkl48pZyDAjdXnTrMi8VQBrhKA2wqJTybLbB6LoH~UGNNIp8tYAhLIwH0ZOym~mKg8j0p3ocnPGKKfLqATXLokYG6sLBcELJYWsnvAGljJ1MuIjHRtqfg3~Bxt9uPiRhf0UVA8v7afaQAtWjQpIJCm09jId-PryhumyT2D4C3wO5bkIwak9VJwjVdbdychu3v9qaFJuqu61eDtP9rzvHBp4g__',
    title: 'Limited Time VR Experience',
    description:
      'Experience the latest VR adventure for a limited time at a special rate. Valid for 5 more days!',
  },
  {
    validthrough: 50,
    title: 'Exclusive VR Content Access',
    description: 'Unlock exclusive VR content for 50 days at a discounted price!',
  },
  {
    validthrough: 35,
    img: 'https://s3-alpha-sig.figma.com/img/f1ae/4f7e/00348bdf2f16fdada1513ad5651f7ec9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJPkOZ0ZesCipIhYTHd45Nr0TyNMSOO2kwyAX~R6JQkepynqIMvv9RjMk8oRwzOJ6yOjp7HULb0OFvH2R1csURyWVgGm8OZIbQNB5S0A9-npGpBhi43jZ~Y8xjTF1hJkl48pZyDAjdXnTrMi8VQBrhKA2wqJTybLbB6LoH~UGNNIp8tYAhLIwH0ZOym~mKg8j0p3ocnPGKKfLqATXLokYG6sLBcELJYWsnvAGljJ1MuIjHRtqfg3~Bxt9uPiRhf0UVA8v7afaQAtWjQpIJCm09jId-PryhumyT2D4C3wO5bkIwak9VJwjVdbdychu3v9qaFJuqu61eDtP9rzvHBp4g__',
    title: 'Virtual Reality Adventure',
    description: 'Embark on a virtual adventure with 30% off. Offer valid for the next 35 days.',
  },
  {
    validthrough: 60,
    title: 'VR Horror Experience',
    description:
      'Get a terrifying VR horror experience at a special price. Valid for the next 60 days!',
  },
  {
    validthrough: 10,
    img: 'https://s3-alpha-sig.figma.com/img/f1ae/4f7e/00348bdf2f16fdada1513ad5651f7ec9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJPkOZ0ZesCipIhYTHd45Nr0TyNMSOO2kwyAX~R6JQkepynqIMvv9RjMk8oRwzOJ6yOjp7HULb0OFvH2R1csURyWVgGm8OZIbQNB5S0A9-npGpBhi43jZ~Y8xjTF1hJkl48pZyDAjdXnTrMi8VQBrhKA2wqJTybLbB6LoH~UGNNIp8tYAhLIwH0ZOym~mKg8j0p3ocnPGKKfLqATXLokYG6sLBcELJYWsnvAGljJ1MuIjHRtqfg3~Bxt9uPiRhf0UVA8v7afaQAtWjQpIJCm09jId-PryhumyT2D4C3wO5bkIwak9VJwjVdbdychu3v9qaFJuqu61eDtP9rzvHBp4g__',
    title: 'VR Movie Night',
    description: 'Watch a movie in VR with a special discount! Offer valid for 10 days only.',
  },
])
</script>

<style scoped>
.offerContainer {
  height: 600px;
  background-color: white;
  width: 100%;
  gap: 30px;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  overflow-x: auto;
}
</style>
