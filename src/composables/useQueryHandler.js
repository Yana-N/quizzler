import { useRoute, useRouter } from 'vue-router'
import { useQuestionsStore } from '@/stores/questions.js'

export function useQueryHandler() {

  const router = useRouter()
  const route = useRoute()
  const questionsStore = useQuestionsStore()

  function incrementQuestionParam() {
    const questionNumber = questionsStore.currentQuestionIndex + 1

    return router.replace({ query: { ...route.query, 'question': questionNumber } })
  }

  function goToResultsPage() {
    return router.push({ name: 'results' })
  }

  function goToStartPage() {
    localStorage.clear()
    questionsStore.currentQuestionIndex = 0

    return router.push({ name: 'home' })
  }

  return {
    incrementQuestionParam,
    goToResultsPage,
    goToStartPage
  }
}
