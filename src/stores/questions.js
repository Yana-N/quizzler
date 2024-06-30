import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'
import { getKeyByValue } from '@/utils.js'

export const useQuestionsStore = defineStore('questions', () => {
  const loading = ref(true)
  const questions = ref([])
  const currentQuestionIndex = ref(0)
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
    if (!!questions.value.length) return

    try {
      const { isFetching, data } = await useFetch(import.meta.env.VITE_QUESTIONS_URL)

      questions.value = JSON.parse(data.value).results
      loading.value = isFetching.value
    } catch (e) {
      console.log(e)
    } finally {
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
