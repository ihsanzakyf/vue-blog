import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayouts.vue'
import PageNotFound from '@/layouts/PageNotFound.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'posts/create',
        name: 'createPost',
        component: () => import('@/views/posts/CreatePost.vue'),
      },
      {
        path: 'show/:id',
        name: 'showPost',
        component: () => import('@/views/posts/ShowPost.vue'),
        props: true,
      },
      {
        path: 'tag/:tag',
        name: 'tag',
        component: () => import('@/views/posts/Tag.vue'),
      },
    ],
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: PageNotFound,
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'NotFound' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
