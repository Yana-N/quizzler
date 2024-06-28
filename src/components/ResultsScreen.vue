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
  text-align: center;
  background-image: url('../assets/images/backgrounds/results.jpg');
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
