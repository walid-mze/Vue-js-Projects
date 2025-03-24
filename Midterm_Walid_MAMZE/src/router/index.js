import { createRouter, createWebHistory } from 'vue-router'
import Library from '@/components/Library.vue'
import BookDetails from '@/components/BookDetails.vue'

const routes = [
  {
    path: '/',
    name: 'library',
    component: Library
  },
  {
    path: '/book/:id',
    name: 'book-details',
    component: BookDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
