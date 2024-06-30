<script setup>
defineProps({
  question: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <p class="score">Question {{ question.currentIndex }}/{{ question.total }}</p>
  <p v-html="question.text" class="text" />
  <hr>
</template>

<style scoped lang="scss">
.score, .text {
  margin: 0 0 42px;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  color: var(--white);
}

hr {
  margin-bottom: 42px;
  max-width: 204px;
  width: 100%;
}

@media (max-width: 998px) {
  .score, .text {
    margin: 0 0 15px;
    font-size: 20px;
  }

  hr {
    margin-bottom: 30px;
  }
}
</style>
