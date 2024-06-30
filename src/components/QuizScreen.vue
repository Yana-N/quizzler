<script setup>
import { computed } from 'vue'
import QText from '@/components/Questions/QText.vue'
import QForm from '@/components/Questions/QForm.vue'
import { useQuestionsStore } from '@/stores/questions.js'
import { useQueryHandler } from '@/composables/useQueryHandler.js'
import Loader from '@/components/Loader.vue'

const questionsStore = useQuestionsStore()
const { incrementQuestionParam } = useQueryHandler()

incrementQuestionParam()
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
