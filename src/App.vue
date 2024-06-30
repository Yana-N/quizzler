<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const pageName = computed(() => route.fullPath.includes('question') ? 'questions' : route.name)
const bgPath = computed(() => `background-image: url(images/backgrounds/${pageName.value}.jpg)`)
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
