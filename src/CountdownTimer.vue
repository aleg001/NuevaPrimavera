<template>
  <div
    class="flex flex-col items-center justify-center h-screen bg-spring-blue text-spring-yellow p-6 text-center"
  >
    <h1 class="text-3xl mb-4 md:mt-0 -mt-48 text-[#C4DC46]">Faltan</h1>
    <p class="text-6xl font-bold">{{ countdown }}</p>

    <transition name="fade" mode="out-in">
      <h1
        class="text-3xl mt-2 phrase md:mt-4 text-[#019DA8]"
        :key="currentElement"
      >
        para {{ currentElement }}
      </h1>
    </transition>
    <Play />
    <Twitter />

    <span class="md:mt-64 mt-32">
      Copyright © 2023
      <a href="https://linktr.ee/aleg_001" target="_blank" class="no-underline"
        >Ale Gómez</a
      >
      (<a
        href="https://www.instagram.com/aleg_001"
        target="_blank"
        class="no-underline"
        >IG: @aleg_001</a
      >,
      <a
        href="https://twitter.com/aleg0mez_001"
        target="_blank"
        class="no-underline"
        >X: @aleg0mez_001</a
      >)
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted } from 'vue'
import { useCountdown } from './useCountdown'
import Twitter from './Twitter.vue'
import Play from './Play.vue'

export default defineComponent({
  name: 'CountdownTimer',
  components: {
    Twitter,
    Play,
  },
  setup() {
    const targetDate = new Date('2024-01-14T14:00:00-06:00')
    const { countdown, startCountdown } = useCountdown(targetDate)

    const elements = ref([
      'Arévalo Presi',
      'Karin Vice',
      'que el país mejore',
      'cambiar Guate',
      'rescatar Guate',
      '23 dipus 🌱',
      'Menkos 🌱',
      'Patty 🌱',
      'Samuel 🌱',
      'Román 🌱',
      'Elena 🌱',
      'Andrea R 🌱',
      'Andrea V 🌱',
      'Laura 🌱',
      'Raúl 🌱',
      'Brenda 🌱',
      'José 🌱',
      'Ronalth 🌱',
      'Ivanna 🌱',
      'Mirna 🌱',
      'Illescas 🌱',
      'Luis 🌱',
      'Toledo 🌱',
      'Mercedes 🌱',
      'Orlando 🌱',
    ])

    const currentElement = ref(elements.value[0])
    let index = 0

    function changePhrase() {
      // Get a random index, ensuring it's different from the current one to avoid repetition
      let randomIndex
      do {
        randomIndex = Math.floor(Math.random() * elements.value.length)
      } while (randomIndex === index)

      index = randomIndex // Update the index with the new random value
      currentElement.value = elements.value[index] // Update the current element
    }

    const intervalId = setInterval(changePhrase, 4000)

    onMounted(() => {
      startCountdown()
    })

    onUnmounted(() => {
      clearInterval(intervalId)
    })

    return {
      countdown,
      currentElement,
    }
  },
})
</script>

<style scoped>
.phrase {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  width: 100%;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
