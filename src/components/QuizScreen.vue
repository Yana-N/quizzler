<script setup>
import QText from '@/components/Questions/QText.vue'
import QForm from '@/components/Questions/QForm.vue'
</script>

<template>
  <div class="page">
    <div class="container">
      <q-text />
      <q-form />
    </div>
  </div>
</template>

<style scoped>
.page {
  background-image: url('src/assets/images/backgrounds/questions.jpg');
}

.container {
  max-width: 856px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
