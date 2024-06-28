<script setup>
</script>

<template>
  <div class="page">
    <p class="text">Bravo! You have Scored</p>
    <p class="score">9/10</p>
    <p class="action">Wanna Play Again?</p>
  </div>
</template>

<style scoped>
.page {
  flex-direction: column;
  background-image: url('../assets/images/backgrounds/results.jpg');
}

.page p {
  margin: 0;
}

.score {
  color: var(--white);
  font-size: 300px;
  font-weight: 700;
}

.text {
  font-size: 48px;
  font-weight: 700;
}

.action {
  font-size: 48px;
  font-weight: 600;
}
</style>
