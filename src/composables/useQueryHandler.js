import { useRoute, useRouter } from 'vue-router'
import { useQuestionsStore } from '@/stores/questions.js'

export function useQueryHandler() {

  const router = useRouter()
  const route = useRoute()
  const questionsStore = useQuestionsStore()

  function incrementQuestionParam() {
    return router.replace({ query: { ...route.query, 'question': questionsStore.currentQuestionIndex + 1 } })
  }

  function goToResultsPage() {
    return router.push({ name: 'results' })
  }

  return {
    incrementQuestionParam,
    goToResultsPage
  }
}
