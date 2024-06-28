<script setup>

</script>

<template>
  <button class="button">Next</button>
</template>

<style scoped>
.button {
  padding: 15px 34px;
  background-color: var(--blue-light);
  color: var(--violet);
  border: none;
  border-radius: 10px;
  font-size: 36px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background-color, opacity 0.2s;
}

.button:hover {
  opacity: 0.9;
}

.button:active {
  opacity: 0.7;
}
</style>
