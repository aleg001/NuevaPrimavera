<template>
  <button class="tweet-button mt-5" @click="tweet">Compartir en X</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TweetButton',
  setup() {
    function tweet() {
      const targetDate = new Date('2024-01-14T14:00:00-06:00')
      const now = new Date()
      const distance = targetDate.getTime() - now.getTime()

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )

      const tweetTime = `Faltan ${days} días y ${hours} horas`
      const tweetMessage = `${tweetTime} para la #NuevaPrimavera @msemillagt. Creado por @aleg0mez_001. https://t.ly/yHlYx`
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        tweetMessage
      )}`

      window.open(twitterUrl, '_blank')
    }

    return {
      tweet,
    }
  },
})
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
