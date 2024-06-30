import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'
import { getKeyByValue } from '@/utils.js'

export const useQuestionsStore = defineStore('questions', () => {
  const savedQuestion = localStorage.getItem('question-number')
  const savedQuestions = JSON.parse(localStorage.getItem('questions'))

  const loading = ref(false)
  const questions = ref(savedQuestions ?? [])
  const currentQuestionIndex = ref(savedQuestion ? parseInt(savedQuestion) - 1 : 0)
  const correctAnswersCount = ref(0)

  const totalQuestionsCount = computed(() => questions.value.length)

  const currentQuestion = computed(() => questions.value[currentQuestionIndex.value])

  const correctAnswer = computed(() => questions.value[currentQuestionIndex.value].correct_answer)

  const answerOptions = computed(() => {
    return questions.value.map(q => {
      return Object.values({
        ...q.incorrect_answers,
        [q.incorrect_answers.length]: q.correct_answer
      })
    })
  })

  const indexOfCorrectAnswer = computed(() => {
    return parseInt(
      getKeyByValue(answerOptions.value[currentQuestionIndex.value], correctAnswer.value
      ), 10)
  })

  const getQuestions = async () => {
    if (questions.value?.length > 0) return

    try {
      loading.value = true

      const { data } = await useFetch(import.meta.env.VITE_QUESTIONS_URL)

      questions.value = JSON.parse(data.value).results
      localStorage.setItem('questions', JSON.stringify(questions.value))
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  const getNextQuestion = () => currentQuestionIndex.value++

  return {
    loading,
    questions,
    currentQuestion,
    currentQuestionIndex,
    correctAnswersCount,
    totalQuestionsCount,
    correctAnswer,
    answerOptions,
    indexOfCorrectAnswer,
    getQuestions,
    getNextQuestion
  }
})
