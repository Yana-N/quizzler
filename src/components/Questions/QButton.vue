<script setup>
import { computed, toRefs } from 'vue'
import { useQuestionsStore } from '@/stores/questions.js'

const questionsStore = useQuestionsStore()
const { currentQuestionIndex, totalQuestionsCount } = toRefs(questionsStore)

const isLastQuestion = computed(() => {
  return currentQuestionIndex.value + 1 === totalQuestionsCount.value
})

const btnText = computed(() => isLastQuestion.value ? 'Finish' : 'Next')
</script>

<template>
  <button
    @click="$emit(isLastQuestion ? 'go-to-results' : 'next')"
    class="button"
  >
    {{ btnText }}
  </button>
</template>

<style scoped lang="scss">
$tablet: var(--tablet);

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

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }

  &[disabled] {
    opacity: 0.8;
    pointer-events: none;
  }
}

@media (max-width: $tablet) {
  .button {
    font-size: 24px;
  }
}
</style>
