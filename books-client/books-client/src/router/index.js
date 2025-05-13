import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllBooksView from '@/views/AllBooksView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/books',
    name: 'books',
    component: AllBooksView,
  },  
  {
      path: '/signin',
      name: 'signin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/SigninView.vue'),
  },
  {
  path: '/AdminPanel',
  name: 'admin',
  component: () => import('@/views/AdminView.vue') 
},
{
  path: '/login',
  name: 'login',
  component: () => import('@/views/LoginView.vue') 
},
{
  path: '/register',
  name: 'register',
  component: () => import('@/views/RegisterView.vue') 
}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})



export default router
