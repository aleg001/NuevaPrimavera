<template>
  <div>
    <button class="tweet-button mt-12" @click="toggleAudio">
      {{ isAudioPlaying ? 'Detener canción' : 'Escuchar canción' }}
    </button>
    <audio ref="audioPlayer" preload="auto" loop>
      <source src="./assets/finalA.wav" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const audioPlayer = ref<HTMLAudioElement | null>(null)
const isAudioPlaying = ref(false)

const toggleAudio = () => {
  if (audioPlayer.value) {
    if (isAudioPlaying.value) {
      audioPlayer.value.pause()
    } else {
      audioPlayer.value.play()
    }
    isAudioPlaying.value = !isAudioPlaying.value
  }
}
</script>

<style scoped>
.tweet-button {
  /* Your button styles here */
  padding: 10px 20px;
  background-color: #01547b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
.tweet-button:hover {
  background-color: #002361;
}
</style>
