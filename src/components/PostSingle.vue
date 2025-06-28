<script setup>
import { computed } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

const snippet = computed(() => {
  return props.post.body.substring(0, 50) + '...'
})
</script>

<template>
  <div>
    <h3>{{ props.post.title }}</h3>
    <p>{{ snippet }}</p>
  </div>
</template>

<style scoped></style>
