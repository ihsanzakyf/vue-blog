<script setup>
import PostSingle from '@/components/PostSingle.vue'

defineProps({
  posts: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="post-list">
    <div v-for="(post, index) in posts" :key="index">
      <PostSingle :post="post" />
      <hr />
    </div>
  </div>
</template>

<style scoped></style>
