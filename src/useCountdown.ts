import { ref, Ref } from 'vue';

export function useCountdown(targetDate: Date): { countdown: Ref<string>, startCountdown: () => void } {
  const countdown = ref<string>('');

  function updateCountdown() {
    const now = new Date();
    const distance = targetDate.getTime() - now.getTime();
    
    if (distance < 0) {
      countdown.value = 'La primavera llegó a Guatemala. Bernardo y Karin, ¡el pueblo está con ustedes!';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.value = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }



  function startCountdown() {
    updateCountdown(); // Initialize countdown
    setInterval(updateCountdown, 1000); // Update countdown every second
  }
  

  return { countdown, startCountdown };
}
