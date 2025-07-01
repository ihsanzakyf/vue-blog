<script setup>
import { onMounted } from 'vue'
import getPost from '@/composable/GetPost.js'
import Loading from '@/components/Loading.vue'
import db from '@/firebase/config.js'
import { deleteDoc, doc } from 'firebase/firestore'

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
})

const handleDelete = async () => {
  if (confirm('Are you sure you want to delete this post?')) {
    loading.value = true
    try {
      await deleteDoc(doc(db, 'posts', props.id))
      alert('Post deleted successfully!')
      window.location.href = '/'
    } catch (err) {
      console.error('Error deleting post:', err)
      alert('Failed to delete post.')
    } finally {
      loading.value = false
    }
  }
}

const { post, error, loading, fetchData } = getPost(props.id)

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <!-- Page Header-->
    <div v-else-if="post">
      <header class="masthead" style="background-image: url('/assets/img/post-bg.jpg')">
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="post-heading">
                <h1>{{ post.title }}</h1>
                <span v-for="tag in post.tags" :key="tag" class="meta-post me-1">#{{ tag }}</span>
              </div>
              <button
                class="btn btn-danger btn-sm rounded-3"
                type="button"
                @click="handleDelete(post.id)"
                :disabled="loading"
              >
                <span v-if="!loading"> <i class="fa fa-trash"></i> Delete Post</span>
                <span v-else>Deleting...</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <!-- Post Content-->
      <article class="mb-4">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <p>
                {{ post.body }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
    <div v-else-if="error">
      <div class="container">
        <p class="alert alert-danger">{{ error }}</p>
      </div>
    </div>
  </div>
</template>
