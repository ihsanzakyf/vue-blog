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
  <RouterLink :to="{ name: 'showPost', params: { id: props.post.id } }" class="cursor">
    <h2 class="post-title">
      {{ props.post.title }}
    </h2>
    <h3 class="post-subtitle">{{ snippet }}</h3>
  </RouterLink>
  <span v-for="tag in props.post.tags" :key="tag" class="post-meta text-muted me-1">
    <RouterLink :to="{ name: 'tag', params: { tag: tag } }">#{{ tag }}</RouterLink>
  </span>
</template>

<style scoped>
.cursor {
  cursor: pointer;
  text-decoration: none;
  color: #333;
}
</style>
