<script setup>
import { ref, computed, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useEventListener } from '@vueuse/core'
import QField from '@/components/Questions/QField.vue'
import QButton from '@/components/Questions/QButton.vue'
import { useQuestionsStore } from '@/stores/questions.js'
import { getKeyByValue } from '@/utils.js'

const router = useRouter()
const route = useRoute()

const questionsStore = useQuestionsStore()

const {
  questions,
  currentQuestionIndex,
  correctAnswersCount,
  correctAnswer
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

  router.replace({ query: { ...route.query, question: currentQuestionIndex.value + 1 } })
}

const goToResults = () => router.push({ name: 'results' })

const answerOptions = questions.value.map(q => {
  return Object.values({ ...q.incorrect_answers, [q.incorrect_answers.length]: q.correct_answer })
})

const indexOfCorrectAnswer = computed(() => {
  return parseInt(
    getKeyByValue(answerOptions[currentQuestionIndex.value], correctAnswer.value
    ), 10)
})

const selectOption = (index) => {
  isButtonDisabled.value = false
  isAnswered.value = true
  selectedItem.value = index

  isCorrect.value = +index === indexOfCorrectAnswer.value

  if (isCorrect.value) correctAnswersCount.value++
}

const isKeyInRange = (key) => {
  return +key > 0 && +key <= answerOptions[0].length
}

const handleKeyup = ({ key }) => {
  if (!isAnswered.value && isKeyInRange(key)) {
    selectOption(+key - 1)
  }
}

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
        'error': isAnswered && !isCorrect && selectedItem === index,
        'done': isAnswered
      }"
    />
  </div>
  <q-button
    ref="button"
    :disabled="isButtonDisabled"
    @next="nextQuestion"
    @go-to-results="goToResults"
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
