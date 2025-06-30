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
    <!-- Page Header-->
    <div v-if="post">
      <header class="masthead" style="background-image: url('/assets/img/post-bg.jpg')">
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="post-heading">
                <h1>{{ post.title }}</h1>
                <span v-for="tag in post.tags" :key="tag" class="meta-post">#{{ tag }}</span>
              </div>
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
    <div v-else>
      <p><Loading /></p>
    </div>
  </div>
</template>
