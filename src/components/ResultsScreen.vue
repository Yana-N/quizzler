<script setup>
import { useQuestionsStore } from '@/stores/questions.js'
import { useQueryHandler } from '@/composables/useQueryHandler.js'

const questionsStore = useQuestionsStore()
const { goToStartPage } = useQueryHandler()
</script>

<template>
  <div class="page">
    <p class="text">Bravo! You have Scored</p>
    <p class="score">{{ questionsStore.correctAnswersCount }}/{{ questionsStore.totalQuestionsCount }}</p>
    <router-link :to="{ name: 'home'}" @click="goToStartPage">
      <p class="action">Wanna Play Again?</p>
    </router-link>
  </div>
</template>

<style scoped>
.page {
  flex-direction: column;
  text-align: center;
  background-image: url('images/backgrounds/results.jpg');
}

.score {
  margin: 0;
  color: var(--white);
  font-size: 300px;
  font-weight: 700;
}

.text {
  margin: 0;
  font-size: 48px;
  font-weight: 700;
}

.action {
  margin: 0;
  font-size: 48px;
  font-weight: 600;
  color: var(--black);
}

@media (max-width: 998px) {
  .score {
    margin: 20px 0;
    font-size: 80px;
  }

  .text, .action {
    font-size: 40px;
  }
}
</style>
