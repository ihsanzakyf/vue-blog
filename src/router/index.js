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
      path: '/posts/:id',
      name: 'show',
      component: () => import('@/views/posts/Show.vue'),
      props: true,
    },
  ],
})

export default router
