<script setup lang="ts">
import CountdownTimer from './CountdownTimer.vue'
</script>

<template>
  <CountdownTimer />
  <audio autoplay loop>
    <source src="./assets/finalA.wav" type="audio/wav" />
    Your browser does not support the audio element.
  </audio>
</template>
