import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useQuestionsStore = defineStore('questions', () => {
  const loading = ref(false)
  const questions = ref([])
  const currentQuestionIndex = ref(0)
  const correctAnswersCount = ref(0)

  const totalQuestionsCount = computed(() => questions.value.length)
  const currentQuestion = computed(() => questions.value[currentQuestionIndex.value])
  const correctAnswer = computed(() => questions.value[currentQuestionIndex.value].correct_answer)

  const getQuestions = async () => {
    if (!!questions.value.length) return

    try {
      loading.value = true

      const res = await fetch(import.meta.env.VITE_QUESTIONS_URL)
      const data = await res.json()

      questions.value = data.results
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
    getQuestions,
    getNextQuestion
  }
})
