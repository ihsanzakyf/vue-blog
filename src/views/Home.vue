<script setup>
import { ref, onMounted } from 'vue'
import PostList from '@/components/PostList.vue'
import getPosts from '@/composable/GetPosts.js'

const { posts, fetchData, error } = getPosts()

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <p>Selamat datang di blog kami!</p>
    <div v-if="error">{{ error }}</div>
    <PostList :posts="posts" />
  </div>
</template>

<style scoped>
.home {
  font-size: 16px;
  color: #333;
  text-align: center;
  margin-top: 10px;
}
</style>
