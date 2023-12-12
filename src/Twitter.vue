<template>
  <button class="tweet-button mt-12" @click="tweet">Compartir en X</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCountdown } from './useCountdown'

export default defineComponent({
  name: 'TweetButton',
  setup() {
    const targetDate = new Date('2024-01-14T14:00:00-06:00')
    const { countdown } = useCountdown(targetDate)

    function tweet() {
      // Assume countdown is in the format "Xd Yh Zm As" where X, Y, Z, A are numbers
      const timeParts = countdown.value.match(/(\d+)d (\d+)h/)
      let tweetTime = ''
      if (timeParts) {
        tweetTime = `Faltan ${timeParts[1]} días y ${timeParts[2]} horas`
      }

      const tweetMessage = `${tweetTime} para la #NuevaPrimavera @msemillagt`
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
