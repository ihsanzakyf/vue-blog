<script setup>
import { onMounted } from 'vue'
import getPost from '@/composable/GetPost.js'
import Loading from '@/components/Loading.vue'

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
})

const { post, error, fetchData } = getPost(props.id)

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>
