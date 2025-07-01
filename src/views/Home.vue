<script setup>
import { ref, onMounted } from 'vue'

import Loading from '@/components/Loading.vue'
import PostList from '@/components/posts/PostList.vue'
import getPosts from '@/composable/GetPosts.js'

const { posts, fetchData, error } = getPosts()

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('assets/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Vue - Blog</h1>
              <span class="subheading">A Blog Start With Vue.js and Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7 position-relative">
          <div>
            <button
              class="btn btn-sm btn-info rounded-3 position-absolute top-0 end-0 translate-middle mb-3 text-white"
              type="button"
              @click="$router.push({ name: 'createPost' })"
            >
              <i class="fa fa-plus"></i> New Post
            </button>
          </div>
          <div v-if="posts.length">
            <PostList :posts="posts" />
          </div>
          <div v-else-if="error" class="text-center mb-5">{{ error }}</div>
          <div v-else><Loading /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
