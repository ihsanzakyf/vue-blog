<script setup>
import { computed } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter()

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
    <RouterLink :to="{ name: 'show', params: { id: props.post.id } }" class="cursor">
      <h3>{{ props.post.title }}</h3>
      <p>{{ snippet }}</p>
    </RouterLink>
  </div>
</template>

<style scoped>
.cursor {
  cursor: pointer;
  text-decoration: none;
  color: #333;
}
</style>
