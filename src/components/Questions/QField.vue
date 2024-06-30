<script setup>
import { convertNumToLetter } from '@/utils.js'

defineProps({
  answer: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div
    @click="$emit('select-option', answer.index)"
    class="field"
  >
    <div class="index">{{ convertNumToLetter(answer.index) }}</div>
    <p v-html="answer.text" class="text" />
  </div>
</template>

<style scoped lang="scss">
.field {
  max-width: 700px;
  width: 100%;
  padding: 25px 40px;
  display: flex;
  align-items: center;
  gap: 45px;
  background-color: var(--white);
  border-radius: 10px;
  transition: color, background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--violet-hover);
    cursor: pointer;
  }

  &.done {
    pointer-events: none;
  }

  &.correct {
    background: var(--blue-light);

    .index {
      background: var(--blue);
      color: var(--white);
    }

    .text {
      color: var(--violet);
    }
  }

  &.error {
    background: var(--red-light);

    .index {
      background: var(--red);
      color: var(--white);
    }

    .text {
      color: var(--white);
    }
  }
}

.index {
  text-transform: uppercase;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  background: var(--violet-light);
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.05);
  font-size: 32px;
  font-weight: 600;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--violet);
}

.text {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
}

@media (max-width: 998px) {
  .field {
    padding: 20px;
    gap: 20px
  }

  .text {
    font-size: 18px;
  }
}
</style>
