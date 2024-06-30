<script setup>
import { computed, toRefs } from 'vue'
import QText from '@/components/Questions/QText.vue'
import QForm from '@/components/Questions/QForm.vue'
import { useQuestionsStore } from '@/stores/questions.js'
import Loader from '@/components/Loader.vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const questionsStore = useQuestionsStore()

router.replace({ query: { ...route.query, question: questionsStore.currentQuestionIndex + 1 } })

questionsStore.getQuestions()

const questionText = computed(() => questionsStore.currentQuestion?.question)
</script>

<template>
  <div class="page">
    <loader v-if="questionsStore.loading" />
    <div
      v-else
      class="container"
    >
      <q-text
        :question="{
            currentIndex: questionsStore.currentQuestionIndex + 1,
            total: questionsStore.totalQuestionsCount,
            text: questionText
          }"
      />
      <q-form />
    </div>
  </div>
</template>

<style scoped>
.page {
  background-image: url('src/assets/images/backgrounds/questions.jpg');
}

.container {
  max-width: 856px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
