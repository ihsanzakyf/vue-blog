import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/posts/create',
      name: 'createPost',
      component: () => import('@/views/posts/CreatePost.vue'),
      props: true,
    },
    {
      path: '/posts/:id',
      name: 'showPost',
      component: () => import('@/views/posts/ShowPost.vue'),
      props: true,
    },
    {
      path: '/tag/:tag',
      name: 'tag',
      component: () => import('@/views/posts/Tag.vue'),
    },
  ],
})

export default router
