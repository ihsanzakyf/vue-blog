<script setup>
import { ref, onMounted } from 'vue'
import PostList from '@/components/PostList.vue'

const posts = ref([])
const error = ref(null)

const fetchData = async () => {
  try {
    let data = await fetch('http://localhost:3000/posts')

    if (data.ok) {
      throw new Error('Tidak ada data bung!')
    }
    posts.value = await data.json()
  } catch (err) {
    error.value = err.message
  }
}

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
