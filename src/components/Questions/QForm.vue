<script setup>
import { onBeforeMount, ref, toRefs } from 'vue'
import { useEventListener } from '@vueuse/core'
import { useQuestionsStore } from '@/stores/questions.js'
import { useQueryHandler } from '@/composables/useQueryHandler.js'
import QField from '@/components/Questions/QField.vue'
import QButton from '@/components/Questions/QButton.vue'

const questionsStore = useQuestionsStore()
const { incrementQuestionParam, goToResultsPage } = useQueryHandler()

const {
  questions,
  currentQuestionIndex,
  correctAnswersCount,
  indexOfCorrectAnswer,
  answerOptions
} = toRefs(questionsStore)

const isButtonDisabled = ref(true)
const isAnswered = ref(false)
const isCorrect = ref(false)
const selectedItem = ref(null)
const button = ref(null)

const nextQuestion = () => {
  questionsStore.getNextQuestion()

  isButtonDisabled.value = true
  isAnswered.value = false

  incrementQuestionParam()

  localStorage.setItem('question-number', (questionsStore.currentQuestionIndex + 1).toString())
  localStorage.removeItem('user-answer-index')
}

const selectOption = (index) => {
  localStorage.setItem('user-answer-index', index)

  isButtonDisabled.value = false
  isAnswered.value = true
  selectedItem.value = index

  isCorrect.value = +index === indexOfCorrectAnswer.value

  if (isCorrect.value) {
    correctAnswersCount.value++
    localStorage.setItem('correct-answer-count', correctAnswersCount.value)
  }
}

const isKeyInRange = (key) => {
  return +key > 0 && +key <= answerOptions.value[0].length
}

const handleKeyup = ({ key }) => {
  if (!isAnswered.value && isKeyInRange(key)) {
    selectOption(+key - 1)
  }
}

onBeforeMount(() => {
  const answer = localStorage.getItem('user-answer-index')

  if (answer) selectOption(answer)
})

useEventListener(window, 'keyup', (e) => {
  handleKeyup(e)
})
</script>

<template>
  <div class="q-form">
    <q-field
      v-for="(text, index) in answerOptions[currentQuestionIndex]"
      :key="index"
      :answer="{ text, index }"
      @select-option="selectOption"
      @keyup="handleKeyup"
      :class="{
        'correct': isAnswered && isCorrect && indexOfCorrectAnswer === +index,
        'error': isAnswered && !isCorrect && +selectedItem === index,
        'done': isAnswered
      }"
    />
  </div>
  <q-button
    ref="button"
    :disabled="isButtonDisabled"
    @next="nextQuestion"
    @go-to-results="goToResultsPage"
    class="button"
  />
</template>

<style scoped lang="scss">
.q-form {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .field {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.button {
  margin-top: 43px;
}
</style>
