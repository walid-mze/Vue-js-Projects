import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JobDetail from '@/views/JobDetail.vue'
import AddJob from '@/views/AddJob.vue'
import EditJob from '@/views/EditJob.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Jobs/:id',
    name: 'JobDetails',
    component: JobDetail
  },
  {
    path : '/add',
    name : 'AddJob',
    component : AddJob
  },
  {
    path : '/edit/:id',
    name : 'EditJob',
    component : EditJob
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
