<script setup>
import IconArrow from '@/assets/images/icons/arrow.vue'
</script>

<template>
  <div class="page">
    <div class="wrapper">
      <h1 class="title"><span>Q</span>uizzler</h1>
      <div class="cta">
        <p>Let’s start the quiz</p>
        <IconArrow />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  cursor: pointer;
  background-image: url('../assets/images/backgrounds/start.jpg');
}

.wrapper {
  position: relative;
  top: -12%;
  right: -10%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  color: var(--black);
}

.title {
  margin: 0;
  font-weight: 600;
  font-size: 128px;
  line-height: 1.2;
}

.title span {
  font-size: 300px;
}

.cta {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 32px;
  font-weight: 600;
}

.cta p {
  margin: 0;
}

@media (max-width: 1024px) {
  .wrapper {
    position: static;
  }

  .title {
    font-size: 64px;
  }

  .title span {
    font-size: 75px;
  }
}
</style>
