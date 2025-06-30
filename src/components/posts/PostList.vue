<script setup>
import PostSingle from '@/components/posts/PostSingle.vue'

defineProps({
  posts: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <!-- Post preview-->
  <div v-for="(post, index) in posts" :key="index" class="mb-4">
    <div class="post-preview">
      <PostSingle :post="post" />
    </div>
    <!-- Divider-->
    <hr class="my-4" v-if="index < posts.length - 1" />
  </div>
</template>

<style scoped></style>
