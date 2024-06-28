<script setup>
import QField from '@/components/Questions/QField.vue'
import QButton from '@/components/Questions/QButton.vue'
</script>

<template>
  <div class="q-form">
    <q-field />
    <q-field class="correct" />
    <q-field class="error" />
    <q-field class="done" />
  </div>
  <q-button class="button" />
</template>

<style scoped>
.q-form {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.q-form .field {
  margin-bottom: 15px;
}

.q-form .field:last-child {
  margin-bottom: 0px;
}

.button {
  margin-top: 43px;
}
</style>
