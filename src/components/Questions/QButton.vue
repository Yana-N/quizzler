<script setup>
import { computed, toRefs } from 'vue'
import { useQuestionsStore } from '@/stores/questions.js'

const emit = defineEmits(['go-to-results', 'next'])

const questionsStore = useQuestionsStore()
const { currentQuestionIndex, totalQuestionsCount } = toRefs(questionsStore)

const isLastQuestion = computed(() => {
  return currentQuestionIndex.value + 1 === totalQuestionsCount.value
})

const btnText = computed(() => isLastQuestion.value ? 'Finish' : 'Next')

const navigatePage = () => emit(isLastQuestion.value ? 'go-to-results' : 'next')
</script>

<template>
  <button
    @click="navigatePage"
    class="button"
  >
    {{ btnText }}
  </button>
</template>

<style scoped lang="scss">
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

@media (max-width: 998px) {
  .button {
    margin-top: 20px;
    font-size: 18px;
  }
}
</style>
