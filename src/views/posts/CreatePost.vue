<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import db from '@/firebase/config.js'
import { collection, addDoc } from 'firebase/firestore'
import Loading from '@/components/Loading.vue'

const router = useRouter()
const loading = ref(false)

const form = ref({
  title: '',
  body: '',
  tag: '',
  tags: [],
})

const handleKeyDown = (event) => {
  const trimmedTag = form.value.tag.trim()
  if (trimmedTag && !form.value.tags.includes(trimmedTag)) {
    form.value.tags.push(trimmedTag)
  }
  form.value.tag = ''
}

const handleSubmit = async () => {
  const payload = { ...form.value }
  delete payload.tag

  loading.value = true
  try {
    await addDoc(collection(db, 'posts'), payload)

    form.value = {
      title: '',
      body: '',
      tag: '',
      tags: [],
    }

    alert('Post created successfully!')
    router.push({ name: 'home' })
  } catch (err) {
    console.error('Error adding post:', err)
    alert('Failed to create post.')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/assets/img/contact-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="page-heading">
              <h1>Create New Post</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="my-5">
              <form @submit.prevent="handleSubmit">
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="title"
                    type="text"
                    placeholder="Title Post..."
                    v-model="form.title"
                  />
                  <label for="title">Title</label>
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    id="body"
                    placeholder="Enter your body here..."
                    style="height: 12rem"
                    v-model="form.body"
                  ></textarea>
                  <label for="body">Body</label>
                </div>
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="tag"
                    type="text"
                    placeholder="tag Post..."
                    v-model="form.tag"
                    @keydown.enter.prevent="handleKeyDown"
                  />
                  <label for="tag">Tags</label>
                </div>
                <div class="mt-3">
                  <span
                    v-for="(tag, index) in form.tags"
                    :key="tag"
                    class="badge bg-secondary position-relative me-custom p-2 gap-5"
                  >
                    {{ tag }}
                    <span
                      class="position-absolute top-0 start-100 translate-middle align-middle justify-content-center py-1 badge rounded-pill bg-danger cursor-pointer"
                      style="font-size: 0.6rem"
                      @click="form.tags.splice(index, 1)"
                    >
                      x
                    </span>
                  </span>
                </div>

                <br />
                <button class="btn btn-primary text-uppercase" type="submit" :disabled="loading">
                  <span v-if="!loading">Create Post</span>
                  <span v-else>Creating Post...</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.me-custom {
  margin-right: 0.7rem;
}
</style>
