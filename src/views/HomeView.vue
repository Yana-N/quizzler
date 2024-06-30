<script setup>
import StartScreen from '@/components/StartScreen.vue'
import QuizScreen from '@/components/QuizScreen.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isQuizStarted = route.query.question ?? ref(false)

const startQuiz = () => isQuizStarted.value = true
</script>

<template>
  <start-screen @click="startQuiz" v-if="!isQuizStarted" />
  <quiz-screen v-else />
</template>

<style scoped></style>
