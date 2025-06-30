<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

import Loading from '@/components/Loading.vue'
import PostList from '@/components/posts/PostList.vue'
import getPosts from '@/composable/GetPosts.js'

const { posts, fetchData, error } = getPosts()
const route = useRoute()

onMounted(() => {
  fetchData()
})

const postsWithTag = computed(() => {
  return posts.value.filter((post) => post.tags.includes(route.params.tag))
})
</script>

<template>
  <div>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/assets/img/post-sample-image.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Tag - Blog</h1>
              <span class="subheading">Posts by Tag</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div v-if="error">{{ error }}</div>
          <div v-if="postsWithTag.length === 0" class="text-center mb-5">
            <h3>No posts found</h3>
          </div>
          <div v-if="posts.length">
            <PostList :posts="postsWithTag" />
          </div>
          <div v-else><Loading /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
