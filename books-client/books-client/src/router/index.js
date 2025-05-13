import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
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
    },
    {
      path: '/books',
      name: 'books list',
      component: () => import('@/views/BooksView.vue')
    },
    {
      path: '/books/:id',
      name: 'about book',
      component: () => import('@/views/AboutBookView.vue')
    },
    {
      path: '/books/:id/reviews',
      name: 'display reviews',
      component: () => import('@/views/ReviewsView.vue')
    },
    {
      path: '/books/:id/createreview',
      name: 'create reviews',
      component: () => import('@/views/CreateReviewView.vue')
    }
  ],
})

export default router
